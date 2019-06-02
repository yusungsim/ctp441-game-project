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

var chatlist = [];
chatlist.push(c1);
chatlist.push(c2);


for (var i = 0; i < 2; i++) {
    chatlist[i].style.display = 'none';
}
for (var i = 0; i < 2; i++) {
    showTheChat(chatlist[i], i * 2000);
}



