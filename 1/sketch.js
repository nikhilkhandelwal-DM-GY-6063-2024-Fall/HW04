let colors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Define the four colors to be used
  colors = [
    color(255, 0, 0), // Red
    color(0, 255, 0), // Green
    color(0, 0, 255), // Blue
    color(255, 165, 0) // Orange
  ];

  let numLines = 200; // Number of lines to be drawn

  for (let i = 0; i < numLines; i++) {
    stroke(random(colors));
    
    // Set a random stroke weight for each line
    strokeWeight(random(1, 5));
    
    // Randomize the start and end points for the lines
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);

    // Draw the line
    line(x1, y1, x2, y2);
  }
}

function draw() {
}
