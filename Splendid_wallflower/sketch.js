
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  
  //yin side base
  fill(255);
  arc (200, 200, 250, 250, HALF_PI, PI + HALF_PI);
  
  
  //yang side base
  fill(0);
  arc(200, 200, 250, 250, PI + HALF_PI, HALF_PI);
  
  
  //yin layered ellipses
  fill(255)
  ellipse(195, 150, 150);
  fill(0)
  ellipse(195, 150, 40)
  
  
  //yang layered ellipses
  ellipse(205, 250, 150);
  fill(255);
  ellipse(205, 250, 40);
  
  
  text(mouseX + ', ' + mouseY, 20, 20);
} 

  
  
    

  