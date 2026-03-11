// Gerçek futbolculardan oluşan, farklı fiyat seviyelerinde geniş havuz
const PLAYERS_DB = [
  // Kaleciler (üst seviye)
  { name: "Thibaut Courtois", position: "GK", rating: 90, price: 70, img: "https://cdn.sofifa.net/players/192/119/24_120.png" },
  { name: "Alisson Becker", position: "GK", rating: 89, price: 65, img: "https://cdn.sofifa.net/players/212/831/24_120.png" },
  { name: "Ederson Moraes", position: "GK", rating: 88, price: 62, img: "https://cdn.sofifa.net/players/210/257/24_120.png" },
  { name: "Marc-André ter Stegen", position: "GK", rating: 89, price: 66, img: "https://cdn.sofifa.net/players/192/448/24_120.png" },
  { name: "Mike Maignan", position: "GK", rating: 87, price: 58, img: "https://cdn.sofifa.net/players/215/698/24_120.png" },
  { name: "Gianluigi Donnarumma", position: "GK", rating: 87, price: 60, img: "https://cdn.sofifa.net/players/230/621/24_120.png" },

  // Kaleciler (orta-alt seviye, ucuz)
  { name: "Altay Bayındır", position: "GK", rating: 79, price: 20, img: "https://cdn.sofifa.net/players/235/279/24_120.png" },
  { name: "David Soria", position: "GK", rating: 78, price: 18, img: "https://cdn.sofifa.net/players/220/746/24_120.png" },
  { name: "Rui Patrício", position: "GK", rating: 80, price: 22, img: "https://cdn.sofifa.net/players/178/005/24_120.png" },
  { name: "Aaron Ramsdale", position: "GK", rating: 82, price: 26, img: "https://cdn.sofifa.net/players/236/772/24_120.png" },
  { name: "Unai Simón", position: "GK", rating: 82, price: 25, img: "https://cdn.sofifa.net/players/241/671/24_120.png" },
  { name: "Keylor Navas", position: "GK", rating: 82, price: 24, img: "https://cdn.sofifa.net/players/193/041/24_120.png" },

  // Defans (üst seviye)
  { name: "Virgil van Dijk", position: "DEF", rating: 90, price: 90, img: "https://cdn.sofifa.net/players/203/376/24_120.png" },
  { name: "Rúben Dias", position: "DEF", rating: 88, price: 78, img: "https://cdn.sofifa.net/players/239/818/24_120.png" },
  { name: "Marquinhos", position: "DEF", rating: 88, price: 80, img: "https://cdn.sofifa.net/players/214/524/24_120.png" },
  { name: "David Alaba", position: "DEF", rating: 87, price: 70, img: "https://cdn.sofifa.net/players/197/445/24_120.png" },
  { name: "Jules Koundé", position: "DEF", rating: 86, price: 68, img: "https://cdn.sofifa.net/players/241/464/24_120.png" },
  { name: "Matthijs de Ligt", position: "DEF", rating: 86, price: 66, img: "https://cdn.sofifa.net/players/235/243/24_120.png" },
  { name: "Ronald Araújo", position: "DEF", rating: 86, price: 67, img: "https://cdn.sofifa.net/players/247/398/24_120.png" },
  { name: "Achraf Hakimi", position: "DEF", rating: 85, price: 60, img: "https://cdn.sofifa.net/players/235/212/24_120.png" },
  { name: "Andrew Robertson", position: "DEF", rating: 85, price: 58, img: "https://cdn.sofifa.net/players/216/267/24_120.png" },
  { name: "Trent Alexander-Arnold", position: "DEF", rating: 86, price: 65, img: "https://cdn.sofifa.net/players/231/281/24_120.png" },
  { name: "João Cancelo", position: "DEF", rating: 86, price: 64, img: "https://cdn.sofifa.net/players/210/514/24_120.png" },
  { name: "Theo Hernández", position: "DEF", rating: 86, price: 62, img: "https://cdn.sofifa.net/players/232/656/24_120.png" },
  { name: "Kyle Walker", position: "DEF", rating: 85, price: 55, img: "https://cdn.sofifa.net/players/188/377/24_120.png" },
  { name: "Aymeric Laporte", position: "DEF", rating: 85, price: 54, img: "https://cdn.sofifa.net/players/212/218/24_120.png" },
  { name: "Antonio Rüdiger", position: "DEF", rating: 85, price: 55, img: "https://cdn.sofifa.net/players/205/452/24_120.png" },
  { name: "Kalidou Koulibaly", position: "DEF", rating: 84, price: 50, img: "https://cdn.sofifa.net/players/201/024/24_120.png" },

  // Defans (orta-alt seviye, ucuz)
  { name: "Çağlar Söyüncü", position: "DEF", rating: 79, price: 22, img: "https://cdn.sofifa.net/players/233/419/24_120.png" },
  { name: "Eric Bailly", position: "DEF", rating: 78, price: 18, img: "https://cdn.sofifa.net/players/225/508/24_120.png" },
  { name: "Victor Nelsson", position: "DEF", rating: 78, price: 18, img: "https://cdn.sofifa.net/players/235/834/24_120.png" },
  { name: "Davinson Sánchez", position: "DEF", rating: 79, price: 20, img: "https://cdn.sofifa.net/players/234/267/24_120.png" },
  { name: "Pau Torres", position: "DEF", rating: 84, price: 58, img: "https://cdn.sofifa.net/players/240/130/24_120.png" },
  { name: "Cristian Romero", position: "DEF", rating: 84, price: 59, img: "https://cdn.sofifa.net/players/232/432/24_120.png" },
  { name: "Dayot Upamecano", position: "DEF", rating: 84, price: 57, img: "https://cdn.sofifa.net/players/229/558/24_120.png" },
  { name: "Milan Škriniar", position: "DEF", rating: 85, price: 56, img: "https://cdn.sofifa.net/players/232/363/24_120.png" },
  { name: "Stefan de Vrij", position: "DEF", rating: 83, price: 45, img: "https://cdn.sofifa.net/players/190/758/24_120.png" },
  { name: "Matip", position: "DEF", rating: 82, price: 40, img: "https://cdn.sofifa.net/players/197/061/24_120.png" },
  { name: "Nacho Fernández", position: "DEF", rating: 81, price: 32, img: "https://cdn.sofifa.net/players/200/145/24_120.png" },
  { name: "Emerson Royal", position: "DEF", rating: 80, price: 28, img: "https://cdn.sofifa.net/players/240/273/24_120.png" },

  // Orta Saha (üst seviye)
  { name: "Kevin De Bruyne", position: "MID", rating: 91, price: 115, img: "https://cdn.sofifa.net/players/192/985/24_120.png" },
  { name: "Luka Modrić", position: "MID", rating: 88, price: 75, img: "https://cdn.sofifa.net/players/177/003/24_120.png" },
  { name: "Toni Kroos", position: "MID", rating: 88, price: 74, img: "https://cdn.sofifa.net/players/182/521/24_120.png" },
  { name: "Jude Bellingham", position: "MID", rating: 90, price: 110, img: "https://cdn.sofifa.net/players/252/371/24_120.png" },
  { name: "Federico Valverde", position: "MID", rating: 86, price: 68, img: "https://cdn.sofifa.net/players/239/053/24_120.png" },
  { name: "Joshua Kimmich", position: "MID", rating: 89, price: 100, img: "https://cdn.sofifa.net/players/212/622/24_120.png" },
  { name: "Pedri", position: "MID", rating: 87, price: 85, img: "https://cdn.sofifa.net/players/251/854/24_120.png" },
  { name: "İlkay Gündoğan", position: "MID", rating: 86, price: 65, img: "https://cdn.sofifa.net/players/186/942/24_120.png" },
  { name: "Bernardo Silva", position: "MID", rating: 87, price: 82, img: "https://cdn.sofifa.net/players/218/667/24_120.png" },
  { name: "Bruno Fernandes", position: "MID", rating: 87, price: 84, img: "https://cdn.sofifa.net/players/212/198/24_120.png" },
  { name: "Rodri", position: "MID", rating: 89, price: 98, img: "https://cdn.sofifa.net/players/231/866/24_120.png" },
  { name: "Casemiro", position: "MID", rating: 88, price: 80, img: "https://cdn.sofifa.net/players/200/145/24_120.png" },
  { name: "Phil Foden", position: "MID", rating: 86, price: 78, img: "https://cdn.sofifa.net/players/237/692/24_120.png" },
  { name: "Eduardo Camavinga", position: "MID", rating: 85, price: 70, img: "https://cdn.sofifa.net/players/248/243/24_120.png" },
  { name: "Declan Rice", position: "MID", rating: 85, price: 72, img: "https://cdn.sofifa.net/players/234/396/24_120.png" },
  { name: "Gavi", position: "MID", rating: 84, price: 64, img: "https://cdn.sofifa.net/players/264/240/24_120.png" },

  // Orta Saha (orta-alt seviye, ucuz)
  { name: "Gedson Fernandes", position: "MID", rating: 79, price: 22, img: "https://cdn.sofifa.net/players/235/453/24_120.png" },
  { name: "Fred", position: "MID", rating: 79, price: 24, img: "https://cdn.sofifa.net/players/209/297/24_120.png" },
  { name: "Emre Can", position: "MID", rating: 80, price: 26, img: "https://cdn.sofifa.net/players/208/333/24_120.png" },
  { name: "Houssem Aouar", position: "MID", rating: 80, price: 24, img: "https://cdn.sofifa.net/players/230/767/24_120.png" },
  { name: "Saúl Ñíguez", position: "MID", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/204/963/24_120.png" },
  { name: "Youri Tielemans", position: "MID", rating: 83, price: 32, img: "https://cdn.sofifa.net/players/216/393/24_120.png" },
  { name: "Manuel Locatelli", position: "MID", rating: 83, price: 30, img: "https://cdn.sofifa.net/players/235/501/24_120.png" },
  { name: "Nicolò Zaniolo", position: "MID", rating: 82, price: 26, img: "https://cdn.sofifa.net/players/242/142/24_120.png" },
  { name: "Mason Mount", position: "MID", rating: 84, price: 35, img: "https://cdn.sofifa.net/players/233/064/24_120.png" },
  { name: "Sergej Milinković-Savić", position: "MID", rating: 85, price: 60, img: "https://cdn.sofifa.net/players/223/848/24_120.png" },
  { name: "Frank Kessié", position: "MID", rating: 83, price: 34, img: "https://cdn.sofifa.net/players/225/953/24_120.png" },
  { name: "Marcelo Brozović", position: "MID", rating: 84, price: 40, img: "https://cdn.sofifa.net/players/216/547/24_120.png" },

  // Kanat / Forvet (üst seviye)
  { name: "Kylian Mbappé", position: "FWD", rating: 92, price: 120, img: "https://cdn.sofifa.net/players/231/747/24_120.png" },
  { name: "Erling Haaland", position: "FWD", rating: 91, price: 115, img: "https://cdn.sofifa.net/players/239/085/24_120.png" },
  { name: "Karim Benzema", position: "FWD", rating: 90, price: 110, img: "https://cdn.sofifa.net/players/165/153/24_120.png" },
  { name: "Robert Lewandowski", position: "FWD", rating: 90, price: 108, img: "https://cdn.sofifa.net/players/188/545/24_120.png" },
  { name: "Mohamed Salah", position: "FWD", rating: 90, price: 109, img: "https://cdn.sofifa.net/players/209/331/24_120.png" },
  { name: "Harry Kane", position: "FWD", rating: 90, price: 107, img: "https://cdn.sofifa.net/players/202/126/24_120.png" },
  { name: "Vinícius Júnior", position: "FWD", rating: 90, price: 110, img: "https://cdn.sofifa.net/players/238/794/24_120.png" },
  { name: "Neymar Jr", position: "FWD", rating: 89, price: 105, img: "https://cdn.sofifa.net/players/190/871/24_120.png" },
  { name: "Son Heung-min", position: "FWD", rating: 89, price: 100, img: "https://cdn.sofifa.net/players/200/104/24_120.png" },
  { name: "Marcus Rashford", position: "FWD", rating: 86, price: 80, img: "https://cdn.sofifa.net/players/231/677/24_120.png" },
  { name: "Victor Osimhen", position: "FWD", rating: 87, price: 88, img: "https://cdn.sofifa.net/players/232/293/24_120.png" },
  { name: "Lautaro Martínez", position: "FWD", rating: 87, price: 86, img: "https://cdn.sofifa.net/players/239/736/24_120.png" },
  { name: "Antoine Griezmann", position: "FWD", rating: 87, price: 82, img: "https://cdn.sofifa.net/players/194/765/24_120.png" },
  { name: "Ousmane Dembélé", position: "FWD", rating: 85, price: 70, img: "https://cdn.sofifa.net/players/231/443/24_120.png" },
  { name: "Bukayo Saka", position: "FWD", rating: 86, price: 78, img: "https://cdn.sofifa.net/players/246/669/24_120.png" },
  { name: "Riyad Mahrez", position: "FWD", rating: 86, price: 76, img: "https://cdn.sofifa.net/players/204/485/24_120.png" },
  { name: "Raheem Sterling", position: "FWD", rating: 85, price: 72, img: "https://cdn.sofifa.net/players/202/652/24_120.png" },
  { name: "João Félix", position: "FWD", rating: 84, price: 68, img: "https://cdn.sofifa.net/players/242/444/24_120.png" },
  { name: "Ángel Di María", position: "FWD", rating: 84, price: 64, img: "https://cdn.sofifa.net/players/183/898/24_120.png" },
  { name: "Diogo Jota", position: "FWD", rating: 84, price: 66, img: "https://cdn.sofifa.net/players/224/019/24_120.png" },
  { name: "Anthony Martial", position: "FWD", rating: 82, price: 52, img: "https://cdn.sofifa.net/players/211/300/24_120.png" },
  { name: "Serge Gnabry", position: "FWD", rating: 85, price: 70, img: "https://cdn.sofifa.net/players/206/113/24_120.png" },
  { name: "Kingsley Coman", position: "FWD", rating: 85, price: 71, img: "https://cdn.sofifa.net/players/213/345/24_120.png" },
  { name: "Dejan Kulusevski", position: "FWD", rating: 84, price: 62, img: "https://cdn.sofifa.net/players/243/715/24_120.png" },
  { name: "Federico Chiesa", position: "FWD", rating: 85, price: 73, img: "https://cdn.sofifa.net/players/235/805/24_120.png" },
  { name: "Jadon Sancho", position: "FWD", rating: 83, price: 55, img: "https://cdn.sofifa.net/players/233/049/24_120.png" },
  { name: "Memphis Depay", position: "FWD", rating: 84, price: 58, img: "https://cdn.sofifa.net/players/202/556/24_120.png" },

  // Kanat / Forvet (orta-alt seviye, ucuz)
  { name: "Kerem Aktürkoğlu", position: "FWD", rating: 80, price: 22, img: "https://cdn.sofifa.net/players/258/050/24_120.png" },
  { name: "Wilfried Zaha", position: "FWD", rating: 81, price: 26, img: "https://cdn.sofifa.net/players/193/348/24_120.png" },
  { name: "Rafa Silva", position: "FWD", rating: 81, price: 24, img: "https://cdn.sofifa.net/players/211/575/24_120.png" },
  { name: "Dušan Tadić", position: "FWD", rating: 82, price: 28, img: "https://cdn.sofifa.net/players/199/434/24_120.png" },
  { name: "Youssef En Nesyri", position: "FWD", rating: 81, price: 24, img: "https://cdn.sofifa.net/players/233/934/24_120.png" },
  { name: "Mauro Icardi", position: "FWD", rating: 82, price: 26, img: "https://cdn.sofifa.net/players/201/399/24_120.png" },
  { name: "Anderson Talisca", position: "FWD", rating: 82, price: 28, img: "https://cdn.sofifa.net/players/212/692/24_120.png" },
  { name: "Dries Mertens", position: "FWD", rating: 82, price: 26, img: "https://cdn.sofifa.net/players/175/943/24_120.png" },
  { name: "Edin Džeko", position: "FWD", rating: 82, price: 24, img: "https://cdn.sofifa.net/players/153/260/24_120.png" },
  { name: "Alexander Isak", position: "FWD", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/236/772/24_120.png" },
  { name: "Gabriel Jesus", position: "FWD", rating: 84, price: 48, img: "https://cdn.sofifa.net/players/230/666/24_120.png" },
  { name: "Roberto Firmino", position: "FWD", rating: 84, price: 46, img: "https://cdn.sofifa.net/players/201/942/24_120.png" },
  { name: "Olivier Giroud", position: "FWD", rating: 81, price: 22, img: "https://cdn.sofifa.net/players/178/509/24_120.png" },
  { name: "Tammy Abraham", position: "FWD", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/231/352/24_120.png" },
  { name: "Álvaro Morata", position: "FWD", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/201/153/24_120.png" },
  { name: "Callum Wilson", position: "FWD", rating: 80, price: 20, img: "https://cdn.sofifa.net/players/190/717/24_120.png" },

  // Ek orta-ucuz oyuncular (çeşit ve derinlik için)
  { name: "Lucas Torreira", position: "MID", rating: 80, price: 22, img: "https://cdn.sofifa.net/players/228/702/24_120.png" },
  { name: "Brahim Díaz", position: "MID", rating: 80, price: 22, img: "https://cdn.sofifa.net/players/231/410/24_120.png" },
  { name: "Piotr Zieliński", position: "MID", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/207/421/24_120.png" },
  { name: "Rodrigo Bentancur", position: "MID", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/230/142/24_120.png" },
  { name: "Matteo Guendouzi", position: "MID", rating: 79, price: 20, img: "https://cdn.sofifa.net/players/235/029/24_120.png" },
  { name: "James Maddison", position: "MID", rating: 84, price: 40, img: "https://cdn.sofifa.net/players/220/697/24_120.png" },
  { name: "Martin Ødegaard", position: "MID", rating: 85, price: 55, img: "https://cdn.sofifa.net/players/222/665/24_120.png" },
  { name: "Nabil Fekir", position: "MID", rating: 84, price: 38, img: "https://cdn.sofifa.net/players/216/594/24_120.png" },
  { name: "Isco", position: "MID", rating: 82, price: 26, img: "https://cdn.sofifa.net/players/197/781/24_120.png" },
  { name: "Miralem Pjanić", position: "MID", rating: 81, price: 22, img: "https://cdn.sofifa.net/players/180/185/24_120.png" },

  { name: "Danilo", position: "DEF", rating: 81, price: 24, img: "https://cdn.sofifa.net/players/199/304/24_120.png" },
  { name: "Raphaël Varane", position: "DEF", rating: 84, price: 52, img: "https://cdn.sofifa.net/players/201/535/24_120.png" },
  { name: "Gerard Piqué", position: "DEF", rating: 82, price: 24, img: "https://cdn.sofifa.net/players/152/729/24_120.png" },
  { name: "Leonardo Bonucci", position: "DEF", rating: 82, price: 24, img: "https://cdn.sofifa.net/players/184/344/24_120.png" },
  { name: "Thiago Silva", position: "DEF", rating: 84, price: 40, img: "https://cdn.sofifa.net/players/164/240/24_120.png" },
  { name: "Ben Chilwell", position: "DEF", rating: 82, price: 28, img: "https://cdn.sofifa.net/players/229/984/24_120.png" },
  { name: "Luke Shaw", position: "DEF", rating: 82, price: 30, img: "https://cdn.sofifa.net/players/205/988/24_120.png" },
  { name: "Reece James", position: "DEF", rating: 84, price: 44, img: "https://cdn.sofifa.net/players/238/074/24_120.png" },

  { name: "Gerard Moreno", position: "FWD", rating: 84, price: 42, img: "https://cdn.sofifa.net/players/208/093/24_120.png" },
  { name: "Mikel Oyarzabal", position: "FWD", rating: 84, price: 40, img: "https://cdn.sofifa.net/players/230/142/24_120.png" },
  { name: "Marco Asensio", position: "FWD", rating: 82, price: 28, img: "https://cdn.sofifa.net/players/220/834/24_120.png" },
  { name: "Ferran Torres", position: "FWD", rating: 82, price: 28, img: "https://cdn.sofifa.net/players/241/461/24_120.png" },
  { name: "Ansu Fati", position: "FWD", rating: 80, price: 24, img: "https://cdn.sofifa.net/players/253/004/24_120.png" },
  { name: "Yeremy Pino", position: "FWD", rating: 79, price: 20, img: "https://cdn.sofifa.net/players/256/266/24_120.png" },
  { name: "Harvey Barnes", position: "FWD", rating: 80, price: 22, img: "https://cdn.sofifa.net/players/235/883/24_120.png" },
  { name: "Jarrod Bowen", position: "FWD", rating: 81, price: 24, img: "https://cdn.sofifa.net/players/225/782/24_120.png" }
];

const START_BUDGET = 500;
const PLAYERS_PER_TEAM = 11;
const MIN_CHEAP_PRICE = 5; // En ucuz oyuncu fiyatı (garanti için)

let gameState = {
  players: [],
  currentPickIndex: 0,
  pickOrder: [],
  draftedPlayers: new Set(),
  isDraftFinished: false
};

// --- MULTIPLAYER DEĞİŞKENLERİ ---
let isMultiplayer = false;
let isHost = false;
let myPlayerId = 0; 
let peer = null;
let connections = []; // Host için
let connectedPeers = [];
let hostConnection = null; // Client için
let myPlayerName = "Host";

// DOM referansları
const mainMenu = document.getElementById("main-menu");
const startScreen = document.getElementById("start-screen");
const draftScreen = document.getElementById("draft-screen");
const matchSection = document.getElementById("match-section");
const btnStartSingle = document.getElementById("btn-start-single");
const btnHostOnline = document.getElementById("btn-host-online");
const playerCountSelect = document.getElementById("player-count");
const playerNamesContainer = document.getElementById("player-names-container");
const startDraftBtn = document.getElementById("start-draft-btn");
const playerListEl = document.getElementById("player-list");
const teamsContainer = document.getElementById("teams-container");
const turnInfoEl = document.getElementById("turn-info");
const pickProgressEl = document.getElementById("pick-progress");
const searchInput = document.getElementById("search-input");
const positionFilter = document.getElementById("position-filter");
const sortFilter = document.getElementById("sort-filter");
const simulateBtn = document.getElementById("simulate-btn");
const matchResultEl = document.getElementById("match-result");
const multiplayerScreen = document.getElementById("multiplayer-screen");
const btnCreateRoom = document.getElementById("btn-create-room");
const btnJoinRoomUI = document.getElementById("btn-join-room-ui");
const mpHostUI = document.getElementById("mp-host-ui");
const mpJoinUI = document.getElementById("mp-join-ui");
const roomCodeDisplay = document.getElementById("room-code-display");
const connectedPlayersList = document.getElementById("connected-players-list");
const btnStartMpDraft = document.getElementById("btn-start-mp-draft");
const joinRoomCodeInput = document.getElementById("join-room-code");
const joinPlayerNameInput = document.getElementById("join-player-name");
const btnJoinRoom = document.getElementById("btn-join-room");
const joinStatus = document.getElementById("join-status");
const matchOverlayEl = document.getElementById("match-overlay");
const liveMatchEl = document.getElementById("live-match");
const btnExitMatch = document.getElementById("btn-exit-match");
const pitchEl = document.getElementById("pitch");
const scoreTeamANameEl = document.getElementById("score-team-a-name");
const scoreTeamBNameEl = document.getElementById("score-team-b-name");
const scoreTeamAGoalsEl = document.getElementById("score-team-a-goals");
const scoreTeamBGoalsEl = document.getElementById("score-team-b-goals");
const scoreMinuteEl = document.getElementById("score-minute");
const shotsAEl = document.getElementById("shots-a");
const shotsBEl = document.getElementById("shots-b");
const possessionAEl = document.getElementById("possession-a");
const possessionBEl = document.getElementById("possession-b");
const liveMessageEl = document.getElementById("live-message");
const postMatchModal = document.getElementById("post-match-modal");
const pmScoreEl = document.getElementById("pm-score");
const pmPointsInfoEl = document.getElementById("pm-points-info");
const btnPmRematch = document.getElementById("btn-pm-rematch");
const btnPmNewDraft = document.getElementById("btn-pm-newdraft");
const btnPmExit = document.getElementById("btn-pm-exit");
const pmWaitingMessage = document.getElementById("pm-waiting-message");

let liveMatchState = null;

function initPlayerNameInputs() {
  const count = parseInt(playerCountSelect.value, 10);
  playerNamesContainer.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const row = document.createElement("div");
    row.className = "form-row";
    
    // Name Input
    const labelName = document.createElement("label");
    labelName.textContent = `Oyuncu ${i} Takım Adı`;
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = `Örn: Takım ${i}`;
    inputName.dataset.playerIndex = i - 1;
    inputName.className = "player-name-input";
    
    // Formation Select
    const labelFormation = document.createElement("label");
    labelFormation.textContent = `Dizilişi`;
    const selectFormation = document.createElement("select");
    selectFormation.className = "player-formation-select";
    selectFormation.innerHTML = `
      <option value="4-4-2">4-4-2</option>
      <option value="4-3-3">4-3-3</option>
      <option value="3-5-2">3-5-2</option>
      <option value="4-2-3-1">4-2-3-1</option>
      <option value="5-3-2">5-3-2</option>
    `;
    
    row.appendChild(labelName);
    row.appendChild(inputName);
    row.appendChild(labelFormation);
    row.appendChild(selectFormation);
    playerNamesContainer.appendChild(row);
  }
}

function createPickOrder(numTeams) {
  const order = [];
  for (let round = 0; round < PLAYERS_PER_TEAM; round++) {
    if (round % 2 === 0) {
      for (let i = 0; i < numTeams; i++) order.push(i);
    } else {
      for (let i = numTeams - 1; i >= 0; i--) order.push(i);
    }
  }
  return order;
}

function parseFormationLimits(formationStr) {
  // e.g., "4-4-2" -> GK:1, DEF:4, MID:4, FWD:2
  // "4-2-3-1" -> GK:1, DEF:4, MID:5, FWD:1
  const parts = formationStr.split("-").map(Number);
  
  const limits = { GK: 1, DEF: 0, MID: 0, FWD: 0 };
  
  if (parts.length === 3) {
    limits.DEF = parts[0];
    limits.MID = parts[1];
    limits.FWD = parts[2];
  } else if (parts.length === 4) {
    // e.g. 4-2-3-1 (4 DEF, 2+3 MID, 1 FWD)
    limits.DEF = parts[0];
    limits.MID = parts[1] + parts[2];
    limits.FWD = parts[3];
  }
  
  return limits;
}

function startDraft() {
  const count = parseInt(playerCountSelect.value, 10);
  const rows = playerNamesContainer.querySelectorAll(".form-row");
  const players = [];
  
  rows.forEach((row, idx) => {
    const input = row.querySelector(".player-name-input");
    const select = row.querySelector(".player-formation-select");
    const name = input.value.trim() || `Takım ${idx + 1}`;
    const formationStr = select.value;
    
    players.push({
      id: idx,
      name,
      formation: formationStr,
      formationLimits: parseFormationLimits(formationStr),
      budget: START_BUDGET,
      squad: [],
      points: 0
    });
  });

  gameState.players = players;
  gameState.pickOrder = createPickOrder(count);
  gameState.currentPickIndex = 0;
  gameState.draftedPlayers = new Set();
  gameState.isDraftFinished = false;

  startScreen.classList.add("hidden");
  draftScreen.classList.remove("hidden");
  matchSection.classList.add("hidden");
  matchResultEl.innerHTML = "";
  simulateBtn.disabled = true;
  simulateBtn.textContent = "Maçı Simüle Et";

  renderTeams();
  renderPlayersList();
  updateTurnInfo();
}

function getCurrentTeam() {
  const teamIndex = gameState.pickOrder[gameState.currentPickIndex];
  return gameState.players[teamIndex];
}

function remainingPicksForTeam(teamId) {
  const team = gameState.players[teamId];
  return PLAYERS_PER_TEAM - team.squad.length;
}

function updateTurnInfo() {
  if (gameState.isDraftFinished) {
    turnInfoEl.textContent = "Draft tamamlandı.";
    pickProgressEl.textContent = "";
    return;
  }
  const currentTeam = getCurrentTeam();
  const totalPicks = gameState.pickOrder.length;
  const current = gameState.currentPickIndex + 1;
  turnInfoEl.textContent = `Sıra: ${currentTeam.name} (Kalan bütçe: ${currentTeam.budget}M, Kalan oyuncu: ${remainingPicksForTeam(currentTeam.id)})`;
  pickProgressEl.textContent = `Seçim: ${current}/${totalPicks}`;
}

function renderTeams() {
  teamsContainer.innerHTML = "";
  const currentTeam = gameState.isDraftFinished ? null : getCurrentTeam();

  gameState.players.forEach((team) => {
    const card = document.createElement("div");
    card.className = "team-card";
    if (currentTeam && currentTeam.id === team.id) {
      card.classList.add("current-team");
    }

    const header = document.createElement("div");
    header.className = "team-header";

    const nameEl = document.createElement("div");
    nameEl.className = "team-name";
    nameEl.textContent = team.name;

    const balanceEl = document.createElement("div");
    balanceEl.className = "team-balance";
    balanceEl.textContent = `Bütçe: ${team.budget}M`;

    header.appendChild(nameEl);
    header.appendChild(balanceEl);

    const picksCount = document.createElement("div");
    picksCount.className = "team-picks-count";
    const pointsTxt = typeof team.points === "number" ? ` · Puan: ${team.points}` : "";
    picksCount.textContent = `Kadrodaki oyuncu: ${team.squad.length}/${PLAYERS_PER_TEAM}${pointsTxt}`;

    const list = document.createElement("ul");
    list.className = "team-players";
    team.squad.forEach((p) => {
      const li = document.createElement("li");
      const leftSpan = document.createElement("span");
      leftSpan.textContent = p.name;

      const rightSpan = document.createElement("span");
      rightSpan.innerHTML = `<span class="pos">${p.position}</span> · <span class="rating">${p.rating}</span> · <span class="price">${p.price}M</span>`;

      li.appendChild(leftSpan);
      li.appendChild(rightSpan);
      list.appendChild(li);
    });

    card.appendChild(header);
    card.appendChild(picksCount);
    card.appendChild(list);
    teamsContainer.appendChild(card);
  });
}

function positionCategory(pos) {
  if (pos === "GK") return "GK";
  if (pos === "DEF") return "DEF";
  if (pos === "MID") return "MID";
  return "FWD";
}

function filteredAvailablePlayers() {
  const search = searchInput.value.trim().toLowerCase();
  const posFilter = positionFilter.value;
  const sortMode = sortFilter ? sortFilter.value : "rating_desc";

  const filtered = PLAYERS_DB.filter((p) => {
    if (gameState.draftedPlayers.has(p.name)) return false;
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (posFilter !== "ALL" && positionCategory(p.position) !== posFilter) return false;
    return true;
  });

  // Sıralama modu
  filtered.sort((a, b) => {
    if (sortMode === "price_asc") {
      if (a.price === b.price) return b.rating - a.rating;
      return a.price - b.price;
    }
    if (sortMode === "price_desc") {
      if (a.price === b.price) return b.rating - a.rating;
      return b.price - a.price;
    }
    // Varsayılan: rating yüksekten düşüğe
    if (a.rating === b.rating) return a.price - b.price;
    return b.rating - a.rating;
  });

  return filtered;
}

function renderPlayersList() {
  playerListEl.innerHTML = "";
  const currentTeam = gameState.isDraftFinished ? null : getCurrentTeam();
  const available = filteredAvailablePlayers();

  if (!available.length) {
    const msg = document.createElement("p");
    msg.className = "muted";
    msg.textContent = "Filtreye uygun oyuncu kalmadı.";
    playerListEl.appendChild(msg);
    return;
  }

  available.forEach((p) => {
    const card = document.createElement("div");
    card.className = "player-card";

    const avatar = document.createElement("div");
    avatar.className = "player-avatar";
    const img = document.createElement("img");
    img.src = playerAvatarUrl(p.name);
    img.alt = p.name;
    avatar.appendChild(img);

    const main = document.createElement("div");
    main.className = "player-main";
    const nameEl = document.createElement("div");
    nameEl.className = "player-name";
    nameEl.textContent = p.name;
    const meta = document.createElement("div");
    meta.className = "player-meta";
    meta.textContent = `${p.position} · Rating ${p.rating}`;
    main.appendChild(nameEl);
    main.appendChild(meta);

    const posEl = document.createElement("div");
    posEl.className = "player-position";
    posEl.textContent = positionCategory(p.position);

    const ratingEl = document.createElement("div");
    ratingEl.className = "player-rating";
    ratingEl.textContent = p.rating;

    const priceEl = document.createElement("div");
    priceEl.className = "player-price";
    priceEl.textContent = `${p.price}M`;

    card.appendChild(avatar);
    card.appendChild(main);
    card.appendChild(posEl);
    card.appendChild(ratingEl);
    card.appendChild(priceEl);

    if (!currentTeam || (isMultiplayer && currentTeam.id !== myPlayerId)) {
      card.classList.add("disabled");
    } else {
      const remainingSlots = remainingPicksForTeam(currentTeam.id);
      const wouldRemainBudget = currentTeam.budget - p.price;
      const mustRemainBudget = (remainingSlots - 1) * MIN_CHEAP_PRICE;

      const cat = positionCategory(p.position);
      const currentCount = currentTeam.squad.filter(x => positionCategory(x.position) === cat).length;
      const hitLimit = currentCount >= currentTeam.formationLimits[cat];

      if (
        currentTeam.budget < p.price ||
        remainingSlots <= 0 ||
        wouldRemainBudget < mustRemainBudget ||
        hitLimit
      ) {
      card.classList.add("disabled");
      } else {
        card.addEventListener("click", () => handlePick(p));
      }
    }

    playerListEl.appendChild(card);
  });
}

function handlePick(player, isFromHost = false) {
  if (gameState.isDraftFinished) return;
  const team = getCurrentTeam();

  if (isMultiplayer) {
    if (!isHost && !isFromHost) {
      if (team.id === myPlayerId) {
        hostConnection.send({ type: "PICK", playerName: player.name });
      }
      return; 
    }
    if (isHost && !isFromHost && team.id !== myPlayerId) {
      return;
    }
  }

  if (gameState.draftedPlayers.has(player.name)) return;
  if (team.budget < player.price) return;
  if (team.squad.length >= PLAYERS_PER_TEAM) return;

  const cat = positionCategory(player.position);
  const currentCount = team.squad.filter(x => positionCategory(x.position) === cat).length;
  if (currentCount >= team.formationLimits[cat]) {
    // Show an alert only to the user who clicked it (not during remote sync)
    if (!isFromHost && (!isMultiplayer || team.id === myPlayerId)) {
        alert(`Dizilişinize (${team.formation}) göre ${cat} limitiniz doldu! (${team.formationLimits[cat]} / ${team.formationLimits[cat]})`);
    }
    return;
  }

  const remainingSlots = PLAYERS_PER_TEAM - team.squad.length;
  const wouldRemainBudget = team.budget - player.price;
  const mustRemainBudget = (remainingSlots - 1) * MIN_CHEAP_PRICE;
  if (wouldRemainBudget < mustRemainBudget) return;

  team.squad.push(player);
  team.budget -= player.price;
  gameState.draftedPlayers.add(player.name);

  gameState.currentPickIndex++;

  const totalPicks = gameState.pickOrder.length;
  if (gameState.currentPickIndex >= totalPicks) {
    gameState.isDraftFinished = true;
    renderTeams();
    renderPlayersList();
    updateTurnInfo();
    onDraftFinished();
    if (isMultiplayer && isHost) broadcastState();
    return;
  }

  renderTeams();
  renderPlayersList();
  updateTurnInfo();
  if (isMultiplayer && isHost) broadcastState();
}

function onDraftFinished() {
  // Tüm takımlar 11 oyuncu aldıysa simülasyon bölümü açılır
  const allFull = gameState.players.every((t) => t.squad.length === PLAYERS_PER_TEAM);
  if (allFull) {
    matchSection.classList.remove("hidden");
    simulateBtn.disabled = false;
  }
}

function averageRating(team) {
  if (!team.squad.length) return 0;
  const sum = team.squad.reduce((acc, p) => acc + p.rating, 0);
  return sum / team.squad.length;
}

function tacticBonus(team) {
  const counts = { GK: 0, DEF: 0, MID: 0, FWD: 0 };
  team.squad.forEach((p) => {
    const cat = positionCategory(p.position);
    counts[cat]++;
  });
  let bonus = 0;
  if (counts.GK >= 1) bonus += 0.8;
  if (counts.DEF >= 3) bonus += 0.7;
  if (counts.MID >= 3) bonus += 0.7;
  if (counts.FWD >= 2) bonus += 0.7;
  return bonus;
}

function computeStrength(team) {
  const avg = averageRating(team);
  const rand = (Math.random() * 4) - 2; // -2 .. +2
  const tactic = tacticBonus(team);
  return avg + rand + tactic;
}

function generateMatchResult() {
  const teamA = gameState.players[0];
  const teamB = gameState.players[1];

  const strengthA = computeStrength(teamA);
  const strengthB = computeStrength(teamB);

  const baseGoalsA = 1.4 + (strengthA - strengthB) / 12;
  const baseGoalsB = 1.4 + (strengthB - strengthA) / 12;

  let goalsA = Math.max(0, Math.round(baseGoalsA + (Math.random() - 0.3) * 2));
  let goalsB = Math.max(0, Math.round(baseGoalsB + (Math.random() - 0.3) * 2));

  goalsA = Math.min(goalsA, 6);
  goalsB = Math.min(goalsB, 6);

  const events = [];
  function addGoals(team, goals, teamLabel) {
    for (let i = 0; i < goals; i++) {
      const scorer = team.squad[Math.floor(Math.random() * team.squad.length)];
      const minute = 5 + Math.floor(Math.random() * 80); // 5-85 arası
      events.push({
        minute,
        scorer: scorer.name,
        team: teamLabel,
        type: "goal"
      });
    }
  }

  addGoals(teamA, goalsA, teamA.name);
  addGoals(teamB, goalsB, teamB.name);

  // Birkaç ekstra şut (gol olmayan)
  const extraShots = 4 + Math.floor(Math.random() * 5);
  for (let i = 0; i < extraShots; i++) {
    const isA = Math.random() < 0.5;
    const team = isA ? teamA : teamB;
    const minute = 3 + Math.floor(Math.random() * 86);
    const shooter = team.squad[Math.floor(Math.random() * team.squad.length)];
    events.push({
      minute,
      scorer: shooter.name,
      team: team.name,
      type: "shot"
    });
  }

  events.sort((a, b) => a.minute - b.minute);

  const scoreline = `${teamA.name} ${goalsA} - ${goalsB} ${teamB.name}`;

  return {
    scoreline,
    teamA,
    teamB,
    strengthA,
    strengthB,
    goalsA,
    goalsB,
    events
  };
}

function simulateMatch() {
  if (isMultiplayer && !isHost) return;
  if (gameState.players.length < 2) return;
  const result = generateMatchResult();
  
  if (isMultiplayer && isHost) {
     connections.forEach(conn => conn.send({ type: "MATCH_RESULT", result: result }));
  }
  
  startLiveMatch(result);
}

function renderMatchResult(result) {
  matchResultEl.innerHTML = "";

  const scoreEl = document.createElement("div");
  scoreEl.className = "match-scoreline";
  scoreEl.textContent = result.scoreline;

  const strengthEl = document.createElement("div");
  strengthEl.className = "match-strength";
  strengthEl.textContent =
    `${result.teamA.name} güç: ${result.strengthA.toFixed(1)} | ` +
    `${result.teamB.name} güç: ${result.strengthB.toFixed(1)}`;

  const goalsList = document.createElement("ul");
  goalsList.className = "goal-list";
  if (result.events.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Gol sesi çıkmadı, kısır bir maç oldu.";
    goalsList.appendChild(li);
  } else {
    result.events.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML =
        `<span class="goal-minute">${e.minute}'</span>` +
        `<span class="goal-scorer">${e.scorer}</span>` +
        `<span class="goal-team">${e.team}</span>`;
      goalsList.appendChild(li);
    });
  }

  matchResultEl.appendChild(scoreEl);
  matchResultEl.appendChild(strengthEl);
  matchResultEl.appendChild(goalsList);
}

function playerAvatarUrl(name) {
  const player = PLAYERS_DB.find(p => p.name === name);
  if (player && player.img) {
    return player.img;
  }
  const encoded = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encoded}&background=random&color=fff&size=120&bold=true`;
}

function playerInitials(name) {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  const first = parts[0][0] || "";
  const second = parts[1][0] || "";
  const third = (parts[2] && parts[2][0]) || "";
  return (first + second + third).toUpperCase();
}

function createPlayerDots(team, teamClass, side) {
  const dots = [];
  const pitchRect = pitchEl.getBoundingClientRect();
  const width = pitchRect.width;
  const height = pitchRect.height;

  const isLeft = side === "left";

  const lineX = isLeft ? width * 0.18 : width * 0.82;
  const defX = isLeft ? width * 0.32 : width * 0.68;
  const midX = isLeft ? width * 0.50 : width * 0.50;
  const fwdX = isLeft ? width * 0.70 : width * 0.30;

  const slotsGK = [];
  const slotsDEF = [];
  const slotsMID = [];
  const slotsFWD = [];

  const yBase = height * 0.18;
  const yStep = height * 0.16;
  for (let i = 0; i < 4; i++) {
    const y = yBase + i * yStep;
    slotsDEF.push(y);
    slotsMID.push(y + yStep * 0.1);
    slotsFWD.push(y + yStep * 0.2);
  }

  const gkPlayers = team.squad.filter((p) => p.position === "GK");
  const defPlayers = team.squad.filter((p) => p.position === "DEF");
  const midPlayers = team.squad.filter((p) => p.position === "MID");
  const fwdPlayers = team.squad.filter((p) => p.position === "FWD");

  const jerseyBase = isLeft ? 1 : 12;
  let jerseyCounter = 0;

  const placeLine = (players, x, slots) => {
    players.forEach((player, idx) => {
      const y = slots[idx % slots.length];
      const dot = document.createElement("div");
      dot.className = `player-dot ${teamClass}`;
      const numberEl = document.createElement("div");
      numberEl.className = "player-number";
      numberEl.textContent = String(jerseyBase + jerseyCounter);
      jerseyCounter++;
      const labelEl = document.createElement("div");
      labelEl.className = "player-label";
      labelEl.textContent = playerInitials(player.name);
      dot.appendChild(numberEl);
      dot.appendChild(labelEl);
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      pitchEl.appendChild(dot);
      dots.push({ el: dot, x, y, player });
    });
  };

  if (gkPlayers.length) {
    const gkY = height * 0.5;
    placeLine(gkPlayers, lineX, [gkY]);
  }
  placeLine(defPlayers, defX, slotsDEF);
  placeLine(midPlayers, midX, slotsMID);
  placeLine(fwdPlayers, fwdX, slotsFWD);

  return dots;
}

function startLiveMatch(result) {
  // UI hazırla
  matchResultEl.innerHTML = "";
  liveMessageEl.textContent = "";
  liveMessageEl.classList.remove("goal");
  matchOverlayEl.classList.remove("hidden");

  scoreTeamANameEl.textContent = result.teamA.name;
  scoreTeamBNameEl.textContent = result.teamB.name;
  scoreTeamAGoalsEl.textContent = "0";
  scoreTeamBGoalsEl.textContent = "0";
  scoreMinuteEl.textContent = "0'";
  shotsAEl.textContent = "0";
  shotsBEl.textContent = "0";
  possessionAEl.textContent = "50";
  possessionBEl.textContent = "50";

  let goalsA = 0;
  let goalsB = 0;
  let shotsA = 0;
  let shotsB = 0;
  let possessionTicksA = 0;
  let possessionTicksB = 0;

  startPhaserMatch(
    result,
    () => {
      // ON MATCH END
      let pointsA = 0;
      let pointsB = 0;
      if (goalsA > goalsB) {
        pointsA = 3;
        result.teamA.points = (result.teamA.points || 0) + 3;
      } else if (goalsB > goalsA) {
        pointsB = 3;
        result.teamB.points = (result.teamB.points || 0) + 3;
      } else {
        pointsA = 1;
        pointsB = 1;
        result.teamA.points = (result.teamA.points || 0) + 1;
        result.teamB.points = (result.teamB.points || 0) + 1;
      }
      
      liveMessageEl.classList.remove("goal");
      liveMessageEl.textContent = "Maç sona erdi.";
      pmScoreEl.textContent = `${result.teamA.name} ${goalsA} - ${goalsB} ${result.teamB.name}`;
      
      if (isMultiplayer) {
         let myPts = (result.teamA.id === myPlayerId) ? result.teamA.points : result.teamB.points;
         let earned = (result.teamA.id === myPlayerId) ? pointsA : pointsB;
         pmPointsInfoEl.innerHTML = `Maçtan Kazanılan: <b>${earned} Puan</b><br>Toplam Puanınız: <b>${myPts} Puan</b>`;
         
         if (!isHost) {
           btnPmRematch.classList.add("hidden");
           btnPmNewDraft.classList.add("hidden");
           pmWaitingMessage.classList.remove("hidden");
         } else {
           btnPmRematch.classList.remove("hidden");
           btnPmNewDraft.classList.remove("hidden");
           pmWaitingMessage.classList.add("hidden");
         }
      } else {
         pmPointsInfoEl.innerHTML = ``;
         btnPmRematch.classList.remove("hidden");
         btnPmNewDraft.classList.remove("hidden");
         pmWaitingMessage.classList.add("hidden");
      }
      
      postMatchModal.classList.remove("hidden");
      simulateBtn.disabled = true;
      simulateBtn.textContent = "Maç oynandı";
    },
    (isTeamA, ev) => {
      // ON GOAL
      if (isTeamA) {
        goalsA++;
        shotsA++;
        scoreTeamAGoalsEl.textContent = String(goalsA);
        shotsAEl.textContent = String(shotsA);
      } else {
        goalsB++;
        shotsB++;
        scoreTeamBGoalsEl.textContent = String(goalsB);
        shotsBEl.textContent = String(shotsB);
      }
      liveMessageEl.classList.add("goal");
      liveMessageEl.innerHTML = `GOOOL!<br>${ev.scorer}<br>${ev.minute}'`;
    },
    (isTeamA, ev) => {
      // ON SHOT
      if (isTeamA) {
        shotsA++;
        shotsAEl.textContent = String(shotsA);
      } else {
        shotsB++;
        shotsBEl.textContent = String(shotsB);
      }
      liveMessageEl.classList.remove("goal");
      liveMessageEl.textContent = `${ev.team} tehlikeli bir şut denedi (${ev.minute}')`;
    },
    (minute, possession) => {
      // ON TICK
      scoreMinuteEl.textContent = `${minute}'`;
      if (possession === "A") possessionTicksA++;
      else possessionTicksB++;
      const totalPosTicks = possessionTicksA + possessionTicksB || 1;
      const posA = Math.round((possessionTicksA / totalPosTicks) * 100);
      possessionAEl.textContent = String(posA);
      possessionBEl.textContent = String(100 - posA);
    }
  );

  simulateBtn.disabled = true;
}

