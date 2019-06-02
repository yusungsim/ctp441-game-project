// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "flex";
        chat.scrollIntoView(false);
    }, sec);
}
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");

var chatlist = [];
chatlist.push(c1);
chatlist.push(c2);
chatlist.push(c3);
chatlist.push(c4);
chatlist.push(c5);
chatlist.push(c6);
for (var i = 0; i < 6; i++) {
    chatlist[i].style.display = 'none';
}
for (var i = 0; i < 6; i++) {
    showTheChat(chatlist[i], i * 2000);
}



