// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "flex";
        chat.scrollIntoView(false);
    }, sec);
}

var sel = document.getElementById("selection");
var loc = document.location.href;
var G = document.getElementById("G");

function filter() {
    var splitedLoc = loc.split("?");
    if (splitedLoc[1] != "op=T") {
        G.style.display='none';
    }
}
filter();
