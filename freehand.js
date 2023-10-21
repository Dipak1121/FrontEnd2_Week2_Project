const pencil = document.getElementById("pencil");
let isPencilActive = false;

colorPicker.addEventListener("change",()=>{
    drawingColor = colorPicker.value;
})
function onPencilClick(){
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive;
    if(isPencilActive){
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown);
    }
    else{
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown);
    }
}
pencil.addEventListener("click", onPencilClick)

const circle = document.getElementById("circle");
circle.addEventListener("click",circleDraw);
let isCircleActive = false;
function circleDraw(){
    isCircleActive = !isCircleActive;
    if(isCircleActive){
        circle.classList.toggle("active")
        canvas.addEventListener("mousedown", circleCenter);
    }
    else{
        circle.classList.toggle("active")
        canvas.removeEventListener("mousedown", circleCenter);
    }
}

const rect = document.getElementById("rect");
rect.addEventListener("click",rectDraw);
let isRectActive = false;
function rectDraw(){
    isRectActive = !isRectActive;
    if(isRectActive){
        rect.classList.toggle("active")
        canvas.addEventListener("mousedown", rectStart);
    }
    else{
        rect.classList.toggle("active")
        canvas.removeEventListener("mousedown", rectStart);
    }
}
