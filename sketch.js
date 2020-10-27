//game assets
var ball = createSprite(30, 30, 10, 10);
var cup = createSprite(395, 350, 10, 100);
cup.shapeColor = "yellow";
var edgetop = createSprite(0, 0, 800, 5);
var edgebottom = createSprite(0, 400, 800, 5);
var edgeleft = createSprite(0, 0, 5, 800);
var edgeright = createSprite(400, 0, 5, 800);
var wall1 = createSprite(80, 0, 10, 200);
var wall2 = createSprite(0, 130, 400, 10);
var wall3 = createSprite(200, 90, 10, 90);
var wall4 = createSprite(300, 120, 10, 160);
var wall5 = createSprite(260, 195, 220, 10);
var wall6 = createSprite(150, 245, 10, 110);
var wall7 = createSprite(75, 295, 250, 10)

function draw() {
  background("white");
  
  
  //movement
  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -1.5;
  }
  
  if (keyDown("down")) {
    ball.velocityY = 1.5;
    ball.velocityX = 0;
  }
  
  if (keyDown("left")) {
    ball.velocityX = -1.5;
    ball.velocityY = 0;
  }
  
  if (keyDown("right")) {
    ball.velocityX = 1.5;
    ball.velocityY = 0;
  }
  
  //wall collisions
  if (ball.isTouching(edgetop) || ball.isTouching(edgebottom) || ball.isTouching(edgeleft) || ball.isTouching(edgeright)) {
    ball.x = 30;
    ball.y = 30;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  //maze collisions
  if (ball.isTouching(wall1) || ball.isTouching(wall2) || ball.isTouching(wall3)  || ball.isTouching(wall4) || ball.isTouching(wall5) || ball.isTouching(wall6) || ball.isTouching(wall7)){
    ball.x = 30;
    ball.y = 30;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  //winner text
  if (ball.isTouching(cup)) {
    text("YOU WIN", 180, 330);
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  //draw the sprites onto the screen
  drawSprites();
}