mouse_event = "empty"; 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
document.getElementById("radius").value = 40; 
document.getElementById("width").value = 5;
document.getElementById("color").value = "#999950";  
radius = document.getElementById("radius").value; 
color = document.getElementById("color").value;
width = document.getElementById("width").value;  
addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    radius = document.getElementById("radius").value; 
    color = document.getElementById("color").value;
    width = document.getElementById("width").value; 
    mouse_event = "mousedown"; 
    console.log(mouse_event); 
    console.log(radius); 
    console.log(color); 
    console.log(width);  
}
addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouse_event = "mouseup"; 
    console.log(mouse_event)
}
addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouse_event = "mouseleave"; 
    console.log(mouse_event)
}
addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentx = e.clientX - canvas.offsetLeft; 
    currenty = e.clientY - canvas.offsetTop; 
    if(mouse_event=="mousedown") {
        console.log("currentx = " + currentx + " currenty = " + currenty); 
        ctx.beginPath();
        ctx.strokeStyle = color; 
        ctx.lineWidth = width; 
        ctx.arc(currentx,currenty,radius,0,Math.PI*2); 
        ctx.stroke()
    }
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}