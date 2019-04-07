function REDBULL() {
    this.s = 80;
    this.x = random() < 0.5 ? ((width/2)-(this.s*2)) : ((width/2)+(this.s*2));
    //this.x = round(random((width/2)-(this.s*2), (width/2)+(this.s*2)));
    this.y = round(random(this.s, height-this.s));
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.colorSpeed = 20;
    this.alive = false;
    
    this.show = function() { 
        this.setRed();
        this.setGreen();
        this.setBlue();
        
        /*push();
        textSize(10);
        noStroke();
        fill(255, 0, 0);
        text(this.r, 10, 10);
        fill(0, 255, 0);
        text(this.g, 10, 30);
        fill(0, 0, 255);
        text(this.b, 10, 50);
        pop();*/
        
        push();
        fill(this.r, this.g, this.b);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.s, this.s, 10);
        pop();
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
        this.choosen = random(0, 5000);
        if (this.choosen <= 5){
            this.x = random() < 0.5 ? ((width/2)-(this.s*2)) : ((width/2)+(this.s*2));
            this.y = round(random(this.s, height-this.s));
            this.alive = true
        }
    }

}