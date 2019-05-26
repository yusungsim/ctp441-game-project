// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "block";
    }, sec);
}
var c1 = document.getElementById("c1");



var chatlist = [];
chatlist.push(c1);


for (var i = 0; i < 1; i++) {
    chatlist[i].style.display = 'none';
}
for (var i = 0; i < 1; i++) {
    showTheChat(chatlist[i], i * 2000);
}



