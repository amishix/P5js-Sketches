function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background("lightpink");
  rotateY(frameCount * 0.02);
  fill("red")
 
  for (let j = 0; j < 50; j++) {
    push();
    for (let i = 0; i < 70; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.01 + j) * 100,
        sin(frameCount * 0.004 + j) * 100,
        sin(frameCount * 0.04 + j) * 100,
        sin(frameCount * 0.0009 + j) * 100,
        sin(frameCount * 0.09 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.09);
      sphere(10, 6, 3);
      pop();
    }
    pop();
  }
}
