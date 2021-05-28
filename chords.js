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

// a minor

let aMinChordPlayer = document.getElementById("a-min-chord-player");
let aMinChord1 = document.getElementById("a-min-chord-1");
let aMinChord2 = document.getElementById("a-min-chord-2");
let aMinChord3 = document.getElementById("a-min-chord-3");

aMinChordPlayer.addEventListener("play", 
function() {changeColorChord(aMinChord1, aMinChord2, aMinChord3);}, false
);

aMinChordPlayer.addEventListener("pause", function() {returnChordColor(aMinChord1, aMinChord2, aMinChord3); aMinChordPlayer.currentTime = 0;}, false);
aMinChordPlayer.addEventListener("ended", function() {returnChordColor(aMinChord1, aMinChord2, aMinChord3); aMinChordPlayer.currentTime = 0;}, false); 

// G Major

let gChordPlayer = document.getElementById("g-chord-player");
let gChord1 = document.getElementById("g-chord-1");
let gChord2 = document.getElementById("g-chord-2");
let gChord3 = document.getElementById("g-chord-3");

gChordPlayer.addEventListener("play", 
function() {changeColorChord(gChord1, gChord2, gChord3);}, false
);

gChordPlayer.addEventListener("pause", function() {returnChordColor(gChord1, gChord2, gChord3); gChordPlayer.currentTime = 0;}, false);
gChordPlayer.addEventListener("ended", function() {returnChordColor(gChord1, gChord2, gChord3); gChordPlayer.currentTime = 0;}, false); 

// e minor

let eMinChordPlayer = document.getElementById("e-min-chord-player");
let eMinChord1 = document.getElementById("e-min-chord-1");
let eMinChord2 = document.getElementById("e-min-chord-2");
let eMinChord3 = document.getElementById("e-min-chord-3");

eMinChordPlayer.addEventListener("play", 
function() {changeColorChord(eMinChord1, eMinChord2, eMinChord3);}, false
);

eMinChordPlayer.addEventListener("pause", function() {returnChordColor(eMinChord1, eMinChord2, eMinChord3); eMinChordPlayer.currentTime = 0;}, false);
eMinChordPlayer.addEventListener("ended", function() {returnChordColor(eMinChord1, eMinChord2, eMinChord3); eMinChordPlayer.currentTime = 0;}, false); 

// D Major

let dChordPlayer = document.getElementById("d-chord-player");
let dChord1 = document.getElementById("d-chord-1");
let dChord2 = document.getElementById("d-chord-2");
let dChord3 = document.getElementById("d-chord-3");

dChordPlayer.addEventListener("play", 
function() {changeColorChord(dChord1, dChord2, dChord3);}, false
);

dChordPlayer.addEventListener("pause", function() {returnChordColor(dChord1, dChord2, dChord3); dChordPlayer.currentTime = 0;}, false);
dChordPlayer.addEventListener("ended", function() {returnChordColor(dChord1, dChord2, dChord3); dChordPlayer.currentTime = 0;}, false); 

// b minor

let bMinChordPlayer = document.getElementById("b-min-chord-player");
let bMinChord1 = document.getElementById("b-min-chord-1");
let bMinChord2 = document.getElementById("b-min-chord-2");
let bMinChord3 = document.getElementById("b-min-chord-3");

bMinChordPlayer.addEventListener("play", 
function() {changeColorChord(bMinChord1, bMinChord2, bMinChord3);}, false
);

bMinChordPlayer.addEventListener("pause", function() {returnChordColor(bMinChord1, bMinChord2, bMinChord3); bMinChordPlayer.currentTime = 0;}, false);
bMinChordPlayer.addEventListener("ended", function() {returnChordColor(bMinChord1, bMinChord2, bMinChord3); bMinChordPlayer.currentTime = 0;}, false);

// A Major

let aChordPlayer = document.getElementById("a-chord-player");
let aChord1 = document.getElementById("a-chord-1");
let aChord2 = document.getElementById("a-chord-2");
let aChord3 = document.getElementById("a-chord-3");

aChordPlayer.addEventListener("play", 
function() {changeColorChord(aChord1, aChord2, aChord3);}, false
);

aChordPlayer.addEventListener("pause", function() {returnChordColor(aChord1, aChord2, aChord3); aChordPlayer.currentTime = 0;}, false);
aChordPlayer.addEventListener("ended", function() {returnChordColor(aChord1, aChord2, aChord3); aChordPlayer.currentTime = 0;}, false);

