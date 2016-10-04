var x = 160;
var y = 1040;
var speed = 1;
var bg;
var x2 = 50 * -1;
var y2 = 50;
var x3 = 320;
var y3 = 50;

var lim1;
var lim2;


var speed = translate(2,2);


function setup() {
  createCanvas(320, 640);

}

function draw() {
  //map(bg, 640, 0, 0, 255);
  bg = background(y);
 
var lim2 = x2 + 50;       //block limits
var lim1 = x2 - 50; 
 
  fill(255);              //stars
  noStroke();
  ellipse(5,10,4,4);
  ellipse(13,260,4,4);
  ellipse(26,170,4,4);
  ellipse(29,50,4,4);
  ellipse(32,322,4,4);
  ellipse(41,94,4,4);
  ellipse(49,84,4,4);
  ellipse(65,192,4,4);
  ellipse(71,68,4,4);
  ellipse(77,192,4,4);
  ellipse(90,49,4,4);
  ellipse(96,305,4,4);
  ellipse(109,28,4,4);
  ellipse(120,38,4,4);
  ellipse(123,222,4,4);
  ellipse(129,235,4,4);
  ellipse(145,85,4,4);
  ellipse(159,321,4,4);
  ellipse(164,85,4,4);
  ellipse(180,92,4,4);
  ellipse(200,234,4,4);
  ellipse(209,100,4,4);
  ellipse(221,49,4,4);
  ellipse(231,192,4,4);
  ellipse(238,10,4,4);
  ellipse(250,4,4,4);
  ellipse(256,84,4,4);
  ellipse(262,142,4,4);
  ellipse(281,290,4,4);
  ellipse(289,349,4,4);
  ellipse(290,11,4,4);
  ellipse(298,74,4,4);
  ellipse(310,69,4,4);
  ellipse(315,222,4,4);
  ellipse(322,82,4,4);
  ellipse(329,120,4,4);
  ellipse(340,99,4,4);
  ellipse(356,182,4,4);
  ellipse(360,293,4,4);  
 
  fill(160);                     //moon
  ellipse(x, y, 30, 30);
  
 y = y - speed;
 
 
 noStroke();                    //rectangles
 fill(255,127,80);
 rect(x2,y2,50,20);
 
 noStroke();
 fill(255,127,80);
 rect(x3,y3,50,20);
 
  
stroke(0)                                               //text
if(y > 500 && speed > 0){
  fill(218,112,214);
  text("THE MOON IS FLYING INTO SPACE!", 60, 300);
  text("SMASH THE KEYBOARD TO BUILD A WALL!", 50,320);
}

  if(y >= 0 && y <=255 && speed > 0){
    fill(255);
    text("HURRY! THE MOON IS GETTING AWAY!", 60, 500);
  }
 
  if(y<0){
    fill(255);
    text("Goodbye moon! Happy trails!", 60, 500);
  }

if(x3 <= lim2 && x3 >= lim1 && y===95){
  speed = speed * -1;
}
if(speed < 0){
  fill(y * -1);
  textSize(25)
  text("YOU", 125, 300);
  text("SAVED", 120, 320);
  text("THE", 125, 340);
  text("WORLD", 120, 360);
}

 

  
}

function keyTyped(){
  if (key === 'q') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'w') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'e') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'r') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 't') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'y') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'u') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'i') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }if (key === 'o') {
   x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'p') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'a') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 's') {
   x2 = x2 + .5;
    x3 = x3 -.5;
  }
   if (key === 'd') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'f') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'g') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'h') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'j') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'k') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'l') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'z') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }if (key === 'x') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'c') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'v') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'b') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'n') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
  if (key === 'm') {
    x2 = x2 + .5;
    x3 = x3 -.5;
  }
}
