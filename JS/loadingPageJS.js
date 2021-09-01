//loading website page
setInterval(function() {
    var div = document.querySelector("#counter");
    var count = div.textContent * 1 - 1;
    div.textContent = count;
    if (count <= 0) {
        window.location.replace('TriviaGame.html');
    }
}, 1000);
//loading website page