// f# minor

let fSharpMinChordPlayer = document.getElementById("f-sharp-min-chord-player");
let fSharpMinChord1 = document.getElementById("f-sharp-min-chord-1");
let fSharpMinChord2 = document.getElementById("f-sharp-min-chord-2");
let fSharpMinChord3 = document.getElementById("f-sharp-min-chord-3");

fSharpMinChordPlayer.addEventListener("play", 
function() {changeColorChord(fSharpMinChord1, fSharpMinChord2, fSharpMinChord3);}, false
);

fSharpMinChordPlayer.addEventListener("pause", function() {returnChordColor(fSharpMinChord1, fSharpMinChord2, fSharpMinChord3); fSharpMinChordPlayer.currentTime = 0;}, false);
fSharpMinChordPlayer.addEventListener("ended", function() {returnChordColor(fSharpMinChord1, fSharpMinChord2, fSharpMinChord3); fSharpMinChordPlayer.currentTime = 0;}, false);

// E Major

let eChordPlayer = document.getElementById("e-chord-player");
let eChord1 = document.getElementById("e-chord-1");
let eChord2 = document.getElementById("e-chord-2");
let eChord3 = document.getElementById("e-chord-3");

eChordPlayer.addEventListener("play", 
function() {changeColorChord(eChord1, eChord2, eChord3);}, false
);

eChordPlayer.addEventListener("pause", function() {returnChordColor(eChord1, eChord2, eChord3); eChordPlayer.currentTime = 0;}, false);
eChordPlayer.addEventListener("ended", function() {returnChordColor(eChord1, eChord2, eChord3); eChordPlayer.currentTime = 0;}, false);

// c# minor

let cSharpMinChordPlayer = document.getElementById("c-sharp-min-chord-player");
let cSharpMinChord1 = document.getElementById("c-sharp-min-chord-1");
let cSharpMinChord2 = document.getElementById("c-sharp-min-chord-2");
let cSharpMinChord3 = document.getElementById("c-sharp-min-chord-3");

cSharpMinChordPlayer.addEventListener("play", 
function() {changeColorChord(cSharpMinChord1, cSharpMinChord2, cSharpMinChord3);}, false
);

cSharpMinChordPlayer.addEventListener("pause", function() {returnChordColor(cSharpMinChord1, cSharpMinChord2, cSharpMinChord3); cSharpMinChordPlayer.currentTime = 0;}, false);
cSharpMinChordPlayer.addEventListener("ended", function() {returnChordColor(cSharpMinChord1, cSharpMinChord2, cSharpMinChord3); cSharpMinChordPlayer.currentTime = 0;}, false);

// B Major

let bChordPlayer = document.getElementById("b-chord-player");
let bChord1 = document.getElementById("b-chord-1");
let bChord2 = document.getElementById("b-chord-2");
let bChord3 = document.getElementById("b-chord-3");

bChordPlayer.addEventListener("play", 
function() {changeColorChord(bChord1, bChord2, bChord3);}, false
);

bChordPlayer.addEventListener("pause", function() {returnChordColor(bChord1, bChord2, bChord3); bChordPlayer.currentTime = 0;}, false);
bChordPlayer.addEventListener("ended", function() {returnChordColor(bChord1, bChord2, bChord3); bChordPlayer.currentTime = 0;}, false);

// g# minor

let gSharpMinChordPlayer = document.getElementById("g-sharp-min-chord-player");
let gSharpMinChord1 = document.getElementById("g-sharp-min-chord-1");
let gSharpMinChord2 = document.getElementById("g-sharp-min-chord-2");
let gSharpMinChord3 = document.getElementById("g-sharp-min-chord-3");

gSharpMinChordPlayer.addEventListener("play", 
function() {changeColorChord(gSharpMinChord1, gSharpMinChord2, gSharpMinChord3);}, false
);

gSharpMinChordPlayer.addEventListener("pause", function() {returnChordColor(gSharpMinChord1, gSharpMinChord2, gSharpMinChord3); gSharpMinChordPlayer.currentTime = 0;}, false);
gSharpMinChordPlayer.addEventListener("ended", function() {returnChordColor(gSharpMinChord1, gSharpMinChord2, gSharpMinChord3); gSharpMinChordPlayer.currentTime = 0;}, false);

// Cb Major

