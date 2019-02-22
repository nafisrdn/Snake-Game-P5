let snake;

function setup() {
    createCanvas(700, 700);
    frameRate(60)

    snake = new Snake(0, 0, 35 ,35 ,30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  }else if(keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  }else if(keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }else if(keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  }

}

function draw() {
  
  background(0);

  snake.update();
  snake.draw();
}