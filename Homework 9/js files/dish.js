
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var metapod;

//metapod randoms
var metapodRandomX1;
var metapodRandomY1;
var metapodRandomX2;
var metapodRandomY2;
var metapodRandomX3;
var metapodRandomY3;

//cookies
var goodCookie;
var badCookie;
var goodCookieRandomX;
var goodCookieRandomY;
var badCookieRandomX;
var badCookieRandomY;

//scoring and health
var score = 0;
var health = 310;


function preload() {
   idlePaths = loadStrings("./textfiles/idle.txt");
   walkPaths = loadStrings("./textfiles/walk.txt");
   
}

function setup() {
  createCanvas(1600,600);
  myAnimation = new animationImage( 200, 200, 150, 150);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('walk', walkPaths);

  //randoms
  metapodRandomX1 = random(100, 500)
  metapodRandomX2 = random(600, 1000)
  metapodRandomX3 = random(1100, 1200)
  metapodRandomY1 = random(100, 500)
  metapodRandomY2 = random(100, 500)
  metapodRandomY3 = random(100, 500)
  goodCookieRandomX = random(100, 1300)
  goodCookieRandomY = random(100, 400)
  badCookieRandomX = random(100, 1300)
  badCookieRandomY = random(100, 400)

  //metapods
  metapod = createSprite(metapodRandomX1, metapodRandomY1, 100,100, 'static');
  metapod.img = "./images/metapod.png";
  metapod.scale = 0.30;
  metapod.diameter = 150;

  metapod2 = createSprite(metapodRandomX2, metapodRandomY2, 100, 100, 'static');
  metapod2.img = './images/metapod.png';
  metapod2.scale = 0.2;
  metapod2.diameter = 100;

  metapod3 = createSprite(metapodRandomX3, metapodRandomY3, 100, 100, 'static');
  metapod3.img = './images/metapod.png';
  metapod3.scale = 0.5;
  metapod3.diameter = 200;

  //cookies
  goodCookie = createSprite(goodCookieRandomX, goodCookieRandomY, 100, 100, 'static');
  goodCookie.img = './images/cookies.jpg';
  goodCookie.scale = 0.5;
  goodCookie.diameter = 100;

  badCookie = createSprite(badCookieRandomX, badCookieRandomY, 100, 100, 'static');
  badCookie.img = './images/evilcookie.png';
  badCookie.scale = 0.5;
  badCookie.diameter = 100;

}

// display all the frames using the draw function as a loop
function draw() 
{

    background(0);
    
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
        if(myAnimation.isColliding(metapod))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }
        else if(myAnimation.isColliding(goodCookie))
        {
            goodCookie.remove();
            score++;
            createNewGoodCookie();
            
        }
        else if(myAnimation.isColliding(badCookie)){
            badCookie.remove();
            health -= 62;
            createNewBadCookie();
        }   
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');   
             
    }
    

    else if(kb.pressing('w')){
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 
    }

    else if(kb.pressing('s')){
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }

    else if(myAnimation.isColliding(goodCookie))
        {
            goodCookie.remove();
            score++;
            createNewGoodCookie();
        }

    else if(myAnimation.isColliding(badCookie)){
            badCookie.remove();
            health -= 62;
            createNewBadCookie();
        }   
    else
    {
        myAnimation.drawAnimation('idle');
    } 

    metapod.debug = mouseIsPressed;

    fill(255);
    textSize(35);
    textFont("Times New Roman");
    text("Score: " + score, 650, 50);

    fill(0,0,255);
    textSize(35);
    textFont("Times New Roman");
    text("Health:", 200, 50);

    fill(255,0,0);
    rect(310, 10, 310, 50);

    fill(0, 255, 0);
    rect(310, 10, health, 50);

    function createNewBadCookie(){
        badCookie = createSprite(random(50, width-100), random(50, height-300), 100, 100, 'static');
        badCookie.img = './images/evilcookie.png';
        badCookie.scale = 0.5;
        badCookie.diameter = 100;

    }

    function createNewGoodCookie(){
        goodCookie = createSprite(random(50, width-100), random(50, height-300), 100, 100, 'static');
        goodCookie.img = './images/cookies.jpg';
        goodCookie.scale = 0.5;
        goodCookie.diameter = 100;
    }
    if(health <= 0){
         fill(0)
         rect(0, 0, 5000, 5000)
     
         fill(255, 0, 0)
         textSize(100);
         textFont("Times New Roman");
         text("YOU LOSE", 400, 300);
         metapod.remove();
         metapod2.remove();
         metapod3.remove();
         badCookie.remove();
         goodCookie.remove();
     }

    if(score >= 10){

        fill(0)
        rect(0,0, 5000, 5000)

        fill(0, 255, 0)
        textSize(100);
        textFont("Times New Roman");
        text("YOU WIN", 400, 300);
        metapod.remove();
        metapod2.remove();
        metapod3.remove();
        badCookie.remove();
        goodCookie.remove();

    }

}






