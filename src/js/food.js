class Food {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
    }

    update() {
        

        
    }

    draw() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }
}