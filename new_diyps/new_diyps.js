var img;
var initials ='kt'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var angle =0.0;

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('chameleon.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
//img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // green line
   //lines
    stroke('#7a9025');
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // purple line

    stroke('#b590ea');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  else if (toolChoice == '3') { //stripe
    stroke('#4cd5a7');
    fill('#4cd5a7');
    rect(mouseX, mouseY, 75, 55);
  
 } 

  else if (toolChoice == 'f'|| toolChoice == 'F') { //tail curl
   
  translate(mouseX,mouseY);
  rotate(angle);
  ellipse(-15,-15,25,25);
  angle +=0.1;
  stroke('#11d514')
  fill('#b590ea')
  } 
  else if (toolChoice == '4') { //cream line
     stroke('#f9faff');
 
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  else if (key == '5') { // eye
    stroke('#57992a');
  
    fill('#03000b');
    circle(mouseX, mouseY, pmouseX);
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { //vent
    noStroke();
    fill('#58040c');
    ellipse(mouseX, mouseY, 10, 15);
  //scales
  } else if (toolChoice == '7') { 
    fill('#f9faff');
    square(pmouseX, pmouseY, 5);
  
  } else if (toolChoice == 'z' || toolChoice == 'Z') {
    fill('#2afff6');
    square(pmouseX, pmouseY, 5);
  
  } else if (toolChoice == '8') {  //head
    stroke('#58040c');
    fill('#58040c');
    triangle(30, 200, pmouseX, 20, mouseX, mouseY);
  
  } else if (toolChoice == '9') { //leg
    stroke('#58040c');
    fill('#2fe0ff');
    ellipse(mouseX, mouseY, 35, 15);
  
  } else if (toolChoice == '0') { //body
    noStroke();
    fill('#58040c');
    ellipse(mouseX, mouseY, 400, 300);
  
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
  //tail
  } else if (toolChoice == 'v'|| toolChoice == 'V') {
    stroke('#48d59f'); 
    strokeWeight(30);
     line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 's'|| toolChoice == 'S') {
   stroke('#25d563'); 
    strokeWeight(30);
     line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'a'|| toolChoice == 'A') {
    stroke('#11d514');
    strokeWeight(30);
     line(mouseX, mouseY, pmouseX, pmouseY);
    
 } else if (toolChoice == 'w'|| toolChoice == 'W') { //toe
    stroke('#112d14'); 
    strokeWeight(5);
     line(mouseX, mouseY, pmouseX, pmouseY);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
