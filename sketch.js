var Zenia,Tourus,Cyclap;
var speed,weight;
var wall;

function setup() {
  createCanvas(1600,400);
  Zenia = createSprite(20, 100, 20, 20);
  Tourus = createSprite(20, 200, 20, 20);
  Cyclap = createSprite(20, 300, 20, 20);

  wall = createSprite(1500,200,60,400);
  
  Zenia.shapeColor = "white";
  Tourus.shapeColor = "white";
  Cyclap.shapeColor = "white";
  wall.shapeColor = 80,80,80;
  
  // speed = m/s
  speed=random(10,30);
  // weight = N
  weight=random(500,2000);

  Zenia.velocityX = speed;
  Tourus.velocityX = speed;
  Cyclap.velocityX = speed;
}

function draw() {
  background(0);
  
  if(wall.x - Zenia.x < (wall.width/2 + Zenia.width/2)){
    Zenia.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/22500

    if(deformation > 180){
      Zenia.shapecolor="red";
    }
    if(deformation > 80){
      Zenia.shapeColor="yellow";
    }
    if(deformation < 80){
      Zenia.shapeColor="green";
    }
  }
  if(wall.x - Tourus.x < (wall.width/2 + Tourus.width/2)){
    Tourus.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/22500

    if(deformation > 180){
      Tourus.shapecolor="red";
    }
    if(deformation > 80){
      Tourus.shapeColor="yellow";
    }
    if(deformation < 80){
      Tourus.shapeColor="green";
    }
  }
  if(wall.x - Cyclap.x < (wall.width/2 + Cyclap.width/2)){
    Cyclap.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/22500

    if(deformation > 180){
      Cyclap.shapecolor="red";
    }
    if(deformation > 80){
      Cyclap.shapeColor="yellow";
    }
    if(deformation < 80){
      Cyclap.shapeColor="green";
    }
  }


  drawSprites();
}