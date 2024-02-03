createNewItem("Game Hub", "Game Hub", `

try{
// remove this it fixes syntax highlighting
let autoWin = openWindow(550, 300, 'Game Hub', true, Injector.serverURL + "/gamehub.png");
autoWin.style.backgroundColor = 'white';
autoWin.style.overflowY = "hidden";
let gameSelBar = newElement('genericBapBox', autoWin, "autoObj");
gameSelBar.style.width = '100px';
gameSelBar.style.height = '100%';
gameSelBar.style.backgroundColor = 'Indigo';
gameSelBar.style.left = '0px';
gameSelBar.style.top = '0px';
gameSelBar.style.transitionDuration = "0.2s";
let gameFrame = newElement('iframe', autoWin, "autoObj");
gameFrame.style.width = '100%';
gameFrame.style.height = '100%';
gameFrame.style.backgroundColor = 'black';
gameFrame.style.borderWidth = "0px";
gameFrame.style.margin = "0px";
gameFrame.style.right = '-75px';
gameFrame.style.top = '0px';
let playGameBtn = newElement('genericBapBox', gameSelBar, "autoObj");
playGameBtn.style.width = '96px';
playGameBtn.style.height = '40px';
playGameBtn.style.backgroundColor = 'LawnGreen';
playGameBtn.style.left = '2px';
playGameBtn.style.top = 'calc(100% - 42px)';
playGameBtn.style.lineHeight = "40px";
playGameBtn.style.textAlign = "center";
playGameBtn.style.fontSize = "35px";
playGameBtn.style.fontWeight = "bold";
playGameBtn.style.color = "black";
playGameBtn.textContent = "Play!";
playGameBtn.style.borderRadius = "5px";
playGameBtn.style.cursor = "pointer";
playGameBtn.style.userSelect = "none";
let gameChooseSel = newElement('genericBapBox', gameSelBar, "autoObj");
gameChooseSel.style.width = '90px';
gameChooseSel.style.height = '20px';
gameChooseSel.style.backgroundColor = 'transparent';
gameChooseSel.style.left = '5px';
gameChooseSel.style.top = '5px';
gameChooseSel.textContent = "Game:"
gameChooseSel.color = "white";
let gameChooseDD = newElement('select', gameSelBar, "autoObj");
gameChooseDD.style.position = "absolute";
gameChooseDD.style.width = '90px';
gameChooseDD.style.height = '20px';
gameChooseDD.style.backgroundColor = 'gray';
gameChooseDD.style.left = '5px';
gameChooseDD.style.top = '30px';
let gameNames = ["FNF [Week 7 Included!]", "Minecraft", "Advanced Pixel Apocalypse 3"];
let gameVals = ["https://inject0r.xyz/fnf", "https://mikesproxy.herokuapp.com/main/https://classic.minecraft.net", "https://inject0r.xyz/apoc"]
for(i=0; i<gameNames.length; i++){
  let newOp = new Option(gameNames[i], gameVals[i]);
  gameChooseDD.appendChild(newOp);
}
playGameBtn.addEventListener("click", function(){
  gameFrame.src = gameChooseDD.value;
  gameSelBar.style.opacity = "0";
  gameSelBar.style.visibility = "hidden";
})
}catch(err){
  error(err)
};`, Injector.serverURL + "/gamehub.png");
