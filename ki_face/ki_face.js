function setup() {
createCanvas(600,600);
}


function draw() {
  //background
  
  background('#77eec4');
  //ponytail
 fill('#0c0d01');
triangle(175, 325, 280, 325, 220, 500); 
 //head
  fill('#ebae6c');
ellipse(300, 300, 225, 300);
//eyes
fill(225);
ellipse(250, 250, 80, 60);
  fill(225);
ellipse(350, 250, 80, 60);
 fill('#383c08');
  circle(350, 250, 20);
  fill('#383c08');
  circle(250, 250, 20);
  //hair
  fill('#0c0d01');
quad(250,250 , 150, 400, 200, 175,300, 125);
 fill('#0c0d01');
quad(350,250 , 450, 300, 400, 175,300, 140);

//lips
fill('#e19494');
ellipse(300,400, 65, 25);
fill('#e19494');
ellipse(315,393, 35, 19);
fill('#e19494');
ellipse(285,393, 35, 19);

//nose
fill('#faa067');
triangle(300, 225, 280, 360, 320, 360);
}
