var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50, 200, 50, 50)
  wall = createSprite(1500, 200, 60, height/2)
  wall = color(80, 80, 80)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if(localStorage.x-car.x < (car.width+wall.width)/2)
{
  car.velocity = 0;
}
 if(defromation<180 && deformation>100)
 {
   car.shapeColor = color(230, 230, 0)
 }

 if(deformation<100)
 {
   car.shapeColor = color(0, 255, 0)
 }