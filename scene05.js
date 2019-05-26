// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "block";
    }, sec);
}
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var key = document.getElementById("keyboard");


var chatlist = [];
chatlist.push(c1);
chatlist.push(c2);
chatlist.push(c3);


for (var i = 0; i < 3; i++) {
    chatlist[i].style.display = 'none';
}
key.style.display = 'none';
for (var i = 0; i < 3; i++) {
    showTheChat(chatlist[i], i * 2000);
}
showTheChat(key, 3 * 2000);


