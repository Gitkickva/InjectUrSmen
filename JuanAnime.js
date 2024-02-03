createNewItem("Juan's Anime List", "JuanAnime", `

try{
// remove this it fixes syntax highlighting
let autoWin = openWindow(550, 300, 'JuanAnimeList', true, 'https://img.icons8.com/bubbles/2x/list.png');
autoWin.style.backgroundColor = 'white';
autoWin.style.overflowY = "hidden";
let gameSelBar = newElement('genericBapBox', autoWin, "autoObj");
gameSelBar.style.width = '100px';
gameSelBar.style.height = '100%';
gameSelBar.style.backgroundColor = 'Gray';
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
gameFrame.setAttribute('allowFullScreen', '')
let playGameBtn = newElement('genericBapBox', gameSelBar, "autoObj");
playGameBtn.style.width = '96px';
playGameBtn.style.height = '40px';
playGameBtn.style.backgroundColor = 'Green';
playGameBtn.style.left = '2px';
playGameBtn.style.top = 'calc(100% - 42px)';
playGameBtn.style.lineHeight = "40px";
playGameBtn.style.textAlign = "center";
playGameBtn.style.fontSize = "35px";
playGameBtn.style.fontWeight = "bold";
playGameBtn.style.color = "black";
playGameBtn.textContent = "Go!";
playGameBtn.style.borderRadius = "5px";
playGameBtn.style.cursor = "pointer";
playGameBtn.style.userSelect = "none";
let gameChooseSel = newElement('genericBapBox', gameSelBar, "autoObj");
gameChooseSel.style.width = '90px';
gameChooseSel.style.height = '20px';
gameChooseSel.style.backgroundColor = 'transparent';
gameChooseSel.style.left = '5px';
gameChooseSel.style.top = '5px';
gameChooseSel.textContent = "Anime site:"
gameChooseSel.color = "black";
let gameChooseDD = newElement('select', gameSelBar, "autoObj");
gameChooseDD.style.position = "absolute";
gameChooseDD.style.width = '90px';
gameChooseDD.style.height = '20px';
gameChooseDD.style.backgroundColor = 'red';
gameChooseDD.style.left = '5px';
gameChooseDD.style.top = '30px';
gameChooseDD.style.color = 'white';
let gameNames = ["Array Anime", "AniMixPlay"];
let gameVals = ["https://mikesproxy.herokuapp.com/main/https://arrayanime.com/", "https://alloyinject.herokuapp.com/web/_aHR0cHM6Ly9hbmltaXhwbGF5LnRv_/"]
for(i=0; i<gameNames.length; i++){
  let newOp = new Option(gameNames[i], gameVals[i]);
  gameChooseDD.appendChild(newOp);
}
playGameBtn.addEventListener("click", function(){
  gameFrame.src = gameChooseDD.value;
  if(gameChooseDD.value == "https://mikesproxy.herokuapp.com/main/https://arrayanime.com/"){
    alert("For ArrayAnime, you must do the following for it to work: "+"\\n"+"Step 1: Click the anime"+"\\n"+" Step 2: Press the Sandbox button twice" + "\\n" +"Step 3: Press Switch" +"\\n"+"Step 4: If it doesn't work, toggle Switch and repeat from Step 2" + "\\n" + "Enjoy!")
  }
  gameSelBar.style.opacity = "0";
  gameSelBar.style.visibility = "hidden";
})
}catch(err){
  error(err)
};`, "https://img.icons8.com/bubbles/2x/list.png");
