// Mr. Pea
var peaX = 250;
var peaY = 250;
var peaDiameter = 40;
var pick;

//Santa Claus
var SantaX = 100
var SantaY = 200
var SantaSpeedX, SantaSpeedY
var SantaWalkCycle = [];
var i = 0
var flipX = false;
var SantaObject; 
class mySanta {
  constructor(myFileName, x, y, w, h) {
    this.theImage = loadImage(myFileName);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.flipX = false;
  }

  setFlipX(flipX) {
    this.flipX = flipX;
  }

  setX(x) {
    this.x = x;
  }

  draw() {
    if (this.flipX) {
      push();
      scale(-1, 1);
      image(this.theImage, -this.x - this.w, this.y);
      pop();
    } else {
      image(this.theImage, this.x, this.y, this.w, this.h);
    }
  }
}

//Evil Fresh Fry 1
var FF1X = 275
var FF1Y = 200
var pick2;


//time to learn, TOMATO!! 
class tomato{
 
 constructor(myFileName, x, y, w, h)
 {

     this.characterImage = loadImage(myFileName);
     this.x = x;
     this.y = y; 
     this.w = w;
     this.h = h;
 }
 
 draw()
 {

     image(this.characterImage, this.x, this.y);
 }

 move()
 {
  this.x += foodSpeedX3;
        if( this.x >= width-100 || this.x <= 0)
          {foodSpeedX3 *=-1;}
        this.y += foodSpeedY;
        if( this.y >= height-100 || this.y <=0)
          { foodSpeedY3 *=-1;}
 }

}

var tomatox;
var randomX;
var randomY;

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
        pick = loadImage("../images/mrpea.png");
        pick2 = loadImage("images/fries.png");
        pick3 = loadImage("images/unnamed.png");
        pick4 = loadImage("images/ortega.png");
        myFont1 = loadFont("Fonts/Galldr.ttf")
        setInterval(changeTime, 100);

        for (var k = 0; k < 13; k++)
        {
            SantaWalkCycle[k] = new mySanta("images/Walk (" + (k+1) + ").png", SantaX, SantaY, 680, 472);;
       
        }


        for (var i = 0; i < SantaWalkCycle.length; i++)
        {

        }
        
        tomatox = new tomato("images/tomato.png", randomX, randomY, 100, 100);


    }  

function draw()
    {
        background(0);

        SantaWalkCycle[i].draw();
      
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

        controlMrPea();

        function controlMrPea(){
            if (keyIsDown(83)) {
               SantaY += 10;
               console.log("s is for going save MR. PEA");
             } 
             
             else if (keyIsDown(87)) {
                SantaY -= 10;
               console.log("w is for way to go, going up, MR. PEA");
             } 
             
             else if (keyIsDown(65)) {
               SantaX -= 10;
               console.log("a is for aMAZING WAY YOU'RE GOING LEFT, MR. PEA");
               flipX = true;
             }
             
             else if (keyIsDown(68)) {
               SantaX += 10;
               console.log("d is for DARNTOOTIN! MR. PEA, YOU'RE GOING RIGHT!");
                flipX = false;
               }
             }
            
           }

 

    function changeTime()

{
    i++;
    if (i > SantaWalkCycle.length - 1){
      i = 0;
    }
    myTime--;
    if(myTime < 0)
    {
        xOrtega += 50;
        myTime = 10;
    }
   
}