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
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");


var chatlist = [];
chatlist.push(c1);
chatlist.push(c2);
chatlist.push(c3);
chatlist.push(c4);
chatlist.push(c5);
chatlist.push(c6);
chatlist.push(c7);
chatlist.push(c8);
chatlist.push(c9);
chatlist.push(c10);
chatlist.push(c11);

for (var i = 0; i < 11; i++) {
    chatlist[i].style.display = 'none';
}
for (var i = 0; i < 11; i++) {
    showTheChat(chatlist[i], i * 2000);
}


