let slider;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER)
    angleMode(DEGREES)

    slider = createSlider(0,200,0)
    slider.position(20,20)
  }

  function element(depth) {
    //fill(depth * 40,0-depth *40,0,50)
    fill("red")
    circle (0,0,50)

    if (depth > 1) {
    push()
    rotate(slider.value())
    scale(0.9)
    line (0,0,0,60)
    translate(0,60)
    element(depth-1)
    pop()

    push()
    rotate(-slider.value())
    scale(0.9)
    line (0,0,0,60)
    translate(0,60)
    element(depth-1)
    pop()
  }
    
  }

  function draw(){

    background(220)
    push()
    translate(width/2,height/2)
    element(10)
    pop()

    stroke(255)
    fill(0)
    text(slider.value(),width/2,20)
  }