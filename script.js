let output = document.getElementById("output");
let buttons = document.getElementsByTagName("th");
let equalto = document.getElementById("equal_to");
let clear = document.getElementById("clear");
let moon=document.getElementById("moon");
let sun=document.getElementById("sun");
let calScreen = document.querySelector(".cal_screen"); 


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", function () {
        buttons[i].style.backgroundColor = "#144c24";
        buttons[i].style.color = "white";
    });

    buttons[i].addEventListener("mouseup", function () {
        buttons[i].style.backgroundColor = "";
        buttons[i].style.color = "";
    });

    buttons[i].addEventListener("click", function () {
        if (buttons[i] !== equalto && buttons[i] !== clear) {
            output.innerHTML += buttons[i].textContent.trim(); 
            output.style.fontWeight = "bold";
            output.style.fontSize = "20px";
        }
    });
}

equalto.addEventListener("click", function () {
    output.innerHTML = eval(output.innerHTML);
});

clear.addEventListener("click", function () {
    output.innerHTML = ""; 
});

moon.addEventListener("click",function(){
 document.body.style.backgroundColor="black";
 calScreen.style.backgroundColor="rgba(150, 149, 149,0.3)";
   moon.style.display="none";
    sun.style.display="block"

})
sun.addEventListener("click",function(){
    document.body.style.backgroundColor="#51A39D";
    calScreen.style.backgroundColor="rgba(255,255,255,0.8)";
      moon.style.display="block";
       sun.style.display="none"
   
   })