// --- REMATCH & NEW DRAFT LOGIC ---
btnPmRematch.addEventListener("click", () => {
   if (isMultiplayer && isHost) {
      broadcastState({ type: "REMATCH" });
   }
   handleRematch();
});

btnPmNewDraft.addEventListener("click", () => {
   if (isMultiplayer && isHost) {
      broadcastState({ type: "NEW_DRAFT" });
   }
   handleNewDraft();
});

btnPmExit.addEventListener("click", () => {
   location.reload(); 
});

function handleRematch() {
   postMatchModal.classList.add("hidden");
   matchOverlayEl.classList.add("hidden");
   simulateBtn.disabled = false;
   simulateBtn.textContent = "Maç Simülasyonu";
}

function handleNewDraft() {
   postMatchModal.classList.add("hidden");
   matchOverlayEl.classList.add("hidden");
   
   // Reset squads but KEEP points
   gameState.players.forEach(p => { p.drafted = false; });
   gameState.teams.forEach(t => { t.squad = []; t.budget = START_BUDGET; });
   gameState.draftedPlayers.clear();
   gameState.currentPickIndex = 0;
   gameState.isDraftFinished = false;
   simulateBtn.disabled = true;
   simulateBtn.textContent = "Maç Simülasyonu";
   renderPlayersList();
   renderTeams();
   updateTurnInfo();
}


