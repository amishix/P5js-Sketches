function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0,0);
  
  stroke('#d10da3');
  
  strokeWeight(1);
  
  line(mouseX, mouseY, 0,0);
  line(mouseX, mouseY,400,0);
}