// Chord Timeouts
let chordTimeout1;
let chordTimeout2;
let chordTimeout3;
let chordTimeout4;

// C Major
let cChordPlayer = document.getElementById("c-chord-player");
let cChord1 = document.getElementById("c-chord-1");
let cChord2 = document.getElementById("c-chord-2");
let cChord3 = document.getElementById("c-chord-3");

cChordPlayer.addEventListener("play", 
function() {changeColorChord(cChord1, cChord2, cChord3);}, false
);

cChordPlayer.addEventListener("pause", function() {returnChordColor(cChord1, cChord2, cChord3); cChordPlayer.currentTime = 0;}, false);
cChordPlayer.addEventListener("ended", function() {returnChordColor(cChord1, cChord2, cChord3); cChordPlayer.currentTime = 0;}, false); 

function changeColorChord(item1, item2, item3) {
    chordTimeout1 = setTimeout(function() {item1.style.color = "blue";}, 1000);
    chordTimeout2 = setTimeout(function() {item2.style.color = "blue";}, 2000);
    chordTimeout3 = setTimeout(function () {item3.style.color = "blue";}, 3000);
    chordTimeout4 = setTimeout(function() {item1.style.color = "green"; item2.style.color = "green"; item3.style.color = "green"}, 4000);
}

function stopChordTimeouts() {
    let timeouts = [chordTimeout1, chordTimeout2, chordTimeout3, chordTimeout4];
    for(let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }

  function returnChordColor(item1, item2, item3) {
    stopChordTimeouts();
    let items = [item1, item2, item3];
    for(let i = 0; i < items.length; i++) {
      items[i].style.color = "black";
    }
  }