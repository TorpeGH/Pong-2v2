function Player(x, y) {
    
    this.x = x;
    this.y = y;
    this.ydir = 0;
    this.w = 15;
    this.h = 120;
    
    this.show = function() {
        push();
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
    
    this.setDir = function(dir) {
        this.ydir = dir;        
    }
    
    this.move = function() {
        this.y += this.ydir * 5;
        this.checkBorders();
    }
    
    this.checkBorders = function() {
        if (this.y <= this.h/2)
            this.y = this.h/2;
        if (this.y >= height - this.h/2)
            this.y = height - this.h/2;
    }
    
    this.up = function() {
        this.y -= 1;
    }
    
    this.down = function() {
        this.y += 1;
    }
}