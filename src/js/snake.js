class Snake{
    

    constructor(x, y, width, height, delay){
        this.body = [];
        this.body[0] = createVector(0, 0);

        this.x = x;
        this.y = y;

        this.head = this.body[0];

        this.width = width;
        this.height = height;

        this.delay = delay;

        this.xdir = 1;
        this.ydir = 0;

        this.delta = 0;

        this.lastTailXdir;
        this.lastTailYdir;
    }

    setDir(x, y){
        this.xdir = x;
        this.ydir = y;
    }

    eat(food) {
        return collidePointRect(this.head.x, this.head.y, food.x, food.y, this.width - 1, this.height - 1);
        // return collidePointRect(0, 0, 0, 20, 20);
    }

    

    grow(){
        let x;
        let y;


        
        if (this.lastTailXdir === 1) {
            x = this.body[this.body.length - 1].x - this.width;
        }else if (this.lastTailXdir === -1){
            x = this.body[this.body.length - 1].x + this.width;
        }else{
            x = this.body[this.body.length - 1].x;
        }
        
        if (this.lastTailYdir === 1){
            y = this.body[this.body.length - 1].y - this.width;
        }else if (this.lastTailYdir === -1){
            y = this.body[this.body.length - 1].y + this.width;
        }else {
            y = this.body[this.body.length - 1].y;
        }


        
        



        let bodyToCopy = createVector(x, y);

        this.body.push(bodyToCopy);
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

    update(){

        if (this.delta == this.delay) {
            
            let prevPosVector = [];

            prevPosVector[0] = createVector(this.head.x, this.head.y);

            this.head.x += Math.floor(this.width * this.xdir);
            this.head.y += Math.floor(this.height * this.ydir);
            
            for (let i = 0; i < this.body.length; i++) {
                if (i > 0) {
                    let tail = this.body[i];   

                    prevPosVector[i] = createVector(tail.x, tail.y);
                    
                    tail.x = prevPosVector[i - 1].x;
                    tail.y = prevPosVector[i - 1].y;

                    
                }
            }
            
            if (this.body.length > 1) {
                let lastTailX = this.body[this.body.length - 1].x;
                let lastTailY = this.body[this.body.length - 1].y;



                if (lastTailX > this.body[this.body.length - 2].x) {
                    this.lastTailXdir = -1;
                }else if (lastTailX < this.body[this.body.length - 2].x) {
                    this.lastTailXdir = 1;
                }else{
                    this.lastTailXdir = 0;
                }
                
                if (lastTailY > this.body[this.body.length - 2].y){
                    this.lastTailYdir = -1;
                }else if (lastTailY < this.body[this.body.length - 2].y){
                    this.lastTailYdir = 1;
                }else{
                    this.lastTailYdir = 0;
                }

            }


            this.delta = 0;
        }
        

        this.delta++;
        
    }

    keyPressed(){
        this.move();

        if (keyCode === 32) {
            this.grow();
        }
    }

    draw(){
        
        for (let i = 0; i < this.body.length; i++) {
            let b = this.body[i];

            if (i === 0) {
                fill(255, 255, 0);
            }else{
                fill(0, 255, 0);
            }

            rect(b.x, b.y, this.width, this.height);

        }
    }
}