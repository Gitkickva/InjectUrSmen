
createNewItem(`BAP!`, `BAP!`, `
// remove this quote if its here

let bapper = openWindow(650, 425, 'BAP! - Bobs App Programmer [scroll down for code output]', false, Injector.serverURL + "/bap.png");
bapper.style.backgroundColor = "#383838"
let frame = newElement("demobox", bapper, "AppDemo");
frame.style.borderColor = "lime";
frame.style.borderStyle = "solid";
frame.style.borderWidth = "3px";
frame.style.position = "absolute";
frame.style.left = "150px";
frame.style.top = "5px";
frame.style.height = "250px";
frame.style.width = "300px";
//make fake window for app dev
let pseudoWinTop = newElement("pseudoWinHead", frame, "FakeWindowTop");
pseudoWinTop.style.backgroundColor = "black";
pseudoWinTop.style.color = "white";
pseudoWinTop.style.position = "absolute";
pseudoWinTop.style.left = "0px";
pseudoWinTop.style.top = "0px";
pseudoWinTop.style.height = "25px";
pseudoWinTop.style.width = "calc(100% - 5px)";
pseudoWinTop.textContent = "Sample Text";
pseudoWinTop.style.paddingLeft = "5px";
pseudoWinTop.style.userSelect = "none";
let pseudoWindow = newElement("pseudoWindow", frame, "fakeWindow");
pseudoWindow.style.backgroundColor = "white";
pseudoWindow.style.color = "black";
pseudoWindow.style.position  = "absolute";
pseudoWindow.style.bottom = "0px";
pseudoWindow.style.left = "0px";
pseudoWindow.style.height = "calc(100% - 25px)";
pseudoWindow.style.width = "100%";
pseudoWindow.style.overflow = "auto";

// make code output box
let codeOutput = newElement("codeOutput", bapper, "codeOutBox");
codeOutput.style.position = "absolute";
codeOutput.style.backgroundColor = "white";
codeOutput.style.bottom = "-100px";
codeOutput.style.height = "100px";
codeOutput.style.width = "100%";
codeOutput.style.left = "0px";
codeOutput.style.color = "black";
codeOutput.style.overflowY = "auto";

let defaultProps = "let autoWin = openWindow(300, 225, 'BAP AutoWindow', false, 'https://wiki.teamfortress.com/w/images/thumb/7/77/Golden_Wrench_IMG.png/250px-Golden_Wrench_IMG.png'); <br>"
codeOutput.innerHTML = defaultProps;

// the rest of the shit
let creationScrollBox = newElement("scrollBox", bapper, "createElementScroll");
let windowPropScrollBox = newElement("scrollBox", bapper, "windowPropScroll");

let creTitle = newElement("categoryHeader", creationScrollBox, "creationTitle");
creTitle.textContent = "Create Objects"

let winPropTitle = newElement("categoryHeader", windowPropScrollBox, "windowPropTitle");
winPropTitle.textContent = "Window Properties"

let changeWinHeight = newElement("input", windowPropScrollBox, "bapInputs2");
changeWinHeight.placeholder = "Window height [def. 225px]"
changeWinHeight.value = "225px"
changeWinHeight.style.top = "35px";

// change window propereties items
let changeWinWidth = newElement("input", windowPropScrollBox, "bapInputs2");
changeWinWidth.placeholder = "Window width [def. 300px]"
changeWinWidth.value = "300px"
let changeWinName = newElement("input", windowPropScrollBox, "bapInputs2");
changeWinName.placeholder = "Window name"
changeWinName.value = "Sample Text";
let changeWinBGColor = newElement("input", windowPropScrollBox, "bapInputs2");
changeWinBGColor.placeholder = "Window background color"
changeWinBGColor.value = "white";
let saveProps = newElement("importantButton", windowPropScrollBox, "saveWindowProps");
saveProps.textContent = "Save/Apply Properties";


// create object be like oon ching ching chawngy like a melody in my categoryHeader that i cant keep out got me singin like na
let elemId = 0;
let elementType = newElement("select", creationScrollBox, "bobDropdown")
let elementOptions = ["genericBapBox", "input", "select"];
for(i=0; i<elementOptions.length; i++){
  let newOption = new Option(elementOptions[i], elementOptions[i]);
  elementType.appendChild(newOption);
}
let elementWidth = newElement("input", creationScrollBox, "bapInputs2")
elementWidth.placeholder = "Element width";
let elementHeight = newElement("input", creationScrollBox, "bapInputs2");
elementHeight.placeholder = "Element height";
let elementColor = newElement("input", creationScrollBox, "bapInputs2");
elementColor.placeholder = "Element color";
let elementFloatLeft = newElement("input", creationScrollBox, "bapInputs2");
elementFloatLeft.placeholder = "Element left PX";
let elementFloatTop = newElement("input", creationScrollBox, "bapInputs2");
elementFloatTop.placeholder = "Element top PX";
let elementBorderWidth = newElement("input", creationScrollBox, "bapInputs2");
elementBorderWidth.placeholder = "Border width [optional]";
let elementBorderColor = newElement('input', creationScrollBox, "bapInputs2");
elementBorderColor.placeholder = "Border color [optional]"
let elementBorderRadius = newElement('input', creationScrollBox, "bapInputs2");
elementBorderRadius.placeholder = "Border radius [optional]";
let elementVarName = newElement("input", creationScrollBox, "bapInputs2");
elementVarName.placeholder = "Varname [optional]";
let elementParentName = newElement("input", creationScrollBox, "bapInputs2");
elementParentName.placeholder = "Parent [optional]";
let createElemBtn = newElement("importantButton", creationScrollBox, "createElementBtn");
createElemBtn.textContent = "Create Object!"

let testAppBtn = newElement("importantButton", bapper, "testAppButton");
testAppBtn.textContent = "Test App";
testAppBtn.style.width = "200px";
testAppBtn.style.left = "calc(50% - 130px)"
testAppBtn.addEventListener("click", function(){
  try{
      eval(codeOutput.textContent);
  }catch(err){
    error(err);
  }
})

createElemBtn.addEventListener("click", function(){
  try{
    elemId++;
    let parent = pseudoWindow;
    if(elementParentName.value !== ""){
      parent = document.getElementById(elementParentName.value);
    }
    let varname = "AutogenElement";
    if(elementVarName.value !== ""){
      varname = elementVarName.value;
    }
    let borderWidth = "0px";
    let borderColor = "transparent";
    let borderRadius = "0px";
    if(elementBorderWidth.value !== ""){
      borderWidth = elementBorderWidth.value;
    }
    if(elementBorderColor.value !== ""){
      borderColor = elementBorderColor.value;
    }
    if(elementBorderRadius.value !== ""){
      borderRadius = elementBorderRadius.value;
    }

    let autogen = newElement(elementType.value, parent, varname);
    autogen.style.width = elementWidth.value;
    autogen.style.height = elementHeight.value;
    autogen.style.backgroundColor = elementColor.value;
    let precolor = autogen.style.backgroundColor;
    autogen.style.left = elementFloatLeft.value;
    autogen.style.top = elementFloatTop.value;
    autogen.style.borderWidth = borderWidth;
    autogen.style.borderColor = borderColor;
    autogen.style.borderRadius = borderRadius;
    autogen.style.borderStyle = "solid";
    autogen.style.transitionDuration = "0.2s";
    autogen.addEventListener("click", function(){
      if(autogen.style.opacity === "0.5"){
      autogen.remove();
      let remcode1 = codeOutput.innerHTML.slice(0, codeOutput.innerHTML.indexOf(autogenCode));
      let remcode2 = codeOutput.innerHTML.slice((remcode1.length + autogenCode.length), codeOutput.innerHTML.length);
      let fixedCode = remcode1+remcode2;
      codeOutput.innerHTML = fixedCode;
      }
    })
    autogen.addEventListener('mouseenter', function(){
      autogen.style.backgroundColor = "red";
      autogen.style.opacity = "0.5";
      
    })
    autogen.addEventListener('mouseout', function(){
      autogen.style.backgroundColor = precolor;
      autogen.style.opacity = "1";

    })
    let elemName = null;
    let elemParent = null;
    if(elementVarName.value !== ""){
      elemName = elementVarName.value;
    } else{
      elemName = "auto" + elemId.toString();
    };
    if(elementParentName.value !== ""){
      elemParent = elementParentName.value;
    } else{
      elemParent = "autoWin";
    };
    let autogenCode = \`let \` + elemName + \` = newElement('\` + elementType.value + \`', \`+elemParent+\`, "autoObj"); 
    <br>
    \`+elemName+\`.style.position = 'absolute';
    <br>
    \`+elemName+\`.style.width = '\`+elementWidth.value+\`';
    <br>
    \`+elemName+\`.style.height = '\`+elementHeight.value+\`';
    <br>
    \`+elemName+\`.style.backgroundColor = '\`+elementColor.value+\`';
    <br>
    \`+elemName+\`.style.left = '\`+elementFloatLeft.value+\`';
    <br>
    \`+elemName+\`.style.top = '\`+elementFloatTop.value+\`';<br>
    \`;
    if(borderWidth !== "0px" && borderColor !== "transparent"){
      autogenCode += elemName+\`.style.borderWidth = '\` + borderWidth + \`'; <br>
      \`+elemName+\`.style.borderColor = '\` + borderColor + \`';<br>
      \`+elemName+\`.style.borderStyle = 'solid'; <br>
      \`
    }
    if(borderRadius !== "0px"){
      autogenCode += elemName+\`.style.borderRadius = '\` + borderRadius + \`';<br>\`
    }
    codeOutput.innerHTML += autogenCode;

    
  }catch(err){
    alert(err);
  }
})

saveProps.addEventListener("click", function(){
  try{
    frame.style.height = (parseCSSInteger(changeWinHeight.value) + 25) + "px";
    frame.style.width = changeWinWidth.value;
    pseudoWinTop.textContent = changeWinName.value;
    pseudoWindow.style.backgroundColor = changeWinBGColor.value;
    if(parseCSSInteger(frame.style.height) > 365){
      bapper.style.height = (parseCSSInteger(frame.style.height) + 65) + "px";
    } else{
      bapper.style.height = "425px";
    }
    if(parseCSSInteger(frame.style.width) > 300){
      bapper.style.width = (parseCSSInteger(frame.style.width) + 350) + "px";
    } else{
      bapper.style.width = "650px";
    }
    let codeWODefault = codeOutput.innerHTML.slice(defaultProps.length, codeOutput.innerHTML.length);
    defaultProps = "let autoWin = openWindow(" +parseCSSInteger(changeWinWidth.value).toString()+", "+parseCSSInteger(changeWinHeight.value).toString()+", '"+changeWinName.value+"', false, 'https://wiki.teamfortress.com/w/images/thumb/7/77/Golden_Wrench_IMG.png/250px-Golden_Wrench_IMG.png'); <br> autoWin.style.backgroundColor = '" + changeWinBGColor.value + "';<br>"
    codeOutput.innerHTML = defaultProps + codeWODefault;
    

  }catch(err){
    error(err);
  }
})

style.textContent += \`
scrollBox{
 width: 150px;
 height: 100%;
 overflow-y: auto;
 overflow-x: hidden;
 position: absolute;
 left: 0px;
 top: 0px; 
}
#windowPropScroll{
  left: calc(100% - 194px);
  width: 194px;
}
categoryHeader{
  position: absolute;
  font-weight: bold;
  top: 5px;
  left: 0px;
  width: 100%;
  color: lime;
  font-size: 15px;
  height: 15px;
  text-align: center;
}
#bapInputs2{
  position: relative;
  
  top:35px;
  margin-bottom: 5px;
  left: 2px;
  width: calc(100% - 12px);
  height: 20px;
  background-color: black;
  color: lime;
  border-color: lime;
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
transition-duration: 0.2s;
}
#bapInputs2:hover{
  border-color: orange;
  color: orange;
}
importantButton{
  position: absolute;
  width: calc(86% - 8px);
  height: 25px;
  background-color: black;
  color: lime;
  border-color: lime;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  bottom: 10px;
  padding-left: 8px;
  left: calc(50% - 43%);
  transition-duration: 0.5s;
  user-select: none;
}
importantButton:hover{
  border-color: orange;
  color: orange;
  cursor: pointer;
}
#bobDropdown{
  position: relative;
  top: 45px;
  left: calc(50% - 47.5%);
  margin-bottom: 12px;
  border-color: lime;
  background-color: black;
  border-width: 2px;
  width: 95%;
  height: 25px;
  color: lime;
transition-duration: 0.5s;
}
#bobDropdown:hover{
border-color: orange;
color: orange;
}
\`
`,
Injector.serverURL + "/bap.png");