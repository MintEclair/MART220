
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
var goodCookies = [];
var badCookies = [];



//scoring and health
var score = 0;
var health = 310;

//explosion!
const particles = [];
let isExplosion = false;


function preload() {
   idlePaths = loadStrings("./textfiles/idle.txt");
   walkPaths = loadStrings("./textfiles/walk.txt");
   
}

function setup() {
  createCanvas(1300,600);
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
  goodCookieRandomX = random(100, width-100)
  goodCookieRandomY = random(100, height-100)

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
  for (let i = 0; i < 5; i++) {
    let goodCookieRandomX = random(100, width-100);
    let goodCookieRandomY = random(100, height-100);
    let goodCookie = createSprite(goodCookieRandomX, goodCookieRandomY, 100, 100, 'static');
    goodCookie.img = './images/cookies.jpg';
    goodCookie.scale = 0.5;
    goodCookie.diameter = 100;
    goodCookies.push(goodCookie);
  }

  for (let i = 0; i < 5; i++) {
    let badCookieRandomX = random(100, width-100);
    let badCookieRandomY = random(100, height-100);
    let badCookie = createSprite(badCookieRandomX, badCookieRandomY, 100, 100, 'static');
    badCookie.img = './images/evilcookie.png';
    badCookie.scale = 0.5;
    badCookie.diameter = 100;
    badCookies.push(badCookie);
  }

}

// display all the frames using the draw function as a loop
function draw() 
{

    background(0);
    
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');  
        handleCollisions();
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        handleCollisions();
    }
    

    else if(kb.pressing('w')){
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 
        handleCollisions();
    }

    else if(kb.pressing('s')){
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        handleCollisions();
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


    function handleCollisions() {
        if(myAnimation.isColliding(metapod)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        else {
            for (let i = 0; i < badCookies.length; i++) {
                if(myAnimation.isColliding(badCookies[i])) {
                    badCookies[i].remove();
                    health -= 62;
                    createNewBadCookie();
                    return; 
                }
            }
            for (let i = 0; i < goodCookies.length; i++) {
                if(myAnimation.isColliding(goodCookies[i])) {
                    goodCookies[i].remove();
                    score++;
                    //createNewGoodCookie();
                    return; 
                }
            }
        }
    }

    function createNewBadCookie(){
        let badCookieRandomX = random(50, width-100);
        let badCookieRandomY = random(50, height-300);
        let badCookie = createSprite(badCookieRandomX, badCookieRandomY, 100, 100, 'static');
        badCookie.img = './images/evilcookie.png';
        badCookie.scale = 0.5;
        badCookie.diameter = 100;
        badCookies.push(badCookie);
    }

   function createNewGoodCookie(){
    let goodCookieRandomX = random(50, width-100);
    let goodCookieRandomY = random(50, height-300);
    let goodCookie = createSprite(goodCookieRandomX, goodCookieRandomY, 100, 100, 'static');
    goodCookie.img = './images/cookies.jpg';
    goodCookie.scale = 0.5;
    goodCookie.diameter = 100;
    goodCookies.push(goodCookie);
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
         for (var i = 0; i < badCookies.length; i++) {
            badCookies[i].remove();
        }
        for (var i = 0; i < goodCookies.length; i++) {
            goodCookies[i].remove();
        }
     }

    if(score >= 5){

        fill(0)
        rect(0,0, 5000, 5000)

        fill(0, 255, 0)
        textSize(100);
        textFont("Times New Roman");
        text("YOU WIN", 400, 300);
        metapod.remove();
        metapod2.remove();
        metapod3.remove();
        for (var i = 0; i < badCookies.length; i++) {
            badCookies[i].remove();
        }
        for (var i = 0; i < goodCookies.length; i++) {
            goodCookies[i].remove();
        }
        explosion();
        explosion2();

    }

}




function explosion()
{
   
    for (let i = 0; i < 10; i++) {
        let p = new Particle(100, 500);
        particles.push(p);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
          
          particles.splice(i, 1);
        }
      }
}

function explosion2()
{
   
    for (let i = 0; i < 10; i++) {
        let p = new Particle(1000, 500);
        particles.push(p);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
          
          particles.splice(i, 1);
        }
      }
}



