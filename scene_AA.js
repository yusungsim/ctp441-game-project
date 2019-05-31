// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var CHATNUMBER = 9;
var chatlist = [];

function showTheChat(chat, sec) {
    setTimeout(function () {
        chat.style.display = "flex";
    }, sec);
}

window.onload = function(){
    for(var i = 1; i <= CHATNUMBER; i++){
        var name = "c" + i;
        var domobj = document.getElementById(name);
        chatlist.push(domobj);
    }

    for (var i = 0; i < CHATNUMBER; i++) {
        chatlist[i].style.display = 'none';
    }

    for(var i = 0; i < CHATNUMBER; i++){
        var time = i * 2000+300;
        showTheChat(chatlist[i], time);
    }
}