function MULTIBALLS() {
    this.s = 75;
    this.x = random() < 0.5 ? ((width/2)-(this.s*2)) : ((width/2)+(this.s*2));
    //this.x = round(random((width/2)-(this.s*2), (width/2)+(this.s*2)));
    this.y = round(random(this.s, height-this.s));
    this.xdir = 0;
    this.ydir = 0;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.i = 0;
    this.colorSpeed = 20;
    this.alive = false;
    this.balls = [];
    this.ballsAlive = 0;
    
    this.show = function() { 
        this.setRed();
        this.setGreen();
        this.setBlue();
        
        push();
        /*fill(this.r, this.g, this.b);
        noStroke();*/
        noFill();
        strokeWeight(5);
        stroke(this.r, this.g, this.b);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.s, this.s, 10);
        pop();
    }
    
    this.createBalls = function (xd, yd) {
        this.xdir = xd;
        this.ydir = yd;
        this.initBalls();
        this.showBalls();        
    }
    
    this.initBalls = function () {
        for (this.i = 0; this.i < 4; this.i++){
            this.balls[this.i] = new Ball();
            this.setInitPar(this.i);
            this.ballsAlive++;
        }
    }
    
    this.setInitPar = function (n) {
        this.balls[n].x = round(random(this.x -20, this.x + 20));
        this.balls[n].y = round(random(this.y -20, this.y + 20));
        this.balls[n].speedX = round(random(2, 5));
        this.balls[n].speedY = round(random(2, 5));
        this.balls[n].xdir = this.xdir;
        this.balls[n].ydir = this.ydir;
        this.balls[n].r = 7;
        this.outG = false;
    }
    
    this.showBalls = function () {
        for (this.i = 0; this.i < 4; this.i++){
            if (this.balls[this.i].outG == false){
                this.balls[this.i].show();
                this.balls[this.i].move();
            }            
        }
    }
    
    
    this.setRed = function() {
        if (this.r > 255)
            this.r = 255;
        if (this.r < 0)
            this.r = 0;
        
        if (this.g == 255 & this.r > 0)
            this.r -= this.colorSpeed;
        if (this.g == 0 & this.r < 255)
            this.r += this.colorSpeed;        
    }
    this.setGreen = function() {
        if (this.g > 255)
            this.g = 255;
        if (this.g < 0)
            this.g = 0;
        
        if (this.r == 255 & this.g < 255)
            this.g += this.colorSpeed;
        if (this.r == 0 & this.g > 0)
            this.g -= this.colorSpeed;  
    }
    this.setBlue = function() {
        if (this.b > 255)
            this.b = 255;
        if (this.b < 0)
            this.b = 0;
        
        if (this.r == 255 & this.b > 0)
            this.b -= this.colorSpeed;
        if (this.r == 0 & this.b < 255)
            this.b += this.colorSpeed;  
    }
    
    this.frankenstein = function() {
        this.choosen = random(0, 8000);
        if (this.choosen <= 5){
            this.x = random() < 0.5 ? ((width/2)-(this.s*2)) : ((width/2)+(this.s*2));
            this.y = round(random(this.s, height-this.s));
            this.alive = true;
        }
    }
}