const canvas ={
    width: 800,
    height: 800
}

const totalCircles = 90; 
const minDiameter = 5; 
const maxDiameter = 120;
const circles = []


//I wanted to add mousePressed to see it stop
let pause = false;
//Needed to be initialized before making the function  
function mousePressed (){
    if (pause ==false) {
        //pauses the loop 
        noLoop();
        pause = true;
    }else{
        loop();
        pause = false;
        //makes the the loop start again
    }
}

function setup(){
    createCanvas(canvas.width, canvas.height);

    for (let i = 0; i < totalCircles; i++) {
        const circleSettings = {
            x: random (1, canvas.width),
            y: random (1, canvas.height),
            diameter: random (minDiameter, maxDiameter)
        }
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter); 
        circles.push(myCircle);
    }
}

function draw(){
    //noLoop();
    noStroke();
    background (0);

    for (let i = 0; i < circles.length; i++){
        circles[i].update();
        circles[i].draw();
    }
    
    translate(400,400)
    for (let j = 0; j < 10; j ++) {
        ellipse(0, 10, 20, 40);
        rotate(PI/5);
      }
    
}