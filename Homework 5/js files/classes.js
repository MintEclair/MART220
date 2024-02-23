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
