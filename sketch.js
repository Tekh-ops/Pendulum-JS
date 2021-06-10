// much better debugging here: https://editor.p5js.org/



let pendulums = [];
let totalPendulums = 30;
let shortestArmLength = 275;
let armDelta = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);            // create a canvas with all available space on screen
    for (let i = 0; i < totalPendulums; i++) {
        let x = width/2;
        let y = 0;
        let pendulumLength = shortestArmLength + (armDelta * i);
        let p = new Pendulum(createVector(x, y), pendulumLength);
        pendulums.push(p);
    }
}

function draw() {
    background(0, 0, 0);                                // set the background color (RGB)

    for (let i = 0; i < pendulums.length; i++) {
        let p = pendulums[i];
        p.updatePosition();
        p.display();
    }
}

class Pendulum {
    constructor(pivotPoint, armLength) {
        this.pivotPoint = pivotPoint.copy();
        this.position = createVector();                 // this will track the position of the pendulum ball
        this.r = armLength;
        this.angle = PI / 6;                            // starting angle of the pendulums
        this.gravity = 0.4;

        this.velocity = 0.0;
        this.acceleration = 0.0;
        this.damping = 1;                               // less than 1 will slow the pendulum down
        this.diameter = 10;                             // pendulum ball diameter
    }

    updatePosition() {
        this.acceleration = (-1 * this.gravity / this.r) * sin(this.angle);
        this.velocity += this.acceleration;
        this.velocity *= this.damping;
        this.angle += this.velocity;

        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle));
        this.position.add(this.pivotPoint);             // add the pivot point to the pendulum ball's position
    }

    display() {
        // stroke(255, 255, 255);                          // pendulum arm color
        // strokeWeight(2);                                // pendulum arm width
        // line(this.pivotPoint.x, this.pivotPoint.y, this.position.x, this.position.y);
        
        ellipseMode(CENTER);
        fill(250, 250, 250);                                // pendulum ball color
        // fill(0, 0, 250);                                // pendulum ball color
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
}