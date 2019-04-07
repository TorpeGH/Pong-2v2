var ball;
var player1;
var player2;
var player3;
var player4;
var scoreT1 = 0;
var scoreT2 = 0;

var redbull;
var reverse;
var multi;

var i = 0;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    
    redbull = new REDBULL();
    reverse = new REVERSE();
    multi = new MULTIBALLS();
    
    ball = new Ball();
    ball.setXDir(1);
    ball.setYDir(-1);
    player1 = new Player(20, height/2);
    player2 = new Player(width-20, height/2);
    player3 = new Player(300, height/2);
    player4 = new Player(width-300, height/2);
}

function draw() {
    background(0);
    
    push();
    fill(255);
    stroke(255);
    textSize(20);
    text(scoreT1, (width/2)-50, 50);
    text(scoreT2, (width/2)+35, 50);
    line(width/2, 0, width/2, height);
    pop();
    
    ball.show();
    ball.move();
    player1.show();
    player1.move();
    ball.checkPlayerCollisions(player1);
    player2.show();
    player2.move();
    ball.checkPlayerCollisions(player2);
    player3.show();
    player3.move();
    ball.checkPlayerCollisions(player3);
    player4.show();
    player4.move();
    ball.checkPlayerCollisions(player4);
    
    if (redbull.alive){
        redbull.show();
        ball.checkREDBULLCollisions(this.redbull);
    }else redbull.frankenstein();
    
    if (reverse.alive){
        reverse.show();
        ball.checkREVERSECollisions(this.reverse);
    }else reverse.frankenstein();

    if (multi.alive){
        multi.show();
        ball.checkMULTIBALLSCollisions(this.multi);
    }else multi.frankenstein();
    
    if (multi.ballsAlive > 0){
        multi.showBalls();
        for (i = 0; i < 4; i++) {
            checkMULTIC(i);           
        }
        checkMULTIScore();
    }
    
    checkScore();
}

/*function keyReleased() {
    if (key === 'w' || key === 's')
        player1.setDir(0);
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW)
        player2.setDir(0);
}*/

function checkScore() {
    var c = ball.checkLimits();
    if(c == 1)
        scoreT2++;
    if(c == 2)
        scoreT1++;    
}

function checkMULTIC(b) {
    multi.balls[b].checkPlayerCollisions(player1);
    multi.balls[b].checkPlayerCollisions(player2);
    multi.balls[b].checkPlayerCollisions(player3);
    multi.balls[b].checkPlayerCollisions(player4);
}

function checkMULTIScore() {
    for (i = 0; i < 4; i++) {
        var c = multi.balls[i].checkLimits();
        if(c == 1)
            scoreT2++;
        if(c == 2)
            scoreT1++;   
    }     
}

function keyTyped() {
    /* PLAYER 1 */    
    if (key === 'q' || key === 'Q')
        player1.setDir(-1);
    else if (key === 'a'  || key === 'A')
        player1.setDir(1);
    
     /* PLAYER 3 */    
    if (key === 't'  || key === 'T')
        player3.setDir(-1);
    else if (key === 'g'  || key === 'G')
        player3.setDir(1);
    
       /* PLAYER 4 */    
    if (key === 'p'  || key === 'P')
        player4.setDir(-1);
    else if (key === 'l'  || key === 'L')
        player4.setDir(1);    
} 

function keyPressed() {
    /* PLAYER 2 */    
    if (keyCode === UP_ARROW)
        player2.setDir(-1);
    else if (keyCode === DOWN_ARROW)
        player2.setDir(1);
} 
