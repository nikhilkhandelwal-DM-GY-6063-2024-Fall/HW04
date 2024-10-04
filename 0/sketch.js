function setup() {
  createCanvas(windowWidth, windowHeight);
  background(235,214,200)

  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      
      // Add randomness to the fill color
      let r = random(0,255);
      let g = random(0,255);
      let b = random(0,255);
      fill(r, g, b);
      
      // Randomly vary the size of the circles
      let randomSizeBig = random(20,80);
      
      // Vary the position slightly to break the grid pattern
      let offsetX = random(-30,30);
      let offsetY = random(-30,30);
      
      // Draw the big circle with random variations
      ellipse(x + offsetX, y + offsetY, randomSizeBig);
    }
  }
}

function draw() {
}
