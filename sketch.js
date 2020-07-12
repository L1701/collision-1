var movingRect,fixedRect;
var box1,box2;


function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(400, 100, 50, 50);
   fixedRect.shapeColor = "green";
   fixedRect.debug = true;
movingRect = createSprite(400,700,40,40);
movingRect.shapeColor = "green";
movingRect.debug = true;
//movingRect.velocityY = -5;
//fixedRect.velocityY = +5;

box1 = createSprite(500,100,30,10);
box1.shapeColor = "blue";
 box2 = createSprite(200,200,50,50);
 box2.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
//  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
//   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
//     movingRect.velocityX = movingRect.velocityX * (-1);
 //    fixedRect.velocityX = fixedRect.velocityX * (-1);
 //  }  
//if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  //&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 // movingRect.velocityY = movingRect.velocityY * (-1);
 // fixedRect.velocityY = fixedRect.velocityY * (-1);

//}
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,box2)) {
    movingRect.shapeColor = "red";
    box2.shapeColor = "red";
 }
    else {
      movingRect.shapeColor = "green";
       box2.shapeColor = "blue";
    }
   


  
//if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   // && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2

  drawSprites();
}

