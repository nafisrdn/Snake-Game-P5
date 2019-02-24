class Snake{
    constructor(x, y, width, height, delay){
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.delay = delay;

        this.xdir = 1;
        this.ydir = 0;

        this.delta = 0;
    }

    setDir(x, y){
        this.xdir = x;
        this.ydir = y;
    }

    eat(food) {
        return collidePointRect(this.x, this.y, food.x, food.y, this.width - 1, this.height - 1);
    }

    update(){
        if (this.delta == this.delay) {
            this.x += Math.floor(this.width * this.xdir);
            this.y += Math.floor(this.height * this.ydir);

            this.delta = 0;
        }

        this.delta++;

    }

    keyPressed(){
        this.move();
    }

    move(){
        if (keyCode === LEFT_ARROW && this.xdir != 1) {
            this.setDir(-1, 0);
          }else if(keyCode === RIGHT_ARROW && this.xdir != -1) {
            this.setDir(1, 0);
          }else if(keyCode === UP_ARROW && this.ydir != 1) {
            this.setDir(0, -1);
          }else if(keyCode === DOWN_ARROW && this.ydir != -1) {
            this.setDir(0, 1);
          }
    }

    draw(){
        fill(0, 255, 0);
        rect(this.x, this.y, this.width, this.height);
    }
}