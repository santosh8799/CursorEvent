var parent = document.querySelector(".parent")
parent.addEventListener("click",function(data){
   if(data.target.classList.contains("btn")){
    console.log("heii")
   }
})