// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "flex";
    }, sec);
}
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var noti = document.getElementById("noti");
var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");

var chatlist = [];
chatlist.push(c1);
chatlist.push(c2);
chatlist.push(c3);
chatlist.push(c4);
chatlist.push(c5);
chatlist.push(c6);
chatlist.push(c7);
chatlist.push(c8);
for (var i = 0; i < 8; i++) {
    chatlist[i].style.display = 'none';
}
noti.style.display = 'none';
ch1.style.display = 'none';
ch2.style.display = 'none';


for (var i = 0; i < 8; i++) {
    showTheChat(chatlist[i], i * 2000);
}
showTheChat(noti, 8 * 2000);
showTheChat(ch1, 8 * 2000);
showTheChat(ch2, 8 * 2000);

