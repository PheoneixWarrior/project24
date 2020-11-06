var car, wall
var speed
function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 200, 60, height/2);
  car = createSprite(50, 200, 50, 50);
speed = Math.round(random(1, 255))
car.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
if(car.isTouching(wall)){
car.velocityX = 0
}else{
car.velocityX = speed

}
if(speed<180){
car.shapeColor = "red"

}else if(speed<100 && speed>180){
car.shapeColor = "yellow"
}else {
car.shapeColor = "green"}
}

