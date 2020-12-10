var wall, thickness;
var car, speed, weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90)
  weight = random(400,1500)

 //thickness = random(22,83)
speed = random(223,321)
weight = random (30,52)


  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)

car = createSprite(100,200,50,50)
car.velocityX = speed
}

function draw() {
  background(0);  

if(wall.x-car.x<(car.width+wall.width)/2)
{

car.velocityX = 0;
var deformation = 0.5*speed*speed*weight/22500

if(deformation>180){

car.shapeColor = color(255,0,0); 
}
  
if (deformation<180 && deformation>80)
{
  car.shapeColor = color(230,230,0)
}
if(deformation<80)
{
car.shapeColor = color (0,255,0)
}

}

  drawSprites();
}