let cFlatChordPlayer = document.getElementById("c-flat-chord-player");
let cFlatChord1 = document.getElementById("c-flat-chord-1");
let cFlatChord2 = document.getElementById("c-flat-chord-2");
let cFlatChord3 = document.getElementById("c-flat-chord-3");

cFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(cFlatChord1, cFlatChord2, cFlatChord3);}, false
);

cFlatChordPlayer.addEventListener("pause", function() {returnChordColor(cFlatChord1, cFlatChord2, cFlatChord3); cFlatChordPlayer.currentTime = 0;}, false);
cFlatChordPlayer.addEventListener("ended", function() {returnChordColor(cFlatChord1, cFlatChord2, cFlatChord3); cFlatChordPlayer.currentTime = 0;}, false);

// F# Major

let fSharpChordPlayer = document.getElementById("f-sharp-chord-player");
let fSharpChord1 = document.getElementById("f-sharp-chord-1");
let fSharpChord2 = document.getElementById("f-sharp-chord-2");
let fSharpChord3 = document.getElementById("f-sharp-chord-3");

fSharpChordPlayer.addEventListener("play", 
function() {changeColorChord(fSharpChord1, fSharpChord2, fSharpChord3);}, false
);

fSharpChordPlayer.addEventListener("pause", function() {returnChordColor(fSharpChord1, fSharpChord2, fSharpChord3); fSharpChordPlayer.currentTime = 0;}, false);
fSharpChordPlayer.addEventListener("ended", function() {returnChordColor(fSharpChord1, fSharpChord2, fSharpChord3); fSharpChordPlayer.currentTime = 0;}, false);

// d# minor

let dSharpMinChordPlayer = document.getElementById("d-sharp-min-chord-player");
let dSharpMinChord1 = document.getElementById("d-sharp-min-chord-1");
let dSharpMinChord2 = document.getElementById("d-sharp-min-chord-2");
let dSharpMinChord3 = document.getElementById("d-sharp-min-chord-3");

dSharpMinChordPlayer.addEventListener("play", 
function() {changeColorChord(dSharpMinChord1, dSharpMinChord2, dSharpMinChord3);}, false
);

dSharpMinChordPlayer.addEventListener("pause", function() {returnChordColor(dSharpMinChord1, dSharpMinChord2, dSharpMinChord3); dSharpMinChordPlayer.currentTime = 0;}, false);
dSharpMinChordPlayer.addEventListener("ended", function() {returnChordColor(dSharpMinChord1, dSharpMinChord2, dSharpMinChord3); dSharpMinChordPlayer.currentTime = 0;}, false);

// Gb Major

let gFlatChordPlayer = document.getElementById("g-flat-chord-player");
let gFlatChord1 = document.getElementById("g-flat-chord-1");
let gFlatChord2 = document.getElementById("g-flat-chord-2");
let gFlatChord3 = document.getElementById("g-flat-chord-3");

gFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(gFlatChord1, gFlatChord2, gFlatChord3);}, false
);

gFlatChordPlayer.addEventListener("pause", function() {returnChordColor(gFlatChord1, gFlatChord2, gFlatChord3); gFlatChordPlayer.currentTime = 0;}, false);
gFlatChordPlayer.addEventListener("ended", function() {returnChordColor(gFlatChord1, gFlatChord2, gFlatChord3); gFlatChordPlayer.currentTime = 0;}, false);

// eb minor

let eFlatMinChordPlayer = document.getElementById("e-flat-min-chord-player");
let eFlatMinChord1 = document.getElementById("e-flat-min-chord-1");
let eFlatMinChord2 = document.getElementById("e-flat-min-chord-2");
let eFlatMinChord3 = document.getElementById("e-flat-min-chord-3");

eFlatMinChordPlayer.addEventListener("play", 
function() {changeColorChord(eFlatMinChord1, eFlatMinChord2, eFlatMinChord3);}, false
);

eFlatMinChordPlayer.addEventListener("pause", function() {returnChordColor(eFlatMinChord1, eFlatMinChord2, eFlatMinChord3); eFlatMinChordPlayer.currentTime = 0;}, false);
eFlatMinChordPlayer.addEventListener("ended", function() {returnChordColor(eFlatMinChord1, eFlatMinChord2, eFlatMinChord3); eFlatMinChordPlayer.currentTime = 0;}, false);

// Db Major

