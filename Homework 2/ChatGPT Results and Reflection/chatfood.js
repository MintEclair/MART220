function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
  
    // Draw taco shell
    fill(222, 184, 135);
    arc(200, 300, 300, 200, PI, 0, CHORD);
  
    // Draw taco filling
    fill(255, 255, 153);
    ellipse(200, 300, 250, 150);
  
    // Draw taco toppings
    drawToppings(5, 200, 300, 125);
  }
  
  function drawToppings(count, x, y, radius) {
    for (let i = 0; i < count; i++) {
      let angle = map(i, 0, count, PI, 0);
      let xpos = x + cos(angle) * radius;
      let ypos = y - sin(angle) * radius;
  
      // Draw topping color (random colors for variety)
      fill(random(255), random(255), random(255));
      ellipse(xpos, ypos, random(20, 40), random(10, 30));
    }
  }
  