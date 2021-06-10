// much better debugging here: https://editor.p5js.org/

let pivotPoint;                                     // top attachment point
let r;                                              // pendulum arm, r
let position;                                       // (x, y) position of the pendulum ball
let angle;                                          // angle of the swing
let diameter;

function setup() {
    createCanvas(windowWidth, windowHeight);        // create a canvas with all available space on screen

    let x = width / 2;
    let y = 0;
    pivotPoint = createVector(x, y);
    r = 500;
    position = createVector();                      // this will track the position of the pendulum ball 
    angle = PI / 6;                                 // starting angle of the pendulums
    diameter = 10;
}

function draw() {
    background(250, 250, 250);                      // set the background color (RGB)

    position.set(r * sin(angle), r * cos(angle));
    position.add(pivotPoint);

    stroke(50, 50, 50);                             // pendulum arm color
    strokeWeight(2);                                // pendulum arm width
    line(pivotPoint.x, pivotPoint.y, position.x, position.y);

    ellipseMode(CENTER);
    fill(0, 0, 250);                                // pendulum ball color
    ellipse(position.x, position.y, diameter, diameter);
}
