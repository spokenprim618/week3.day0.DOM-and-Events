let newDiv= document.createElement("div");
newDiv.setAttribute("class","champ_container pyke")
let header=document.createElement("h1");
let text=document.createTextNode("pyke, the bloodharbor ripper");
header.appendChild(text);
let main=document.querySelector(".main_container")
main.appendChild(newDiv);
let pykeImage=document.querySelector(".pyke")
pykeImage.style["background-image"]="url(assets/pyke.jpg)";
pykeImage.style['background-color']="yellow";
//problem background image