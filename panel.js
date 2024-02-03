// functions n shit
function newElement(type, parent){
  let newElem = document.createElement(type);
  parent.appendChild(newElem);
  newElem.className = "TransThis";
  return newElem;
}
let nameText = document.getElementById("nameChangingTxt");
injectionPoint.style.visibility = "visible";
injectionPoint.style.opacity = "1";
nameText.textContent = "Injector cannot be ran on marketing page!";
  launcher.style.opacity = "0";
  launcher.style.visibility = "hidden";
// vertical scaling and pre-initialization
/*
setTimeout(function(){
  launcher.style.opacity = "0";
  launcher.style.visibility = "hidden";
  nameText.textContent = "User detected!"
  injectionPoint.style.top = "calc(100% - 410px)";
    injectionPoint.style.height = "400px";
    document.getElementById("openingLogo").style.backgroundColor = "transparent";

// full scaling
    setTimeout(function(){
  injectionPoint.style.width = "calc(100% - 20px)";
  nameText.textContent = "User detected! Username: " + user;
    }, 500);
}, 1)
*/