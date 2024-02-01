class Circle {
    constructor (x,y,diameter) {
        this.x = x;
        this.y = y; 
        this.diameter = diameter; 
        this.isRising = true;
        this.color = null;
        this.colorFrom = color (211,211,211);
        this.colorTo  = color (128,0,32);
        this.lerpAmount = 0;
    }

    draw () {
        fill(this.color)
        circle(this.x, this.y, this.diameter);
    }

    update() {
        // initial value, min, max, outputMin, outputMax
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1)

        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount)
        if (this.isRising) {
            this.y -=1;
        } else {
            this.y *=1.15; 
        }
        if (this.y <= (this.diameter / 2)) {
            this.isRising = false;
        }
        if (this.y >= (canvas.height - this.diameter / 2)){
            this.isRising = true;
        }
         // if the circle state is growing, increase the diameter
         if (this.isGrowing) {
            this.diameter += 1;
        } else {
            // otherwise, decrease the diameter
            this.diameter -= 1;
        }
        // if the diameter is greater than the max diameter, stop growing
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 
        // if the diameter is less than the min diameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
    
    }
}


