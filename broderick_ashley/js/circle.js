class Circle {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.isGrowing = false;
    this.color = null;
    this.colorFrom = color("pink");
    this.colorTo = color("red");
    this.lerpAmount = 5;
    this.isRising = true;
  }
  draw() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
  update() {
    // lerpAmount produces a percentage or value between 0 and 1 (e.g. 0.59 = 59%)
    this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1);

    // lerpColor() returns a color between two colors at a specific increment between 0 and 1 (0% and 100%)
    this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

    // if the circle is growing, increase the diameter a random amount between (1 and 5)
    if (this.isGrowing) {
      this.diameter += random(1, 5);
    } else {
      // otherwise, decrease the diameter by .5
      this.diameter -= 0.5;
    }
    if (this.isRising) {
      this.y -= 1;
    } else {
      this.y *= 1.15;
    }
    if (this.y <= this.diameter / 2) {
      this.isRising = false;
    }
    if (this.y >= canvas.height - this.diameter / 2) {
      this.isRising = true;
    }

    // if the diameter is greater than the maxDiameter, stop growing
    if (this.diameter > maxDiameter) {
      this.isGrowing = false;
    }

    // if the diameter is less than the minDiameter, start growing
    if (this.diameter < minDiameter) {
      this.isGrowing = true;
    }
    // Check for collision with other circles
    for (let i = 0; i < circles.length; i++) {
      if (this !== circles[i]) {
        const distanceX = this.x - circles[i].x;
        const distanceY = this.y - circles[i].y;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        if (distance < this.radius + circles[i].radius) {
          // Collision detected, change direction
          const tempDx = this.dx;
          const tempDy = this.dy;

          this.dx = circles[i].dx;
          this.dy = circles[i].dy;

          circles[i].dx = tempDx;
          circles[i].dy = tempDy;
        }
      }
    }
  }
}
