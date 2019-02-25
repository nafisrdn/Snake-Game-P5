
let food;
let snake;
let gameOver = false;

function setup() {
    createCanvas(525, 525);
    frameRate(60)
    collideDebug(true);

    let foodX = Math.floor(random(0, 15)) * 35;
    let foodY = Math.floor(random(0, 15)) * 35;

    food = new Food(foodX, foodY, 35, 35);

    console.log(`Food X: ${foodX}`);
    console.log(`Food Y: ${foodY}`);
    


    snake = new Snake(0, 0, 35 ,35, 10);
}

function keyPressed() {
  snake.keyPressed();
}


function draw() {
  
  background(0);
  noStroke();

  
  
  snake.update();
  snake.draw();


  if (snake.eat(food)) {
    
    let foodToRespawn = createVector(Math.floor(random(0, 15)) * 35, Math.floor(random(0, 15)) * 35);

    for (let i = 0; i < snake.body.length; i++) {
      let b = snake.body[i];
      
      if (b.x == foodToRespawn.x && b.y == foodToRespawn.y) {
        foodToRespawn = createVector(Math.floor(random(0, 15)) * 35, Math.floor(random(0, 15)) * 35);
      }
      
    }
    food.reLocate(foodToRespawn.x, foodToRespawn.y);
    snake.grow();
  }

  if (snake.hitBody()) {
    gameOver = true;
  }

  food.update();
  food.draw();

  if (gameOver) {
    noLoop();
  }
}