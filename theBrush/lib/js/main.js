document.createElement("button");
const myButton=document.querySelector("button");
const text=document.createTextNode("click me");
myButton.appendChild("text");
const rengar= document.querySelector('#rengar');

 function onClick(){
   document.getElementsByID("rengar").src="assets/rengar.png";
    alert("you've been deleted");
};
 myButton.addEventListener("click", onClick);
 //problem is my button is equal to null
