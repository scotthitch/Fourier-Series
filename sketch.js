// let n = 1;
let a = 101;
let orbiters = [];
let atudeCoeff = 90;
let fCoeff = 1 / 70;
let pointsArr = [];
let yVals = [];
let origin;
let radius = 8;
let speed = 2;
let speedSlider;
let pie = Math.PI;
// let neg1 = -1;
let xshift;
let aChoose = 17;
let aPrev = aChoose;
let maxLen = 700;

function setup() {
    createCanvas(1200, 600);
    speedSlider = createSlider(1, 4, speed, 0);
    aSlider = createSlider(1, a, aChoose, 2);
    xshift = 600;
    origin = createVector(width / 5, height / 2);
    // orbiters.push(new Orbiter(atude, 1, radius))
    for (let n = 1; n <= a; n++) {
        atude = (1 - Math.pow(-1, n)) / n;
        f = n;
        orbiters.push(new Orbiter(atude * atudeCoeff, f * fCoeff, radius))
    }
}

function draw() {
    background(247, 37, 133);

    speed = speedSlider.value();
    aChoose = aSlider.value();
    orbiters[0].orbit(origin.x, origin.y);
    orbiters[0].render();
    fill(250, 243, 221)
    ellipse(origin.x, origin.y, radius);

    for (let i = 1; i < a; i++) {
        orbiters[i].orbit(orbiters[i - 1].x, orbiters[i - 1].y);
        if (i <= aChoose) {
            orbiters[i].render();

        }
    }

    orbiters[aChoose - 1].render(250, 243, 221)
    finalY = orbiters[aChoose - 1].y
    yVals.unshift(finalY)
    strokeWeight(1)
    stroke(250, 243, 221);
    line(orbiters[aChoose - 1].x, finalY, xshift, finalY)
    beginShape();
    noFill();
    for (let j = 0; j < yVals.length; j++) {
        strokeWeight(4)
        vertex(speed * j + xshift, yVals[j])
    }

    endShape();
    strokeWeight(0.4)
    ellipse(origin.x, origin.y, orbiters[0].atude * 2)
    for (let i = 1; i < aChoose - 1; i++) {
        // fill(255);
        ellipse(orbiters[i].x, orbiters[i].y, orbiters[i + 1].atude * 2);
        // console.log(orbiters[i+1].atude)
    }

    if (yVals.length > maxLen) {
        yVals = yVals.slice(0, -1);
    }

    if (aChoose != aPrev) {
        // changeA();
        yVals = []
        aPrev = aChoose
    }
}
