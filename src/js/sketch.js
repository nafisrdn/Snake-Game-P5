
let food;
let snake;

function setup() {
    createCanvas(525, 525);
    frameRate(60)
    collideDebug(true);

    let foodX = Math.floor(random(0, 15)) * 35;
    let foodY = Math.floor(random(0, 15)) * 35;

    food = new Food(foodX, foodY, 35, 35);

    console.log(`Food X: ${foodX}`);
    console.log(`Food Y: ${foodY}`);
    


    snake = new Snake(0, 0, 35 ,35, 35);
}

function keyPressed() {
  snake.keyPressed();
}

let hit = false;

function draw() {
  
  background(0);
  noStroke();

  

  snake.update();
  snake.draw();

  if (snake.eat(food)) {
    background(255, 0, 0);
  }

  food.update();
  food.draw();

  
}