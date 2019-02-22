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

    update(){
        
        if (this.delta == this.delay) {
            this.x += this.width * this.xdir;
            this.y += this.height * this.ydir;

            this.delta = 0;
        }

        this.delta++;
    }

    draw(){
        noStroke();
        fill(0, 255, 0);
        rect(this.x, this.y, this.width, this.height);
    }
}