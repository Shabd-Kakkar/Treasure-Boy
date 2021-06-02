//creating variables
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup; 

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
  //loading animations and images
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;


//creating boy running
  boy = createSprite(70,580,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
  
//making groups
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG=new Group();
  swordGroup=new Group();

}

function draw() {
  background(0);

//Setting gameState to play and making the game work
  if(gameState===PLAY){
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    boy.setCollider("circle",0,0,327);
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

//making an if else statement for scoring system and changing the gamestate to end on touching swordGroup
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
treasureCollection=treasureCollection+150
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
treasureCollection=treasureCollection+200
      
    }else{
      if(swordGroup.isTouching(boy)) {
   gameState = END
    }
  }
}
  
 //What happens in End gameState 
    if(gameState === 0){
      boy.addAnimation("SahilRunning",endImg);
      boy.scale = 0.88;
      boy.x=200;
      boy.y=300;
      diamondsG.destroyEach();
      swordGroup.destroyEach();
      cashG.destroyEach();
      jwelleryG.destroyEach();
      path.velocityY = 0;
    }
  
  drawSprites();
  textSize(20);
  fill(123,255,145);
  text("Treasure: "+ treasureCollection,150,30);

}

//creating function for spawning collectables
function createCash() {
  if (World.frameCount % 250 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 250 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 250 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 4;
  jwellery.lifetime = 250;
  jwelleryG.add(jwellery);
  }
}

//creating a function for spawning swords to end the game if they are touched
function createSword(){
  if (World.frameCount % 250 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}

//I hope you liked the project
//Thanks for reading the code