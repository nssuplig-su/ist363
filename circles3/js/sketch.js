// const = constant 
const canvas = {
    width: 800,
    height: 800
}

const totalCircles = 100;
const circles = [];

const minDiameter = 10;
const maxDiameter = 100; 

//setup only once
function setup() {
    createCanvas (canvas,width, canvas.height);
    background (0);

    //counter, condition, increment
    for (let i = 0; i < totalCircles; i++)  {
        const circleSettings = {
            x: random (1, canvas.width),
            y: random (1, canvas.height),
            diameter: random (minDiameter, maxDiameter)
        }
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);
        circles.push(myCircle)
    }
}

function draw() {
    noLoop()
    for (let i = 0; i < circles.length; i++){
        circles[i].update();
        circles[i].draw();
    }
}