let ancientLanguage;
let Charlie;
let World

function preload() {
    ancientLanguage = loadFont('./Fonts/Galldr.ttf')
    Charlie = loadImage('./images/Charlie_(SF).webp')
    World = loadImage('./images/world.webp')
}
function setup() {
    createCanvas(1200, 550, WEBGL);
    
}

function draw() {
    background(0);

    push();
    fill('#fc0307');
    textFont(ancientLanguage);
    textSize(36);
    text("The Culmination of Hell and Desire by Mint Pitassy", -575, -230);
    pop();

    push();
    normalMaterial(30, 40, 50);
    translate(-300,-200, -100);
    rotateZ(frameCount * 0.5);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.5);
    plane(300, 150);
    pop();

    push();
    translate(300, 200, 50);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.5);
    ambientLight(100,0,0);
    normalMaterial();
    box(50);
    pop();

    push();
    translate(0,0);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 1.5);
    texture(Charlie);
    sphere(50);
    pop();

    push();
    translate(-300, 100, -50)
    rotateX(frameCount * 5);
    rotateY(frameCount *2);
    rotateZ(frameCount *5);
    ambientLight(255)
    normalMaterial(0,255,0);
    cylinder(30, 100)
    pop();

    push();
    translate(300, -50, 100)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.5);
    rotateZ(frameCount *0.3);
    texture(World);
    torus(50, 100);
    pop();
 
}