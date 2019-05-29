const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("name");
console.log("param is " + myParam);

document.getElementById("hello").innerHTML = myParam;

function getSceneJSON(scene){
    
}