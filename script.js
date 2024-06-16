var body = document.querySelector("body")
var box = document.querySelector(".box")
body.addEventListener("mousemove", function(data){ //mousemove, dblclick,mouseenter,mouseleave,click
    box.style.left = data.x +"px";
    box.style.top = data.y +"px";
})