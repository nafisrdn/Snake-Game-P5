class Snake{
    constructor(x, y, width, height, delay){
        this.body = [];
        this.body[0] = createVector(0, 0);

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

    

    grow(){
        
        let x = this.body[this.body.length - 1].x - this.width;
        let y = this.body[this.body.length - 1].y;

        let bodyToCopy = createVector(x, y);

            this.body.push(bodyToCopy);
            
            for (let i = 0; i < this.body.length; i++) {
                const element = this.body[i];

                console.log(`body ${i}: ${element.x}`);
            }
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
            const head = this.body[0];
            
            let prevPosVector = [];

            prevPosVector[0] = createVector(head.x, head.y);

            head.x += Math.floor(this.width * this.xdir);
            head.y += Math.floor(this.height * this.ydir);
            
            for (let i = 0; i < this.body.length; i++) {
                if (i > 0) {
                    let tail = this.body[i];   

                    prevPosVector[i] = createVector(tail.x, tail.y);
                    
                    tail.x = prevPosVector[i - 1].x;
                    tail.y = prevPosVector[i - 1].y;

                    
                    console.log(`----------------\n ${i} \n----------------`);
                    
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