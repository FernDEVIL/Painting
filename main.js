canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouse_event = "empty";
var position_x, position_y;
color = "blue";
width = 5;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    c_position_x = e.clientX - canvas.offsetLeft;
    c_position_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + position_x + "y = " + position_y);
        ctx.moveTo(position_x, position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + c_position_x + "y = " + c_position_y);
        ctx.lineTo(c_position_x, c_position_y);
        ctx.stroke();
    }

    position_x = c_position_x;
    position_y = c_position_y;
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}