// Mr. Pea
var peaX = 250;
var peaY = 250;
var peaDiameter = 40;
var pick;

//Santa Claus
var SantaX = 100
var SantaY = 200
var SantaSpeedX, SantaSpeedY
var i = 0
var flipX = false;
var SantaObject; 

//Evil Fresh Fry 1
var FF1X = 275
var FF1Y = 200
var pick2;


var tomatox;
var randomX;
var randomY;

//santa's cookies
var cookieRandomX;
var cookieRandomY;
var objectOfCookie;
var score = 0;

/*eVIL FRESH FRY 2
var FF2X = 210
var FF2Y = 250 */

//EVIL TRIANGLE AAAAAH hashbrown
var ETX = 200
var ETY = 175
var ETRX = 150
var ETRY = 220
var pick3;

//Jenna Ortega???
var pick4;
var xOrtega = 100, yOrtega = 100

//evil food speeding!
var foodSpeedX 
var foodSpeedY 
var foodSpeedX2
var foodSpeedY2
var foodSpeedX3
var foodSpeedY3

//Oyasumi O-YA-SU-MI I KNOW THAT IT'S HARD TO DOOOOOOOOO
var myTime = 10

//duh foooonts
var myFont1;

//strings like spaghetti 
var idleStrings = [];
var idleArray = [];
var walkStrings = [];
var walkArray = [];


function preload()
{
  idleStrings = loadStrings("../textfiles/idle.txt")
  walkStrings = loadStrings('../textfiles/walk.txt')
}


function setup()
    {
        createCanvas(1000,500)
        foodSpeedX = random(2,10)
        foodSpeedY = random(5,10)
        foodSpeedX2 = random(1,15)
        foodSpeedY2 = random(4,20)
        foodSpeedX3 = random(3,15)
        foodspeedY3 = random(2,9)
        randomX = random(10, 400)
        randomY = random(10, 400)
        cookieRandomX = random(10, 400)
        cookieRandomY = random(10, 400)
        pick = loadImage("../images/mrpea.png");
        pick2 = loadImage("images/fries.png");
        pick3 = loadImage("images/unnamed.png");
        pick4 = loadImage("images/ortega.png");
        myFont1 = loadFont("Fonts/Galldr.ttf")
        setInterval(changeTime, 100);
        setInterval(timer, 1000);

        for (let k = 0; k < idleStrings.length; k++) {
          idleArray.push(new mySanta(idleStrings[k], 100, 200, 340, 236));
        }


        for (let k = 0; k < walkStrings.length; k++) {
          walkArray.push(new mySanta(walkStrings[k], 100, 200, 340, 236));
        }
        
        tomatox = new tomato("images/tomato.png", randomX, randomY, 100, 100);
        objectOfCookie = new cookie("images/cookies.jpg", cookieRandomX, cookieRandomY, 150, 100)


    }  

function draw(){
        background(0);

        if (objectOfCookie != null) {
          objectOfCookie.draw();
      }
        
        tomatox.draw();
        tomatox.move();

        /*plate OF DOOM!!!
        fill(255)
        circle(250, 250, 300)*/

        //Mr. Pea
        image(pick, peaX, peaY);
      
      
        // SCARY fresh fries!
        image(pick2, FF1X, FF1Y)
        FF1X += foodSpeedX;
        if( FF1X >= width-100 || FF1X <= 0)
          {foodSpeedX *=-1;}
        FF1Y += foodSpeedY;
        if( FF1Y >= height-100 || FF1Y <=0)
          { foodSpeedY *=-1;}

        
        //EVIL hashbrown triangles
        image(pick3, ETX, ETY)

        ETX += foodSpeedX2;
        if( ETX >= width-100 || ETX <= 0)
          {foodSpeedX2 *=-1;}
        ETY += foodSpeedY2;
        if( FF1Y >= height-100 || ETY <=0)
          { foodSpeedY2 *=-1;}
        

        //Jenna Ortega?!?!?
        image(pick4, xOrtega, yOrtega)
        if (xOrtega >= width)
        {
          xOrtega = 0;
        }

        //Close. Your. Eyes. You'll beeeee here soon-
        textSize(35)
        textFont("Times New Roman")
        text(myTime + ' seconds', 800, 50)

        //Title
        fill(255, 0, 0)
        textSize(20)
        textFont(myFont1)
        text('SAVE JENNA ORTEGA!!!!', 10, 30)

        //Artist Name and Statement
        fill(255)
        textSize(12)
        textFont("Comic Sans MS")
        text('A Deep Thought Out Horror Piece by Mint Pitassy', 680, 490)

        fill(255);
        textSize(35);
        textFont("Times New Roman");
        text("Score: " + score, 650, 50);


        if (keyIsPressed) {
          if (key == "w") {
              SantaY -= 5;
          }
          if (key == "s") {
              SantaY += 5;
          }
          if (key == "a") {
              SantaX -= 5;
              flipX = true;
          }
          if (key == "d") {
              SantaX += 5;
              flipX = false;
          }
  
          for (var ii = 0; ii < idleArray.length; ii++) {
              idleArray[ii].setX(SantaX);
              idleArray[ii].updateFlip(flipX);
              walkArray[ii].setX(SantaX);
              walkArray[ii].updateFlip(flipX);
              idleArray[ii].y = SantaY;
              walkArray[ii].y = SantaY;

              if (objectOfCookie != null) {
                if (walkArray[ii].checkCollision(objectOfCookie.x, objectOfCookie.y, objectOfCookie.w, objectOfCookie.h)) {
                    objectOfCookie = null;
                    score++;
                }
            }

  
          }
          SantaObject = walkArray;
      }
      else {
          SantaObject = idleArray;     
      }

      SantaObject[i].draw(); 
            
}

 

    function changeTime()

{
    i++;
    if (i > idleArray.length - 1){
      i = 0;
    }
   
}

function timer()
{
  myTime--;
  if(myTime < 0)
  {
      xOrtega += 50;
      myTime = 10;
      createNewCookie();
  }
 
  function createNewCookie(){
    objectOfCookie = new cookie("images/cookies.jpg", random(50, width-100), random(50, height-100), 150, 100)
  }

}