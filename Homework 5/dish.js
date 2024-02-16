// Mr. Pea
var peaX = 250;
var peaY = 250;
var peaDiameter = 40;
var pick;


//Evil Fresh Fry 1
var FF1X = 275
var FF1Y = 200
var pick2;

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
        pick = loadImage("../images/mrpea.png");
        pick2 = loadImage("images/fries.png");
        pick3 = loadImage("images/unnamed.png");
        pick4 = loadImage("images/ortega.png");
        myFont1 = loadFont("Fonts/Galldr.ttf")
        setInterval(changeTime, 1000);
      

    }  

function draw()
    {
        background(0);
        

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
               peaY += 10;
               console.log("s is for going save MR. PEA");
             } else if (keyIsDown(87)) {
                peaY -= 10;
               console.log("w is for way to go, going up, MR. PEA");
             } else if (keyIsDown(65)) {
                peaX -= 10;
               console.log("a is for aMAZING WAY YOU'RE GOING LEFT, MR. PEA");
             } else if (keyIsDown(68)) {
                peaX += 10;
               console.log("d is for DARNTOOTIN! MR. PEA, YOU'RE GOING RIGHT!");
             }
            
           }

 
    }

    function changeTime()

{
    myTime--;
    if(myTime < 0)
    {
        xOrtega += 50;
        myTime = 10;
    }
   
}