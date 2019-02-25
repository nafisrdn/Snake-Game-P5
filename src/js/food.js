class Food {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
    }

    reLocate(x, y){
        this.x = x;
        this.y = y;
    }

    update() {
        

    }

    draw() {
        fill(255, 38, 1);
        rect(this.x, this.y, this.width, this.height);
    }
}