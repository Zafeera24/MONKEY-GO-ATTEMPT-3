
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(100,350);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(90,390,900,20);
  ground.velocityX = -7;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
  
}


function draw() {
background("blue");
  
  if(keyDown("space")){
    monkey.velocityY = -7; 
  }
  
  monkey.velocityY = monkey.velocityY + 5;
  
  monkey.collide(ground);
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  fill("pink");
  textSize(25);
  text("score: "+ Score,200,200);
  Score = Score + 1;
    
  spawnFood();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 60 === 0){
  obstacle = createSprite(200,355);
  obstacle.addImage("Image", obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -7;
  obstacle.lifetime = 90;
  obstacleGroup.add(obstacle);
  }
  
}

function spawnFood(){
  
  if(frameCount % 60 === 0){
    banana = createSprite(200,100);
    banana.addImage("food", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.y = Math.round(random(100,200));  
    FoodGroup.add(banana);
  }
}




















