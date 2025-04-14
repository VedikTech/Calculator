let op=document.querySelectorAll(".op");
let num=document.querySelectorAll(".num");
let eql=document.getElementById("eql");
let cls=document.getElementById("cls");
let cut =document.getElementById("cut");
let input="";
let screen=document.getElementById("screen");
op.forEach((sign)=>{
     sign.addEventListener("click",()=>{
        let lastChar = input[input.length - 1];

        
        if (input === "" || ["+", "-", "*", "/"].includes(lastChar)) {
            return;
        }
        input=input+sign.textContent;
        screen.innerHTML=input;
        screen.scrollLeft = screen.scrollWidth;
        screen.classList.add("screen");

    
        
     })
     
    })
    
    num.forEach((val)=>{
        val.addEventListener("click",()=>{
            
            input=input+val.textContent;
          
            screen.innerHTML = input;
            screen.scrollLeft = screen.scrollWidth;
            screen.classList.add("screen");
           

        })
                                                                 
      
    
})

eql.addEventListener("click",()=>{
    let ans=eval(input);
    screen.innerHTML=" ";
    screen.innerHTML=ans;
    input = ans.toString(); 
    


})

cls.addEventListener("click",()=>{
   screen.innerHTML="";
   input="";


})


cut.addEventListener("click",()=>{
  input=  input.slice(0,-1);
  screen.innerHTML=input;
    
})