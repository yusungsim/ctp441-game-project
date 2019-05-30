// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "block";
    }, sec);
}
var key = document.getElementById("keyboard");

var sel = document.getElementById("selection");
var loc = document.location.href;
var G = document.getElementById("G");

key.style.display = 'none';
function filter() {
    var splitedLoc = loc.split("?");
    if (splitedLoc[1] == "op=T") {
        G.innerHTML = '';
    }
}
filter();
key.style.display = 'block';
