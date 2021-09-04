let ground;
let lander;
var lander_img;
var bg_img;
var invisLine

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  
  invisLine = createSprite(500,650,1000,5)
  invisLine.visible = false 

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  lander.collide(invisLine)
  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


