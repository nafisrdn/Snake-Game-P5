
let food;
let snake;
let gameOver;
let score;
let gameOverText = "GAME OVER";
let highestScore = 0;

function setup() {
    createCanvas(525, 525);
    frameRate(60)
    collideDebug(true);

    gameOver = false;
    score = 0;


    let foodX = Math.floor(random(0, 15)) * 35;
    let foodY = Math.floor(random(0, 15)) * 35;

    food = new Food(foodX, foodY, 35, 35);


    snake = new Snake(70, 70, 35 ,35, 10);
}

const restartBtn = document.body.querySelector('.restart-btn');

restartBtn.onclick = function () {
  restartGame();
}

function restartGame() {
  setup();
  loop();
}

function keyPressed() {
  snake.keyPressed();

  if (keyCode === 32) {
    if (gameOver) {
      restartGame(); 
    }
  }
}

function mouseClicked() {
  if (gameOver) {
    restartGame();
  }
}


function draw() {
  
  background(0);
  noStroke();

  
  snake.update();
  snake.draw();


  if (snake.eat(food)) {
    
    score++;
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

  if (snake.hitBody() || snake.hitWall()) {
    gameOver = true;
  }

  food.update();
  food.draw();

  fill(255);

  textSize(25);
  text(score, 50, 50);

  if (gameOver) {
    let subGameOverText = 'Click or Space to restart game';

    textSize(35);
    text(gameOverText, (width / 2) - (textWidth(gameOverText) / 2), (height / 2));


    textSize(20);
    text(subGameOverText, (width / 2) - (textWidth(subGameOverText) / 2), (height / 2) + 35);

    if (score > highestScore) {
      highestScore = score;
    }

    document.body.querySelector('#message-1').textContent = `Your highest score is: ${highestScore}`;

    noLoop();
  }
}