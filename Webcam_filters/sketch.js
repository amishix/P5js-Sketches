var capture;

function setup() {
  createCanvas(400, 300);
  capture = createCapture(VIDEO);
  capture.size(500, 400);
  stepSize_slider = createSlider(10, 18,13,1);
}

function draw() {
  background(220,220,220,255);
  capture.loadPixels();
  
 
  // noprotect
// you can change the stepSize
var stepSize = stepSize_slider.value();
// var stepSize = floor(map(mouseX, 0, width, 5, 20));
for (var x = 0; x < capture.width; x += stepSize) {
  for (var y = 0; y < capture.height; y += stepSize) {
    var index = ((y*capture.width) + x) * 4;
    
    
    // The code for your filter will go here!
    var redVal = capture.pixels[index + 50];
    var greenVal = capture.pixels[index + 20];
    var blueVal = capture.pixels[index + 50];
    
    // you can add or remove the stroke
    strokeWeight(1);
    stroke(25,0,155,70);
    // noStroke();
    
    
    // you can change the colors
    fill(50*redVal, greenVal*2, blueVal*20);
    
    
    // you can change the shape of the 'pixels'
    rectMode(CENTER);
    //rect(x, y, stepSize, stepSize);
    circle(x, y, stepSize, stepSize);
    
  }
}
}