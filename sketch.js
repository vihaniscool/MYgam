var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2;
var obsticalImage, obsticals;
var powerCoins;
var gameState;
var allPlayers
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/titlething.png");
 obsticalImage = loadImage("assets/obsticalthing.png");
 powerCoinImage = loadImage("assets/cointhing.png");
 car1Image = loadImage("assets/redthing.png");
 car2Image = loadImage("assets/bluething.png");
  //track = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
background(backgroundImage);



  if(playerCount === 2){
game.updateState(1)
}
if (gameState === 1){
  game.play()
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


