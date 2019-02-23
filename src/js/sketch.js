
let food;
let snake;

function setup() {
    createCanvas(525, 525);
    frameRate(60)

    let foodX = Math.floor(random(0, 15)) * 35;
    let foodY = Math.floor(random(0, 15)) * 35;

    food = new Food(foodX, foodY, 35, 60);

    console.log(`Food X: ${foodX}`);
    console.log(`Food Y: ${foodY}`);
    


    snake = new Snake(0, 0, 35 ,35, 35);
}

function keyPressed() {
  snake.keyPressed();
}

function draw() {
  
  background(0);
  noStroke();

  snake.update();
  snake.draw();

  food.update();
  food.draw();
}