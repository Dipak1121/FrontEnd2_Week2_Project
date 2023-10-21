const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext("2d");
const colorPicker = document.getElementById("color-picker");


let previousPosition = null;
let drawingColor = "red";

function onMouseDown(event){
    previousPosition = [event.clientX, event.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 2;
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(event){
    let currentPosition = [event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}
function onMouseUp(event){
    canvas.removeEventListener("mousemove", onMouseMove);
}

let circleCenterPoint = null;
 let center = null;
function circleCenter(event){
    canvas.addEventListener("mouseup", circleEnd);
    center = [event.clientX, event.clientY];
    circleCenterPoint = event.clientX;
    c.strokeStyle = drawingColor;
    c.lineWidth = 4;
}
function circleEnd(event){
    let circleEndPoint = event.clientX;
    let radius = Math.abs(circleCenterPoint - circleEndPoint);
    let end = [event.clientX, event.clientY];
    c.beginPath();
    c.arc(...center, radius, 0, 2 * Math.PI);
    c.stroke();
    c.closePath();
    canvas.removeEventListener("mouseup", circleEnd);
}

let startPoint = null;
function rectStart(event){
    canvas.addEventListener("mouseup", rectEnd);
    startPoint = [event.clientX, event.clientY];  
}
function rectEnd(event){
    c.strokeStyle = drawingColor;
    c.lineWidth = 4;
    let width = Math.abs(startPoint[0] - event.clientX);
    let height = Math.abs(startPoint[1] - event.clientY);
    c.strokeRect(...startPoint, width, height);
    canvas.removeEventListener("mouseup", rectEnd);
}