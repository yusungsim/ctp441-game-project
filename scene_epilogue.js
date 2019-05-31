var content = [];
var chatList = [];
var loc = document.location.href;
var ending = parseInt(loc.split("?")[1]);

const chooseEnding = function (ending) {
    switch (ending) {
        case 0:
            content.push("Do Jun was brought to the teacher's office where he did not say a word.");
            content.push("He later transferred to another school, and Hyun Jun also transferred after few weeks.");
            break;
        
        case 1:
            content.push("You successfully changed the subject, and everyone quickly forgot about Dojun's bracelet.");
            content.push("But you couldn't stop some of the students to keep being suspicious about Dojun...");
            break;
        
        case 2:
            content.push("You stood up for Dojun, and some of the classmates were offended.");
            content.push("You guess you did the right thing, but can you keep up the investigation without trust from your friends?");
            break;
        
        case 3:
            content.push("The words went wild about Dojun and Hyunjun having the couple bracelet. Some say they are dating.");
            content.push("This made Dojun transfer to another school, and everyone forgot about the stolen bracelet.");
            break;
        
        default:
            content.push("Game end");
            break;
    }
}

const hydrate = function (content) {
    var parent = document.getElementById('c');
    for (let i = 0; i < content.length; i++) {
        setTimeout(function () {
            var chat = `<div class="chat-box" id="c1"><div class="chat-name"><img src="profilepic/system.png">System</div><div class="chat-text">${content[i]}</div></div>`
            parent.insertAdjacentHTML('beforeend', chat);
        }, 2000 * i);
    }
    setTimeout(function(){
        var chat = `<div class="chat-box" id="c1"><div class="chat-name"><img src="profilepic/system.png">System</div><button onclick="location.href='scene_title.html'">Go back to Title Screen</button></div>`;
        parent.insertAdjacentHTML('beforeend', chat);
    }, 2000*(content.length))

}

chooseEnding(ending);
hydrate(content);

