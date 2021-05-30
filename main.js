var mouseEvent = "empty";
var mouse_x_old;
var mouse_y_old;

var canvas = document.getElementById("canvasToDraw");

ctx = canvas.getContext("2d");

color = "black";
Width = "1";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("Color").value;
    Width = document.getElementById("Thickness").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    var mouse_x_current = e.clientX-canvas.offsetLeft;
    var mouse_y_current = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width;
        
        console.log("Last Coordinates Of X & Y ="+mouse_x_old+", "+mouse_y_old);
        ctx.moveTo(mouse_x_old, mouse_y_old) ;
        console.log("Cureent Coordinates Of X & Y ="+mouse_x_current+", "+mouse_y_current);
        ctx.lineTo(mouse_x_current, mouse_y_current);
        ctx.stroke();
      }

      mouse_x_old = mouse_x_current;
      mouse_y_old = mouse_y_current;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
        mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
        mouseEvent = "mouseleave";
}

function Clear(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



