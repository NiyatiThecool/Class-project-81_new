canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="pink";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke;
canvas.addEventListener("mousedown",my_function);
function my_function(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsettop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y); circle(mouse_x , mouse_y);
    }
    function circle(mouse_x , mouse_y){
        ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke;
    }