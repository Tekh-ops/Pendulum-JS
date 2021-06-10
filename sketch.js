// much better debugging here: https://editor.p5js.org/

let pivotPoint;
let r;
let position;
let angle;
let gravity;
let velocity;
let acceleration;
let damping;
let diameter;

function setup() {
    createCanvas(windowWidth, windowHeight);    // create a canvas with all available space on screen

    let x = width / 2;
    let y = 0;
    pivotPoint = createVector(x, y);
    r = 500;
    position = createVector();                 // this will track the position of the pendulum ball
    angle = PI / 6;                            // starting angle of the pendulums
    gravity = 0.4;

    velocity = 0.0;
    acceleration = 0.0;
    damping = 1;                               // less than 1 will slow the pendulum down
    diameter = 10;
}

function draw() {
    background(250, 250, 250);                  // set the background color (RGB)

    updatePosition();
    display();
}

function updatePosition() {
    acceleration = (-1 * gravity / r) * sin(angle);
    velocity += acceleration;
    velocity *= damping;
    angle += velocity;

    position.set(r * sin(angle), r * cos(angle));
    position.add(pivotPoint);                   // add the pivot point to the pendulum ball's position
}

function display() {
    stroke(50, 50, 50);                         // pendulum arm color
    strokeWeight(2);                            // pendulum arm width
    line(pivotPoint.x, pivotPoint.y, position.x, position.y);

    ellipseMode(CENTER);
    fill(0, 0, 250);                            // pendulum ball color
    ellipse(position.x, position.y, diameter, diameter);
}