let dFlatChordPlayer = document.getElementById("d-flat-chord-player");
let dFlatChord1 = document.getElementById("d-flat-chord-1");
let dFlatChord2 = document.getElementById("d-flat-chord-2");
let dFlatChord3 = document.getElementById("d-flat-chord-3");

dFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(dFlatChord1, dFlatChord2, dFlatChord3);}, false
);

dFlatChordPlayer.addEventListener("pause", function() {returnChordColor(dFlatChord1, dFlatChord2, dFlatChord3); dFlatChordPlayer.currentTime = 0;}, false);
dFlatChordPlayer.addEventListener("ended", function() {returnChordColor(dFlatChord1, dFlatChord2, dFlatChord3); dFlatChordPlayer.currentTime = 0;}, false);

// bb minor

let bFlatMinChordPlayer = document.getElementById("b-flat-min-chord-player");
let bFlatMinChord1 = document.getElementById("b-flat-min-chord-1");
let bFlatMinChord2 = document.getElementById("b-flat-min-chord-2");
let bFlatMinChord3 = document.getElementById("b-flat-min-chord-3");

bFlatMinChordPlayer.addEventListener("play", 
function() {changeColorChord(bFlatMinChord1, bFlatMinChord2, bFlatMinChord3);}, false
);

bFlatMinChordPlayer.addEventListener("pause", function() {returnChordColor(bFlatMinChord1, bFlatMinChord2, bFlatMinChord3); bFlatMinChordPlayer.currentTime = 0;}, false);
bFlatMinChordPlayer.addEventListener("ended", function() {returnChordColor(bFlatMinChord1, bFlatMinChord2, bFlatMinChord3); bFlatMinChordPlayer.currentTime = 0;}, false);

// C# Major

let cSharpChordPlayer = document.getElementById("c-sharp-chord-player");
let cSharpChord1 = document.getElementById("c-sharp-chord-1");
let cSharpChord2 = document.getElementById("c-sharp-chord-2");
let cSharpChord3 = document.getElementById("c-sharp-chord-3");

cSharpChordPlayer.addEventListener("play", 
function() {changeColorChord(cSharpChord1, cSharpChord2, cSharpChord3);}, false
);

cSharpChordPlayer.addEventListener("pause", function() {returnChordColor(cSharpChord1, cSharpChord2, cSharpChord3); cSharpChordPlayer.currentTime = 0;}, false);
cSharpChordPlayer.addEventListener("ended", function() {returnChordColor(cSharpChord1, cSharpChord2, cSharpChord3); cSharpChordPlayer.currentTime = 0;}, false);

// Ab Major

let aFlatChordPlayer = document.getElementById("a-flat-chord-player");
let aFlatChord1 = document.getElementById("a-flat-chord-1");
let aFlatChord2 = document.getElementById("a-flat-chord-2");
let aFlatChord3 = document.getElementById("a-flat-chord-3");

aFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(aFlatChord1, aFlatChord2, aFlatChord3);}, false
);

aFlatChordPlayer.addEventListener("pause", function() {returnChordColor(aFlatChord1, aFlatChord2, aFlatChord3); aFlatChordPlayer.currentTime = 0;}, false);
aFlatChordPlayer.addEventListener("ended", function() {returnChordColor(aFlatChord1, aFlatChord2, aFlatChord3); aFlatChordPlayer.currentTime = 0;}, false);

// f minor

let fMinChordPlayer = document.getElementById("f-min-chord-player");
let fMinChord1 = document.getElementById("f-min-chord-1");
let fMinChord2 = document.getElementById("f-min-chord-2");
let fMinChord3 = document.getElementById("f-min-chord-3");

fMinChordPlayer.addEventListener("play", 
function() {changeColorChord(fMinChord1, fMinChord2, fMinChord3);}, false
);

fMinChordPlayer.addEventListener("pause", function() {returnChordColor(fMinChord1, fMinChord2, fMinChord3); fMinChordPlayer.currentTime = 0;}, false);
fMinChordPlayer.addEventListener("ended", function() {returnChordColor(fMinChord1, fMinChord2, fMinChord3); fMinChordPlayer.currentTime = 0;}, false);

// Eb Major

let eFlatChordPlayer = document.getElementById("e-flat-chord-player");
let eFlatChord1 = document.getElementById("e-flat-chord-1");
let eFlatChord2 = document.getElementById("e-flat-chord-2");
let eFlatChord3 = document.getElementById("e-flat-chord-3");

eFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(eFlatChord1, eFlatChord2, eFlatChord3);}, false
);

eFlatChordPlayer.addEventListener("pause", function() {returnChordColor(eFlatChord1, eFlatChord2, eFlatChord3); eFlatChordPlayer.currentTime = 0;}, false);
eFlatChordPlayer.addEventListener("ended", function() {returnChordColor(eFlatChord1, eFlatChord2, eFlatChord3); eFlatChordPlayer.currentTime = 0;}, false);

// c minor

let cMinChordPlayer = document.getElementById("c-min-chord-player");
let cMinChord1 = document.getElementById("c-min-chord-1");
let cMinChord2 = document.getElementById("c-min-chord-2");
let cMinChord3 = document.getElementById("c-min-chord-3");

cMinChordPlayer.addEventListener("play", 
function() {changeColorChord(cMinChord1, cMinChord2, cMinChord3);}, false
);

cMinChordPlayer.addEventListener("pause", function() {returnChordColor(cMinChord1, cMinChord2, cMinChord3); cMinChordPlayer.currentTime = 0;}, false);
cMinChordPlayer.addEventListener("ended", function() {returnChordColor(cMinChord1, cMinChord2, cMinChord3); cMinChordPlayer.currentTime = 0;}, false);

// Bb Major

let bFlatChordPlayer = document.getElementById("b-flat-chord-player");
let bFlatChord1 = document.getElementById("b-flat-chord-1");
let bFlatChord2 = document.getElementById("b-flat-chord-2");
let bFlatChord3 = document.getElementById("b-flat-chord-3");

bFlatChordPlayer.addEventListener("play", 
function() {changeColorChord(bFlatChord1, bFlatChord2, bFlatChord3);}, false
);

bFlatChordPlayer.addEventListener("pause", function() {returnChordColor(bFlatChord1, bFlatChord2, bFlatChord3); bFlatChordPlayer.currentTime = 0;}, false);
bFlatChordPlayer.addEventListener("ended", function() {returnChordColor(bFlatChord1, bFlatChord2, bFlatChord3); bFlatChordPlayer.currentTime = 0;}, false);

// g minor

let gMinChordPlayer = document.getElementById("g-min-chord-player");
let gMinChord1 = document.getElementById("g-min-chord-1");
let gMinChord2 = document.getElementById("g-min-chord-2");
let gMinChord3 = document.getElementById("g-min-chord-3");

gMinChordPlayer.addEventListener("play", 
function() {changeColorChord(gMinChord1, gMinChord2, gMinChord3);}, false
);

gMinChordPlayer.addEventListener("pause", function() {returnChordColor(gMinChord1, gMinChord2, gMinChord3); gMinChordPlayer.currentTime = 0;}, false);
gMinChordPlayer.addEventListener("ended", function() {returnChordColor(gMinChord1, gMinChord2, gMinChord3); gMinChordPlayer.currentTime = 0;}, false);

// F Major

let fChordPlayer = document.getElementById("f-chord-player");
let fChord1 = document.getElementById("f-chord-1");
let fChord2 = document.getElementById("f-chord-2");
let fChord3 = document.getElementById("f-chord-3");

fChordPlayer.addEventListener("play", 
function() {changeColorChord(fChord1, fChord2, fChord3);}, false
);

fChordPlayer.addEventListener("pause", function() {returnChordColor(fChord1, fChord2, fChord3); fChordPlayer.currentTime = 0;}, false);
fChordPlayer.addEventListener("ended", function() {returnChordColor(fChord1, fChord2, fChord3); fChordPlayer.currentTime = 0;}, false);

// d minor

let dMinChordPlayer = document.getElementById("d-min-chord-player");
let dMinChord1 = document.getElementById("d-min-chord-1");
let dMinChord2 = document.getElementById("d-min-chord-2");
let dMinChord3 = document.getElementById("d-min-chord-3");

dMinChordPlayer.addEventListener("play", 
function() {changeColorChord(dMinChord1, dMinChord2, dMinChord3);}, false
);

dMinChordPlayer.addEventListener("pause", function() {returnChordColor(dMinChord1, dMinChord2, dMinChord3); dMinChordPlayer.currentTime = 0;}, false);
dMinChordPlayer.addEventListener("ended", function() {returnChordColor(dMinChord1, dMinChord2, dMinChord3); dMinChordPlayer.currentTime = 0;}, false);

// Audio Event Functions
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