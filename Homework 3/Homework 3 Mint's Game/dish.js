// Mr. Pea
var peaX = 250;
var peaY = 250;
var peaDiameter = 40;

//Evil Fresh Fry 1
var FF1X = 275
var FF1Y = 200

//eVIL FRESH FRY 2
var FF2X = 210
var FF2Y = 250

//EVIL TRIANGLE AAAAAH
var ETX = 200
var ETY = 175
var ETRX = 150
var ETRY = 220

//evil food speeding!
var foodSpeedX = 0;
var foodSpeedY = 0;

//oh just mouse stuff
var mousex = 0;
var mousey = 0;


function setup()
    {
        createCanvas(500,500)
        foodSpeedX = random(2,10)
        foodSpeedY = random(5,10)
    }  

function draw()
    {
        background(0);

        //plate OF DOOM!!!
        fill(255)
        circle(250, 250, 300)

        //Mr. Pea
        fill(29, 200, 29)
        circle(peaX, peaY, peaDiameter)
            if (peaDiameter < 60) 
               {peaDiameter += 1;}
             else if (peaDiameter >= 60) 
                     { peaDiameter = 25;}

        // SCARY fresh fries!
        fill(255, 204, 0)

        //fRESH FRY 1
        rect(FF1X, FF1Y, 10, 100)
        FF1X += foodSpeedX;
        if( FF1X >= width)
          {FF1X = 0;}
        FF1Y += foodSpeedY;
        if( FF1Y >= height)
          { FF1Y = 0;}

        // fRESH FRY 2
        rect(FF2X, FF2Y, 10, 100)
        FF2X += foodSpeedX;
        if( FF2X >= width)
          {FF2X = 0;}
        FF2Y += foodSpeedY;
        if( FF2Y >= height)
          { FF2Y = 0;}

        //EVIL hashbrown triangles
        fill(255, 150, 50)
        triangle(ETRX, ETRY, ETX, ETY, 250, 220)

        ETX += foodSpeedX;
        if( ETX >= width)
          {ETX = 0;}
        ETY += foodSpeedY;
        if( ETY >= height)
          { ETY = 0;}
        
        ETRX += foodSpeedX;
          if( ETRX >= width)
            {ETRX = 0;}
          ETRY += foodSpeedY;
          if( ETRY >= height)
            { ETRY = 0;}

        //Title
        fill(255)
        text('HELP GET MR PEA OFF THE PLATE!!!!', 10, 30)

        //Artist Name and Statement
        fill(255)
        text('A Deep Thought Out Horror Piece by Mint Pitassy', 220, 490)

        controlMrPea();
        scaryblueberry();

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

    function scaryblueberry(){
            fill(20, 30, 100);
            ellipse(mousex, mousey, 30, 100);
    }

    }
  

  function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;    
}