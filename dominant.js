// Chord Timeouts
let oneFiveTimeout1;
let oneFiveTimeout2;
let oneFiveTimeout3;

// C Major
let cDomPlayer = document.getElementById("c-i-v-player");
let cDom1 = document.getElementById("c-i-v-1");
let cDom2 = document.getElementById("c-i-v-2");
let cDom3 = document.getElementById("c-i-v-3");

cDomPlayer.addEventListener("play", 
function() {changeColorDom(cDom1, cDom2, cDom3);}, false
);

cDomPlayer.addEventListener("pause", function() {returnDomColor(cDom1, cDom2, cDom3); cDomPlayer.currentTime = 0;}, false);
cDomPlayer.addEventListener("ended", function() {returnDomColor(cDom1, cDom2, cDom3); cDomPlayer.currentTime = 0;}, false); 

function changeColorDom(item1, item2, item3) {
    oneFiveTimeout1 = setTimeout(function() {item1.style.color = "blue";}, 1000);
    oneFiveTimeout2 = setTimeout(function() {item2.style.color = "blue";}, 2000);
    oneFiveTimeout3 = setTimeout(function () {item3.style.color = "blue";}, 3000);
}

function stopDomTimeouts() {
    let timeouts = [oneFiveTimeout1, oneFiveTimeout2, oneFiveTimeout3];
    for(let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }

  function returnDomColor(item1, item2, item3) {
    stopDomTimeouts();
    let items = [item1, item2, item3];
    for(let i = 0; i < items.length; i++) {
      items[i].style.color = "black";
    }
  }