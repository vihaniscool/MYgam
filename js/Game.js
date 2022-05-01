class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function(data){
      gameState=data.val() 
    })
  }
updateState(state){
database.ref("/").update({
  gameState:state 
})
}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getPlayerCount();

      car1 = createSprite(width/2-50,height-100);
      //car1.addImage("car1", car1Image);
      car2 = createSprite(width/2+50,height-100);
     // car2.addImage("car2", car2Image);

    cars = [car1,car2]
    obsticals = new Group()
    this.addSprites(obsticals, 12, obsticalImage, 0.09);
    powerCoins = new Group()
    this.addSprites(powerCoins, 18, powerCoinImage, 0.09);
  }

  play(){
   
   if (allPlayers !== undefined) {
    //image(track, 0, -height * 5, width, height * 6);
    
    obsticals.setVelocityXEach(5);   
    //index of the array
    var index = 0;
    for (var plr in allPlayers) {
      //add 1 to the index for every loop
      index = index + 1;

      //use data form the database to display the cars in x and y direction
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      cars[index - 1].position.x = x;
      cars[index - 1].position.y = y;

      if (index === player.index) {
        // Changing camera position in y direction
        camera.position.y = cars[index - 1].position.y;
       this.handlePowerCoins(index)
      }
    }
  }
}

addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;

    //C41 //SA
    if (positions.length > 0) {
      x = positions[i].x;
      y = positions[i].y;
      spriteImage = positions[i].image;
    } else {
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);
    }
    var sprite = createSprite(x, y);
    //sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}

handlePlayerControls() {
  if (keyIsDown("W")) {
    player.positionY -= 10;
    player.update();
  }

  if (keyIsDown("S")) {
    player.positionY += 10;
    player.update();
  }

  if (keyIsDown("A") && player.positionX > width / 3 - 50) {
    player.positionX -= 5;
    player.update();
  }

  if (keyIsDown("D") && player.positionX < width / 2 + 300) {
    player.positionX += 5;
    player.update();
  }
}
handlePowerCoins(index) {
  cars[index - 1].overlap(powerCoins, function(collector, collected) {
    player.score += 21;
    player.update();
    //collected is the sprite in the group collectibles that triggered
    //the event
    collected.remove();
  });
}
}


  
