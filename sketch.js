

var gravity;
var fireworks = [];

function setup() {
  createCanvas(600, 400);
  gravity = createVector(0, 0.2);
  for (var i = 0; i < 5; ++i)
    fireworks.push(new FireWork());
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  background(0,25);
  if (random(1) < 0.02) {
    fireworks.push(new FireWork());
  }
  for (var i = fireworks.length - 1; i >= 0; --i) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}