// Event listeners
playerCountSelect.addEventListener("change", initPlayerNameInputs); 
btnStartSingle.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
btnHostOnline.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  multiplayerScreen.classList.remove("hidden");
});
startDraftBtn.addEventListener("click", startDraft);
searchInput.addEventListener("input", () => {
  if (!gameState.isDraftFinished) renderPlayersList();
});
positionFilter.addEventListener("change", () => {
  if (!gameState.isDraftFinished) renderPlayersList();
});
if (sortFilter) {
  sortFilter.addEventListener("change", () => {
    if (!gameState.isDraftFinished) renderPlayersList();
  });
}
simulateBtn.addEventListener("click", simulateMatch);
btnExitMatch.addEventListener("click", () => {
  matchOverlayEl.classList.add("hidden");
});

// MULTIPLAYER LOGIC
function broadcastState() {
  if (!isHost) return;
  const stateToSend = {
    type: "STATE_UPDATE",
    gameState: {
      players: gameState.players,
      currentPickIndex: gameState.currentPickIndex,
      pickOrder: gameState.pickOrder,
      draftedPlayers: Array.from(gameState.draftedPlayers),
      isDraftFinished: gameState.isDraftFinished
    }
  };
  connections.forEach(conn => conn.send(stateToSend));
}

function renderConnectedPlayers() {
  connectedPlayersList.innerHTML = "";
  connectedPeers.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.name + (p.id === 0 ? " (Host)" : "");
    connectedPlayersList.appendChild(li);
  });
}

