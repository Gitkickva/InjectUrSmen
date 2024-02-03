createNewItem(`Injector Cloud`, `InjectorCloud`, `
// delete this ! 
 try{
let autoWin = openWindow(500, 325, 'Injector Cloud', false, 'https://wiki.teamfortress.com/w/images/thumb/7/77/Golden_Wrench_IMG.png/250px-Golden_Wrench_IMG.png');
autoWin.style.backgroundColor = '#1f1f1f';
let nameBar = newElement('input', autoWin, "autoObj");
nameBar.style.position = 'absolute';
nameBar.style.width = 'calc(100% - 82px)';
nameBar.style.height = '50px';
nameBar.style.backgroundColor = 'black';
nameBar.style.left = '0px';
nameBar.style.top = '0px';
nameBar.style.borderWidth = '2px';
nameBar.style.borderColor = 'white';
nameBar.style.borderStyle = 'solid';
nameBar.style.color = "white";
nameBar.style.paddingLeft = "5px";
var filesArray = [];
let floatTop = 56;
let makeFileBtn = newElement('genericBapBox', autoWin, "makeFileBtn");
makeFileBtn.style.position = 'absolute';
makeFileBtn.style.width = '71px';
makeFileBtn.style.height = '52px';
makeFileBtn.style.left = 'calc(100% - 75px)';
makeFileBtn.style.top = '0px';
makeFileBtn.style.borderWidth = '2px';
makeFileBtn.style.borderColor = 'white';
makeFileBtn.style.borderStyle = 'solid';
makeFileBtn.addEventListener("click", function(){
  let writeReq = new XMLHttpRequest;
  writeReq.open('POST', Injector.serverURL + "/cloud");
  writeReq.setRequestHeader('token', Injector.user.token);
  writeReq.setRequestHeader('cloudtype', 'writeFile');
  writeReq.setRequestHeader('filetowrite', nameBar.value);
  writeReq.send(prompt("Content of file"));
  writeReq.onreadystatechange=e=>{
    if(writeReq.readyState == 4)
      while(document.getElementById("CloudFile"))
        document.getElementById("CloudFile").remove();
      while(document.getElementById("deleteFile"))
        document.getElementById("deleteFile").remove();
      floatTop = 56;
      filesArray = [];
    let cloudReq2 = new XMLHttpRequest;
cloudReq2.open('GET', Injector.serverURL + "/cloud");
cloudReq2.setRequestHeader('token', Injector.user.token);
cloudReq2.send();
cloudReq2.onreadystatechange=e=>{
  if(cloudReq2.readyState == 4){
  let filesJson = JSON.parse(cloudReq2.responseText);
  for(i=0; i<Object.keys(filesJson).length; i++){
    if(Object.keys(filesJson)[i] !== "undefined"){
   newFile(Object.keys(filesJson)[i]); 
    }
  };
  };
}
  }
})
floatTop = 56;
function newFile(name){
  if(!(filesArray.includes(name))){
  let prot = false;
    filesArray.push(name);
  let fileToMk = newElement("newFile", autoWin, "CloudFile");
  fileToMk.textContent = name;
  fileToMk.style.top = floatTop + 'px';
  floatTop += 35;
  fileToMk.addEventListener("click", function(){
    if(!prot){
    let fetchFileReq = new XMLHttpRequest;
    fetchFileReq.open('POST', Injector.serverURL + "/cloud");
    fetchFileReq.setRequestHeader('token', Injector.user.token);
    fetchFileReq.setRequestHeader('cloudType', 'getFile');
    fetchFileReq.send(name);
    fetchFileReq.onreadystatechange=e=>{
      if(fetchFileReq.readyState == 4){
        alert(fetchFileReq.responseText);
      }
    }
    }
});
    let fileDeleteBtn = newElement("fileDelete", autoWin, "deleteFile");
    fileDeleteBtn.style.top = floatTop - 35 + "px";
  fileDeleteBtn.addEventListener("click", function(){
    let deleteReq = new XMLHttpRequest;
    deleteReq.open('POST', Injector.serverURL + "/cloud");
    deleteReq.setRequestHeader('token', Injector.user.token);
    deleteReq.setRequestHeader('cloudType', 'deleteFile');
    deleteReq.send(name)
    deleteReq.onreadystatechange=e=>{
      if(deleteReq.readyState == 4)
              while(document.getElementById("CloudFile"))
        document.getElementById("CloudFile").remove();
      while(document.getElementById("deleteFile"))
        document.getElementById("deleteFile").remove();
      floatTop = 56;
      filesArray = [];
    let cloudReq2 = new XMLHttpRequest;
cloudReq2.open('GET', Injector.serverURL + "/cloud");
cloudReq2.setRequestHeader('token', Injector.user.token);
cloudReq2.send();
cloudReq2.onreadystatechange=e=>{
  if(cloudReq2.readyState == 4){
  let filesJson = JSON.parse(cloudReq2.responseText);
  for(i=0; i<Object.keys(filesJson).length; i++){
    if(Object.keys(filesJson)[i] !== "undefined"){
   newFile(Object.keys(filesJson)[i]); 
    }
  };
  };
}
      
    }
  })

}
}
let cloudReq = new XMLHttpRequest;
cloudReq.open('GET', Injector.serverURL + "/cloud");
cloudReq.setRequestHeader('token', Injector.user.token);
cloudReq.send();
cloudReq.onreadystatechange=e=>{
  if(cloudReq.readyState == 4){
  let filesJson = JSON.parse(cloudReq.responseText);
  for(i=0; i<Object.keys(filesJson).length; i++){
    if(Object.keys(filesJson)[i] !== "undefined"){
   newFile(Object.keys(filesJson)[i]); 
    }
  };
  };
}
}catch(err){
  alert(err);
}
style.textContent += \`
newFile{
 position: absolute;
 width: calc(100% - 50px);
 height: 35px;
 top: 56px;
 left: 0px;
 background-color: black;
 color: white; 
 border-style: solid none solid none;
 border-width: 1px;
 border-color: white;
 line-height: 35px;
transition-duration: 0.25s;
user-select: none;
}
fileDelete{
  position: absolute;
  width: 50px;
  height: 35px;
  right: 0px;
  top: 0px;
  background-color: red;
  color: white;
  transition-duration: 0.25s;
  user-select: none;

}
fileDelete:hover{
  cursor: pointer;
  background-color: crimson;
}
newFile:hover{
  background-color: #2f2f2f;
  cursor: pointer;

}
#makeFileBtn{
  transition-duration: 0.25s;
  background-color: gray;
}
#makeFileBtn:hover{
  background-color: #2f2f2f;
  cursor: pointer;
}\`
`);

