let evilDishX;
let evilDishY;
let evilDishSpeedX;
let evilDishSpeedY;
let evilDishSize = 50;

let playerDishX;
let playerDishY;
let playerDishSize = 50;

let beefText = "";

function setup() {
  createCanvas(600, 400);
  evilDishX = width / 2;
  evilDishY = height / 2;
  evilDishSpeedX = random(2, 5);
  evilDishSpeedY = random(2, 5);

  playerDishX = width / 2;
  playerDishY = height - 50;
}

function draw() {
  background(220);

  // Move the evil dish
  evilDishX += evilDishSpeedX;
  evilDishY += evilDishSpeedY;

  // Bounce off walls
  if (evilDishX < 0 || evilDishX > width) {
    evilDishSpeedX *= -1;
  }

  if (evilDishY < 0 || evilDishY > height) {
    evilDishSpeedY *= -1;
  }

  // Draw the evil dish
  fill(255, 0, 0); // Red color for the evil dish
  ellipse(evilDishX, evilDishY, evilDishSize, evilDishSize);

  // Draw the player dish
  fill(0, 0, 255); // Blue color for the player dish
  ellipse(playerDishX, playerDishY, playerDishSize, playerDishSize);

  // Display "WHERE'S THE BEEF?!" text
  fill(255, 0, 0); // Red color for the text
  textSize(32);
  textAlign(CENTER, CENTER);
  text(beefText, mouseX, mouseY);

  // Display instructions
  fill(0);
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("Evil Dish Bouncing Everywhere!", width / 2, height - 10);
}

function mouseClicked() {
  // Check if the mouse click is on the player dish
  let d = dist(mouseX, mouseY, playerDishX, playerDishY);
  if (d < playerDishSize / 2) {
    // Set "WHERE'S THE BEEF?!" text to show at mouse position
    beefText = "WHERE'S THE BEEF?!";
  }
}

function keyPressed() {
  // Move the player dish with WASD keys
  if (key === 'a' && playerDishX > playerDishSize / 2) {
    playerDishX -= 10;
  } else if (key === 'd' && playerDishX < width - playerDishSize / 2) {
    playerDishX += 10;
  } else if (key === 'w' && playerDishY > playerDishSize / 2) {
    playerDishY -= 10;
  } else if (key === 's' && playerDishY < height - playerDishSize / 2) {
    playerDishY += 10;
  }
}
