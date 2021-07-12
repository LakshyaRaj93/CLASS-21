var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
box=createSprite(600,100,70,40);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(movingRect,box)){
  box.shapeColor="yellow";
  movingRect.shapeColor="red";
}
else{
  box.shapeColor="green";
  movingRect.shapeColor="blue";
}
  drawSprites();
}
