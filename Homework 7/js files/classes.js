class mySanta {
    constructor(myFileName, x, y, w, h) {
      this.theImage = loadImage(myFileName);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    
    setX(x) { 
      this.x = x;
    }
  
    updateFlip(flipX) {
      this.flipX = flipX;
    }
  
    draw() {
      this.theImage.resize(this.w/2, this.h/2);
      if (this.flipX) {
        push();
        scale(-1, 1);
        image(this.theImage, -this.x - this.w / 2, this.y);
        pop();
      } 
      
      else {
        image(this.theImage, this.x, this.y);
      }
    }

    checkCollision(x2, y2, w2, h2) {

      if (
          this.x - this.w / 2 < x2 + w2 / 2 &&
          this.x-this.w/4 + w2 / 2 > x2 - this.w / 4 &&
          this.y-this.h/4 - h2 / 4 < y2 + this.h / 4 &&
          this.y-this.h/4 + h2 / 2 > y2 - this.h / 4
  
      ) {
          return true;
      } else {
          return false;
      }
    }
  }

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


class cookie {

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

   }
