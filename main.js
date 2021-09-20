mycanvas_2.addEventListener("mousedown, my_mousedown");

function my_mousedown(e)
mouseEvent = mouseDown

mycanvas_2.addEventListener("mouseLeave, my_mouseLeave");

function my_mouseLeave(e)
mouseEvent = mouseLeave

mycanvas_2.addEventListener("mouseUp, my_mouseUp");

function my_mouseUp(e)
mouseEvent = mouseUp

mycanvas_2.addEventListener("mousemove, my_mousemove");

function my_mousemove(e)

current_position_of_mouse_y = e.clientY - Canvas.offSetTop
current_position_of_mouse_x = e.clientX - Canvas.offSetLeft

if(mouseEvent == mouseDown){
    ctx.beginPath();
    ctx.strokeStyle = colour;
ctx.lineWidth = Width_of_line


console.log("Last position of x and y cordinates =")
console.log("x = " +last_position_of_x + "y = " +last_position_of_x)
ctx.moveTo (last_position_of_x, last_position_of_y)

console.log("Current position of x and y cordinates =")
console.log("x = " +current_position_of_x + "y = " +current_position_of_x)
ctx.stroke()
}

last_position_of_x = current_position_of_mouse_x
last_position_of_y = current_position_of_mouse_y