btnCreateRoom.addEventListener("click", () => {
  isMultiplayer = true;
  isHost = true;
  myPlayerId = 0;
  
  document.getElementById("mp-selection").classList.add("hidden");
  mpHostUI.classList.remove("hidden");
  
  peer = new Peer(); 
  peer.on("open", (id) => {
    roomCodeDisplay.textContent = id;
    myPlayerName = "Host"; 
    connectedPeers.push({ name: myPlayerName, id: 0, conn: null });
    renderConnectedPlayers();
  });
  
  peer.on("connection", (conn) => {
    conn.on("open", () => {
      conn.on("data", (data) => {
        if (data.type === "JOIN") {
          const newId = connectedPeers.length;
          connectedPeers.push({ name: data.name, formation: data.formation, id: newId, conn: conn });
          connections.push(conn);
          renderConnectedPlayers();
          
          if (connectedPeers.length > 0) {
            btnStartMpDraft.disabled = false;
            btnStartMpDraft.textContent = "Draft Başlat";
          }
          
          conn.send({ type: "JOIN_SUCCESS", id: newId });
        } else if (data.type === "PICK") {
           const player = PLAYERS_DB.find(p => p.name === data.playerName);
           if (player) {
              handlePick(player, true);
           }
        }
      });
    });
  });
});

