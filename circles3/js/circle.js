class Circle {
    constructor(x,y,diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter; 
    }
    draw(){
        circle(this.x, this.y, this.diameter)
    }
}