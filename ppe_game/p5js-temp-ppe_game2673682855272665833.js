var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var imgA;
var img;
var imgB;
var imgC;
var imgD;
var imgE;
function preload()    
// preload() runs once, it may make you wait
// img = loadImage('74.png');  // 74.png needs to be next to this .js file
// you can link to an image on your github account
  //img = loadImage('https://dma-git.github.io/images/74.png');

{img =loadImage('virus.jpg');
imgA = loadImage('mask.jpg');
imgB = loadImage('face_shield.jpg');
imgD = loadImage('gloves.jpg'); 
imgC = loadImage('wash_your_hands.jpg');
imgE = loadImage('test.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img);
 
  if(gameState == "L1"){
  levelOne();
 text("Grab your mask!", width/2, height-250);
  }
 if(gameState =="L2"){
   levelTwo();
   text("Put on your face shield!", width/2, height-250);
 }
 if(gameState =="L3"){
   levelThree();
   text("Wash your hands!", width/2, height-250);
 }
  if(gameState =="L4"){
    levelFour();
    text("Pull on your gloves!", width/2, height-250);
  }
  if(gameState == "L5"){
    levelFive();
    text("Gather the Testing Kits!", width/2, height-250)
  }
  if(gameState == "L6"){
    levelSix();
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
    gameState = "L2"; 
// level 2                 
 // fill(random(255));
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(imgA,ballx-20, bally-20);
} // end level one

function levelTwo(){
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
    gameState = "L3";
// level 3
 // fill(random(255));
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(imgB, ballx-20, bally-20);
} // end level two

function levelThree(){
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
    gameState = "L4";
// level 4
//  fill(random(255));
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(imgC, ballx-20, bally-20);
} // end level three

function levelFour(){
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
    gameState = "L5";
// level 5
//  fill(random(255));
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(imgD, ballx-20, bally-20);
} // end level four

function levelFive(){
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>25){
    gameState = "L6"; 
 // fill(random(255));
  }
  line(ballx, bally, mouseX, mouseY);
  image(imgE, ballx-30, bally-30);
} // end level 5

function levelSix(){
  text("You're ready to fight COVID-19!", width/2, height-250);
}
