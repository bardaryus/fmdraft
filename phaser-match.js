let phaserGame = null;

class MatchScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MatchScene' });
  }

  init(data) {
    this.matchResult = data.result;
    this.onMatchEnd = data.onMatchEnd;
    this.onGoal = data.onGoal;
    this.onShot = data.onShot;
    this.onTick = data.onTick;

    this.currentMinute = 0;
    this.eventsIndex = 0;
    this.tickCount = 0;
    // We will still process 250ms ticks for the clock
    this.minutePerTick = 90 / (60000 / 250); // 60s total duration
    
    this.playersA = [];
    this.playersB = [];
    this.ballOwner = null;
    this.currentPossession = Math.random() < 0.5 ? "A" : "B";
    this.processingEvent = false;
  }

  preload() {
    // Generate simple textures programmatically
    const graphics = this.add.graphics();
    
    // Team A Player
    graphics.fillStyle(0x34eb83, 1);
    graphics.lineStyle(2, 0xffffff, 1);
    graphics.fillCircle(10, 10, 8);
    graphics.strokeCircle(10, 10, 8);
    graphics.generateTexture('playerA', 20, 20);
    graphics.clear();

    // Team B Player
    graphics.fillStyle(0xffdf4a, 1);
    graphics.lineStyle(2, 0xffffff, 1);
    graphics.fillCircle(10, 10, 8);
    graphics.strokeCircle(10, 10, 8);
    graphics.generateTexture('playerB', 20, 20);
    graphics.clear();

    // Ball
    graphics.fillStyle(0xffffff, 1);
    graphics.lineStyle(1, 0x000000, 1);
    graphics.fillCircle(5, 5, 4);
    graphics.strokeCircle(5, 5, 4);
    graphics.generateTexture('ball', 10, 10);
    graphics.destroy();
  }

  create() {
    const w = this.scale.width;
    const h = this.scale.height;

    // Background Pitch
    this.add.rectangle(w/2, h/2, w, h, 0x146c43).setDepth(-1);
    
    const lineGraphics = this.add.graphics();
    lineGraphics.lineStyle(2, 0xffffff, 0.6);
    lineGraphics.strokeRect(10, 10, w - 20, h - 20); // Border
    lineGraphics.lineBetween(w/2, 10, w/2, h - 10); // Halfway
    lineGraphics.strokeCircle(w/2, h/2, 50); // Center Circle
    
    // Penalty Boxes
    lineGraphics.strokeRect(10, h/2 - 70, 70, 140); // Box A
    lineGraphics.strokeRect(w - 80, h/2 - 70, 70, 140); // Box B

    // GOALS (Left and Right)
    this.add.rectangle(5, h/2, 10, 60, 0xdddddd, 0.4).setStrokeStyle(2, 0xffffff);
    this.add.rectangle(w - 5, h/2, 10, 60, 0xdddddd, 0.4).setStrokeStyle(2, 0xffffff);
    
    // Create Ball
    this.ball = this.physics.add.sprite(w/2, h/2, 'ball').setDepth(10);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(0.5);
    this.ball.setDrag(0.95);

    // Formations
    this.createTeam(this.matchResult.teamA, 'playerA', 40, w/2 - 40, this.playersA);
    this.createTeam(this.matchResult.teamB, 'playerB', w - 40, w/2 + 40, this.playersB);

    // Ticks via Timer
    this.time.addEvent({
      delay: 250,
      callback: this.processMatchTick,
      callbackScope: this,
      loop: true
    });
  }

  createTeam(teamData, texture, gkX, fwdLimitX, storeArr) {
    const h = this.scale.height;
    const w = this.scale.width;
    const isLeft = gkX < w / 2;
    
    // Spread them wider across their half
    const defX = isLeft ? gkX + 80 : gkX - 80;
    const midX = isLeft ? gkX + 180 : gkX - 180;
    const fwdX = isLeft ? gkX + 280 : gkX - 280;

    const placeRole = (roleStr, startX) => {
      const players = teamData.squad.filter(p => !p.position || p.position.includes(roleStr) || (roleStr === 'GK' && p.position === 'GK'));
      
      // Strict fallback logic: if someone drafted weirdly, just place them
      const actualPlayers = teamData.squad.filter(p => positionCategory(p.position) === roleStr);
      
      const step = h / (actualPlayers.length + 1);
      actualPlayers.forEach((p, idx) => {
        const y = step * (idx + 1);
        const sprite = this.physics.add.sprite(startX, y, texture);
        sprite.setCollideWorldBounds(true);
        sprite.setBounce(0.2);
        sprite.setDrag(0.8);
        sprite.playerData = p;
        sprite.baseX = startX;
        sprite.baseY = y;
        sprite.isLeft = isLeft;
        
        // Player Name Text
        const lastName = p.name.split(' ').pop();
        sprite.nameText = this.add.text(startX, y - 15, lastName, { 
            fontFamily: 'sans-serif',
            fontSize: '10px', 
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5).setDepth(20);

        storeArr.push(sprite);
      });
    };

    // Note: positionCategory is in script.js, let's just implement a quick local one just in case
    const positionCategory = (pos) => {
        if(pos === 'GK') return 'GK';
        if(pos === 'DEF' || pos === 'CB' || pos === 'LB' || pos === 'RB') return 'DEF';
        if(pos === 'MID' || pos === 'CM' || pos === 'CDM' || pos === 'CAM') return 'MID';
        return 'FWD';
    };

    placeRole('GK', gkX);
    placeRole('DEF', defX);
    placeRole('MID', midX);
    placeRole('FWD', fwdX);
  }

  update(time, delta) {
    // Keep names attached to sprites
    const allPlayers = [...this.playersA, ...this.playersB];
    allPlayers.forEach(p => {
       if (p.nameText) {
          p.nameText.setPosition(p.x, p.y - 16);
       }
    });
  }

  processMatchTick() {
    this.tickCount++;
    this.currentMinute = Math.min(90, Math.floor(this.tickCount * this.minutePerTick));
    
    if (this.currentMinute >= 90) {
      if (this.onMatchEnd) this.onMatchEnd();
      this.scene.pause();
      return;
    }

    if (this.onTick) this.onTick(this.currentMinute, this.currentPossession);

    // Process Events
    if (!this.processingEvent && this.eventsIndex < this.matchResult.events.length) {
      const ev = this.matchResult.events[this.eventsIndex];
      if (ev.minute <= this.currentMinute) {
        this.executeEvent(ev);
        this.eventsIndex++;
        return; // wait for event to finish
      }
    }

    if (!this.processingEvent) {
      this.simulateOpenPlay();
    }
  }

  executeEvent(ev) {
    this.processingEvent = true;
    const isTeamA = ev.team === this.matchResult.teamA.name;
    const attackerTeam = isTeamA ? this.playersA : this.playersB;
    const targetGoalX = isTeamA ? this.scale.width - 10 : 10;
    const targetGoalY = this.scale.height / 2;
    
    // Find a forward to shoot
    let scorer = attackerTeam.find(p => p.playerData.position === 'FWD') || attackerTeam[0];
    
    // Teleport ball to scorer
    this.ball.setPosition(scorer.x, scorer.y);
    
    // Shoot the ball towards the goal at a realistic speed (e.g., 300px/s)
    this.physics.moveTo(this.ball, targetGoalX, targetGoalY + (Math.random()*30 - 15), 350);

    // Wait 800ms for ball to reach the net
    this.time.delayedCall(800, () => {
      this.ball.setVelocity(0, 0); // stop ball inside the net
      
      let overlayText = "";
      let overlayColor = "";

      if (ev.type === 'goal') {
        if (this.onGoal) this.onGoal(isTeamA, ev);
        overlayText = "G O O O L !";
        overlayColor = "#ffdf4a";
      } else {
        if (this.onShot) this.onShot(isTeamA, ev);
        overlayText = "K A Ç T I !";
        overlayColor = "#ffffff";
      }

      // Flash text on screen
      const textGraphic = this.add.text(this.scale.width/2, this.scale.height/2, overlayText, {
          fontFamily: 'sans-serif',
          fontSize: '48px', 
          fill: overlayColor, 
          fontStyle: 'bold', 
          stroke: '#000', 
          strokeThickness: 6
      }).setOrigin(0.5).setDepth(100);

      // Wait another 1500ms to observe the goal before resuming
      this.time.delayedCall(1500, () => {
         textGraphic.destroy();
         this.endEvent(isTeamA, ev);
      });
    });
  }

  endEvent(isTeamA, ev) {
      this.currentPossession = isTeamA ? "B" : "A";
      // Reset ball to center after a goal
      if(ev.type === 'goal') {
          this.ball.setPosition(this.scale.width/2, this.scale.height/2);
          this.ballOwner = null;
      }
      this.processingEvent = false;
  }

  simulateOpenPlay() {
    const dots = this.currentPossession === 'A' ? this.playersA : this.playersB;
    const oppDots = this.currentPossession === 'A' ? this.playersB : this.playersA;

    // Movement Tracking - Smooth tactical approach
    [...this.playersA, ...this.playersB].forEach(p => {
      if (p.playerData.position === 'GK') {
        const targetY = p.baseY + (this.ball.y - p.baseY) * 0.2;
        this.physics.moveTo(p, p.baseX, Math.max(this.scale.height/2 - 30, Math.min(this.scale.height/2 + 30, targetY)), 80);
      } else {
        const isMyTeamPossession = dots.includes(p);
        let tx = p.baseX;
        let ty = p.baseY;

        if (isMyTeamPossession) {
          // Push forward dramatically into enemy half
          const attackPush = (p.playerData.position === 'DEF') ? 70 : 
                             (p.playerData.position === 'MID') ? 160 : 250;
          tx += p.isLeft ? attackPush : -attackPush;
          ty += (this.ball.y - ty) * 0.4;
        } else {
          // Defending: shift horizontally towards ball
          if (Phaser.Math.Distance.Between(p.x, p.y, this.ball.x, this.ball.y) < 220) {
            tx = this.ball.x + (p.isLeft ? -30 : 30); // stay between ball and goal
            ty = this.ball.y;
          } else {
            // Drop back slightly
            tx -= p.isLeft ? 40 : -40;
          }
        }
        
        // Use smooth velocity to reach targets to avoid jitter
        this.physics.moveTo(p, tx, ty, 100);
      }
    });

    // Passing logic (every tick, chance to pass)
    if (Math.random() < 0.35) {
      if (this.ballOwner && dots.includes(this.ballOwner)) {
        let receivers = dots.filter(d => d !== this.ballOwner && d.playerData.position !== 'GK');
        if (receivers.length > 0) {
          this.ballOwner = Phaser.Utils.Array.GetRandom(receivers);
        }
      } else {
        // Ball is loose, an outfield player gets it
        const outfields = dots.filter(d => d.playerData.position !== 'GK');
        this.ballOwner = Phaser.Utils.Array.GetRandom(outfields.length > 0 ? outfields : dots);
      }
      // Pass the ball
      this.physics.moveToObject(this.ball, this.ballOwner, 250);
    }
  }
}

function startPhaserMatch(result, onMatchEnd, onGoal, onShot, onTick) {
  if (phaserGame) {
    phaserGame.destroy(true);
  }

  const el = document.getElementById('phaser-game-container');
  el.innerHTML = '';

  const rect = el.getBoundingClientRect();
  const width = rect.width > 0 ? rect.width : 800;
  const height = rect.height > 0 ? rect.height : 400;

  const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    parent: 'phaser-game-container',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    transparent: true
  };

  phaserGame = new Phaser.Game(config);

  // Direct injection of the scene with data payload
  phaserGame.scene.add('MatchScene', MatchScene, true, {
    result, onMatchEnd, onGoal, onShot, onTick
  });
}
