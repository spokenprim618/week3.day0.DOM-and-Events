let Button= document.createElement("button");
const rengar= document.querySelector('#rengar');
const body=document.querySelector("body");
const myButton=document.querySelector("button");
const text=document.createTextNode("click me");
body.appendChild(Button);




Button.appendChild(text);


 function onClick(){
   document.getElementById("rengar").src="assets/rengar.png";
    alert("you've been deleted");
};
Button.addEventListener("click", onClick);
 //problem is my button is equal to null
