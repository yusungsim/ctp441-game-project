// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
function sleep(millisecs) {
    var initiation = new Date().getTime();
    while ((new Date().getTime() - initiation) < millisecs);
}
var c1 = document.getElementById("c1");
c1.style.display = 'none';

var c2 = document.getElementById("c2");
c2.style.display = 'none';


setTimeout(function () {
    c1.style.display = "block";
}, 1000);


setTimeout(function () {
    c2.style.display = "block";
}, 2000);


