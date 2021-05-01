class Orbiter {
    constructor(atude, f, r) {
        this.f = f;
        this.atude = atude;
        this.r = r
        this.x;
        this.y;
        this.refX;
        this.refY;
    }

    orbit(refX, refY) {
        this.refX = refX;
        this.refY = refY;
        this.x = refX + this.atude * cos(this.f * frameCount);
        this.y = refY + this.atude * sin(this.f * frameCount);
    }
    // 67, 97, 238 250, 243, 221
    render(r = 250, g = 243, b = 221) {
        stroke(r, g, b);
        strokeWeight(3)
        line(this.refX, this.refY, this.x, this.y)
        fill(r, g, b);
        ellipse(this.x, this.y, this.r - 2)
        noFill();
        strokeWeight(0.7);
        // stroke(255);
        // ellipse(this.x, this.y, this.atude)
        // ellipse(width/4, this.y, this.r)

    }
}