btnJoinRoomUI.addEventListener("click", () => {
  isMultiplayer = true;
  isHost = false;
  
  document.getElementById("mp-selection").classList.add("hidden");
  mpJoinUI.classList.remove("hidden");
});

btnJoinRoom.addEventListener("click", () => {
  const code = joinRoomCodeInput.value.trim();
  const name = joinPlayerNameInput.value.trim() || "Misafir";
  if (!code) return;
  
  joinStatus.style.display = "block";
  joinStatus.textContent = "Bağlanılıyor...";
  btnJoinRoom.disabled = true;
  
  peer = new Peer();
  peer.on("open", (id) => {
    hostConnection = peer.connect(code);
    
    hostConnection.on("open", () => {
      joinStatus.textContent = "Bağlantı başarılı. Host'un başlatması bekleniyor...";
      const formation = document.getElementById("join-formation").value;
      hostConnection.send({ type: "JOIN", name: name, formation: formation });
    });
    
    hostConnection.on("data", (data) => {
      if (data.type === "JOIN_SUCCESS") {
         myPlayerId = data.id;
         joinStatus.textContent = "Bağlantı başarılı. Host'un başlatması bekleniyor...";
      } else if (data.type === "STATE_UPDATE") {
         multiplayerScreen.classList.add("hidden");
         draftScreen.classList.remove("hidden");
         
         gameState.players = data.gameState.players;
         gameState.currentPickIndex = data.gameState.currentPickIndex;
         gameState.pickOrder = data.gameState.pickOrder;
         gameState.draftedPlayers = new Set(data.gameState.draftedPlayers);
         gameState.isDraftFinished = data.gameState.isDraftFinished;
         
         renderTeams();
         renderPlayersList();
         updateTurnInfo();
         
         if (gameState.isDraftFinished) {
            onDraftFinished();
         }
      } else if (data.type === "MATCH_RESULT") {
         startLiveMatch(data.result);
      } else if (data.type === "REMATCH") {
         handleRematch();
      } else if (data.type === "NEW_DRAFT") {
         handleNewDraft();
      }
    });
    
    hostConnection.on("error", (err) => {
      joinStatus.textContent = "Bağlantı hatası: " + err;
      btnJoinRoom.disabled = false;
    });
  });
});

btnStartMpDraft.addEventListener("click", () => {
  const hostFormationStr = document.getElementById("host-formation").value;
  const players = [];
  connectedPeers.forEach(p => {
    const formationStr = (p.id === 0) ? hostFormationStr : p.formation;
    players.push({
      id: p.id,
      name: p.name,
      formation: formationStr,
      formationLimits: parseFormationLimits(formationStr),
      budget: START_BUDGET,
      squad: [],
      points: 0
    });
  });

  gameState.players = players;
  gameState.pickOrder = createPickOrder(players.length);
  gameState.currentPickIndex = 0;
  gameState.draftedPlayers = new Set();
  gameState.isDraftFinished = false;

  mpHostUI.classList.add("hidden");
  multiplayerScreen.classList.add("hidden");
  draftScreen.classList.remove("hidden");
  
  renderTeams();
  renderPlayersList();
  updateTurnInfo();
  
  broadcastState();
});

// Başlangıçta isim alanlarını hazırla
initPlayerNameInputs();

