function Ball() {
    this.x = innerWidth/2;
    this.y = innerHeight/2;
    this.speedX = 2;
    this.speedY = 2;
    this.xdir = 0;
    this.ydir = 0;
    this.r = 7;
    this.outG = false;
    this.setR = 255;
    this.setG = 255;
    this.setB = 255;
    
    this.history = [];
    
    this.show = function() {
        push();
        //this.setR = map(this.speedX, 2, 30, 0, 255);
        //this.setG = map(this.speedX, 2, 30, 255, 0);
        this.setBallColor();
        
        for (var i = 0; i < this.history.length; i++){
            var pos = this.history[i];
            fill(255, 0, 0, 50);
            noStroke();
            ellipse(pos.x, pos.y, map(i, 0, this.history.length, 1, 15), map(i, 0, this.history.length, 1, 12));
        }
        
        fill(this.setR, this.setG, this.setB);     
        ellipse(this.x, this.y, 15, 15);
        
        pop();
    }
    
    this.setBallColor = function () {
        if (this.setR == 255 && this.setG == 255 && this.setB > 0)
            this.setB = map(this.speedX, 2, 10, 255, 0);
        if (this.setR == 255 && this.setG > 0 && this.setB < 255)
            this.setG = map(this.speedX, 10, 20, 255, 0);
    }
    
    this.resetWhite = function () {
        this.setR = 255;
        this.setG = 255;
        this.setB = 255;
    }
    
    this.setXDir = function(dir) { 
        this.xdir = dir;
    }
    
    this.setYDir = function(dir) {
        this.ydir = dir;
    }
    
    this.move = function() {        
        this.x += this.xdir * this.speedX;
        this.y += this.ydir * this.speedY;
        this.checkBorders();
        
        var v = createVector(this.x, this.y);
        this.history.push(v);
        
        if (this.history.length > 35)
            this.history.splice(0, 1);
    }
    
    this.checkBorders = function() {
        if (this.y <= this.r)
            this.setYDir(1);
        if (this.y >= innerHeight - this.r)
            this.setYDir(-1);        
    } 
    
    this.checkLimits = function() {        
        if (this.x <= 0){
            this.x = innerWidth/2;
            this.y = innerHeight/2;
            this.speedX = 2;
            this.outG = true;
            this.resetWhite();
            return 1;
        }
        if (this.x >= innerWidth){
            this.x = innerWidth/2;
            this.y = innerHeight/2;
            this.speedX = 2;
            this.outG = true;
            this.resetWhite();
            return 2;
        }
        return  0;
    }
     
    this.checkPlayerCollisions = function(player) {
        var d = dist(this.x, 0, player.x, 0);
        //text(d, 100, 100);
        if (d < this.r + player.w/2) {
            if ( (this.y <= player.y + player.h/2) && (this.y >= player.y - player.h/2) ) {
                this.setXDir(this.xdir * (-1));
                this.speedX += 2;
            }
        }           
    }
    
    this.checkREDBULLCollisions = function(redbull) {
        var d = dist(this.x, 0, redbull.x, 0);
        //text(d, 100, 100);
        if (d < this.r + redbull.s/2) {
            if ( (this.y <= redbull.y + redbull.s/2) && (this.y >= redbull.y - redbull.s/2) ) {
                redbull.alive = false;
                this.speedX += 15;                
            }
        }           
    }
    
    this.checkREVERSECollisions = function(reverse) {
        var d = dist(this.x, 0, reverse.x, 0);
        //text(d, 100, 100);
        if (d < this.r + reverse.w/2) {
            if ( (this.y <= reverse.y + reverse.h/2) && (this.y >= reverse.y - reverse.h/2) ) {
                reverse.alive = false;
                this.xdir = -this.xdir;
                this.ydir = -this.ydir;
            }
        }           
    }
    
    this.checkMULTIBALLSCollisions = function(multi) {
        var d = dist(this.x, 0, multi.x, 0);
        //text(d, 100, 100);
        if (d < this.r + multi.s/2) {
            if ( (this.y <= multi.y + multi.s/2) && (this.y >= multi.y - multi.s/2) ) {
                multi.alive = false;
                multi.createBalls(this.xdir, this.ydir);
            }
        }           
    }
    
}