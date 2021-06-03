// Chord Timeouts
let oneFiveTimeout1;
let oneFiveTimeout2;
let oneFiveTimeout3;

// C Major
let cDomPlayer = document.getElementById("c-dom-player");
let cDom1 = document.getElementById("c-dom-1");
let cDom2 = document.getElementById("c-dom-2");
let cDom3 = document.getElementById("c-dom-3");

cDomPlayer.addEventListener("play", 
function() {changeColorDom(cDom1, cDom2, cDom3);}, false
);

cDomPlayer.addEventListener("pause", function() {returnDomColor(cDom1, cDom2, cDom3); cDomPlayer.currentTime = 0;}, false);
cDomPlayer.addEventListener("ended", function() {returnDomColor(cDom1, cDom2, cDom3); cDomPlayer.currentTime = 0;}, false); 

// a minor

let aMinDomPlayer = document.getElementById("a-min-dom-player");
let aMinDom1 = document.getElementById("a-min-dom-1");
let aMinDom2 = document.getElementById("a-min-dom-2");
let aMinDom3 = document.getElementById("a-min-dom-3");

aMinDomPlayer.addEventListener("play", 
function() {changeColorDom(aMinDom1, aMinDom2, aMinDom3);}, false
);

aMinDomPlayer.addEventListener("pause", function() {returnDomColor(aMinDom1, aMinDom2, aMinDom3); aMinDomPlayer.currentTime = 0;}, false);
aMinDomPlayer.addEventListener("ended", function() {returnDomColor(aMinDom1, aMinDom2, aMinDom3); aMinDomPlayer.currentTime = 0;}, false); 

// G Major

let gDomPlayer = document.getElementById("g-dom-player");
let gDom1 = document.getElementById("g-dom-1");
let gDom2 = document.getElementById("g-dom-2");
let gDom3 = document.getElementById("g-dom-3");

gDomPlayer.addEventListener("play", 
function() {changeColorDom(gDom1, gDom2, gDom3);}, false
);

gDomPlayer.addEventListener("pause", function() {returnDomColor(gDom1, gDom2, gDom3); gDomPlayer.currentTime = 0;}, false);
gDomPlayer.addEventListener("ended", function() {returnDomColor(gDom1, gDom2, gDom3); gDomPlayer.currentTime = 0;}, false); 

// e minor

let eMinDomPlayer = document.getElementById("e-min-dom-player");
let eMinDom1 = document.getElementById("e-min-dom-1");
let eMinDom2 = document.getElementById("e-min-dom-2");
let eMinDom3 = document.getElementById("e-min-dom-3");

eMinDomPlayer.addEventListener("play", 
function() {changeColorDom(eMinDom1, eMinDom2, eMinDom3);}, false
);

eMinDomPlayer.addEventListener("pause", function() {returnDomColor(eMinDom1, eMinDom2, eMinDom3); eMinDomPlayer.currentTime = 0;}, false);
eMinDomPlayer.addEventListener("ended", function() {returnDomColor(eMinDom1, eMinDom2, eMinDom3); eMinDomPlayer.currentTime = 0;}, false); 

// D Major
let dDomPlayer = document.getElementById("d-dom-player");
let dDom1 = document.getElementById("d-dom-1");
let dDom2 = document.getElementById("d-dom-2");
let dDom3 = document.getElementById("d-dom-3");

dDomPlayer.addEventListener("play", 
function() {changeColorDom(dDom1, dDom2, dDom3);}, false
);

dDomPlayer.addEventListener("pause", function() {returnDomColor(dDom1, dDom2, dDom3); dDomPlayer.currentTime = 0;}, false);
dDomPlayer.addEventListener("ended", function() {returnDomColor(dDom1, dDom2, dDom3); dDomPlayer.currentTime = 0;}, false); 

// b minor

let bMinDomPlayer = document.getElementById("b-min-dom-player");
let bMinDom1 = document.getElementById("b-min-dom-1");
let bMinDom2 = document.getElementById("b-min-dom-2");
let bMinDom3 = document.getElementById("b-min-dom-3");

bMinDomPlayer.addEventListener("play", 
function() {changeColorDom(bMinDom1, bMinDom2, bMinDom3);}, false
);

bMinDomPlayer.addEventListener("pause", function() {returnDomColor(bMinDom1, bMinDom2, bMinDom3); bMinDomPlayer.currentTime = 0;}, false);
bMinDomPlayer.addEventListener("ended", function() {returnDomColor(bMinDom1, bMinDom2, bMinDom3); bMinDomPlayer.currentTime = 0;}, false); 

// A Major

let aDomPlayer = document.getElementById("a-dom-player");
let aDom1 = document.getElementById("a-dom-1");
let aDom2 = document.getElementById("a-dom-2");
let aDom3 = document.getElementById("a-dom-3");

aDomPlayer.addEventListener("play", 
function() {changeColorDom(aDom1, aDom2, aDom3);}, false
);

aDomPlayer.addEventListener("pause", function() {returnDomColor(aDom1, aDom2, aDom3); aDomPlayer.currentTime = 0;}, false);
aDomPlayer.addEventListener("ended", function() {returnDomColor(aDom1, aDom2, aDom3); aDomPlayer.currentTime = 0;}, false); 

// f# minor
let fSharpMinDomPlayer = document.getElementById("f-sharp-min-dom-player");
let fSharpMinDom1 = document.getElementById("f-sharp-min-dom-1");
let fSharpMinDom2 = document.getElementById("f-sharp-min-dom-2");
let fSharpMinDom3 = document.getElementById("f-sharp-min-dom-3");

fSharpMinDomPlayer.addEventListener("play", 
function() {changeColorDom(fSharpMinDom1, fSharpMinDom2, fSharpMinDom3);}, false
);

fSharpMinDomPlayer.addEventListener("pause", function() {returnDomColor(fSharpMinDom1, fSharpMinDom2, fSharpMinDom3); fSharpMinDomPlayer.currentTime = 0;}, false);
fSharpMinDomPlayer.addEventListener("ended", function() {returnDomColor(fSharpMinDom1, fSharpMinDom2, fSharpMinDom3); fSharpMinDomPlayer.currentTime = 0;}, false); 

// E Major

let eDomPlayer = document.getElementById("e-dom-player");
let eDom1 = document.getElementById("e-dom-1");
let eDom2 = document.getElementById("e-dom-2");
let eDom3 = document.getElementById("e-dom-3");

eDomPlayer.addEventListener("play", 
function() {changeColorDom(eDom1, eDom2, eDom3);}, false
);

eDomPlayer.addEventListener("pause", function() {returnDomColor(eDom1, eDom2, eDom3); eDomPlayer.currentTime = 0;}, false);
eDomPlayer.addEventListener("ended", function() {returnDomColor(eDom1, eDom2, eDom3); eDomPlayer.currentTime = 0;}, false); 

// c# minor

let cSharpMinDomPlayer = document.getElementById("c-sharp-min-dom-player");
let cSharpMinDom1 = document.getElementById("c-sharp-min-dom-1");
let cSharpMinDom2 = document.getElementById("c-sharp-min-dom-2");
let cSharpMinDom3 = document.getElementById("c-sharp-min-dom-3");

cSharpMinDomPlayer.addEventListener("play", 
function() {changeColorDom(cSharpMinDom1, cSharpMinDom2, cSharpMinDom3);}, false
);

cSharpMinDomPlayer.addEventListener("pause", function() {returnDomColor(cSharpMinDom1, cSharpMinDom2, cSharpMinDom3); cSharpMinDomPlayer.currentTime = 0;}, false);
cSharpMinDomPlayer.addEventListener("ended", function() {returnDomColor(cSharpMinDom1, cSharpMinDom2, cSharpMinDom3); cSharpMinDomPlayer.currentTime = 0;}, false); 

// B Major

let bDomPlayer = document.getElementById("b-dom-player");
let bDom1 = document.getElementById("b-dom-1");
let bDom2 = document.getElementById("b-dom-2");
let bDom3 = document.getElementById("b-dom-3");

bDomPlayer.addEventListener("play", 
function() {changeColorDom(bDom1, bDom2, bDom3);}, false
);

bDomPlayer.addEventListener("pause", function() {returnDomColor(bDom1, bDom2, bDom3); bDomPlayer.currentTime = 0;}, false);
bDomPlayer.addEventListener("ended", function() {returnDomColor(bDom1, bDom2, bDom3); bDomPlayer.currentTime = 0;}, false); 

// g# minor

let gSharpMinDomPlayer = document.getElementById("g-sharp-min-dom-player");
let gSharpMinDom1 = document.getElementById("g-sharp-min-dom-1");
let gSharpMinDom2 = document.getElementById("g-sharp-min-dom-2");
let gSharpMinDom3 = document.getElementById("g-sharp-min-dom-3");

gSharpMinDomPlayer.addEventListener("play", 
function() {changeColorDom(gSharpMinDom1, gSharpMinDom2, gSharpMinDom3);}, false
);

gSharpMinDomPlayer.addEventListener("pause", function() {returnDomColor(gSharpMinDom1, gSharpMinDom2, gSharpMinDom3); gSharpMinDomPlayer.currentTime = 0;}, false);
gSharpMinDomPlayer.addEventListener("ended", function() {returnDomColor(gSharpMinDom1, gSharpMinDom2, gSharpMinDom3); gSharpMinDomPlayer.currentTime = 0;}, false); 

// Cb Major

let cFlatDomPlayer = document.getElementById("c-flat-dom-player");
let cFlatDom1 = document.getElementById("c-flat-dom-1");
let cFlatDom2 = document.getElementById("c-flat-dom-2");
let cFlatDom3 = document.getElementById("c-flat-dom-3");

cFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(cFlatDom1, cFlatDom2, cFlatDom3);}, false
);

cFlatDomPlayer.addEventListener("pause", function() {returnDomColor(cFlatDom1, cFlatDom2, cFlatDom3); cFlatDomPlayer.currentTime = 0;}, false);
cFlatDomPlayer.addEventListener("ended", function() {returnDomColor(cFlatDom1, cFlatDom2, cFlatDom3); cFlatDomPlayer.currentTime = 0;}, false); 

// F# Major

let fSharpDomPlayer = document.getElementById("f-sharp-dom-player");
let fSharpDom1 = document.getElementById("f-sharp-dom-1");
let fSharpDom2 = document.getElementById("f-sharp-dom-2");
let fSharpDom3 = document.getElementById("f-sharp-dom-3");

fSharpDomPlayer.addEventListener("play", 
function() {changeColorDom(fSharpDom1, fSharpDom2, fSharpDom3);}, false
);

fSharpDomPlayer.addEventListener("pause", function() {returnDomColor(fSharpDom1, fSharpDom2, fSharpDom3); fSharpDomPlayer.currentTime = 0;}, false);
fSharpDomPlayer.addEventListener("ended", function() {returnDomColor(fSharpDom1, fSharpDom2, fSharpDom3); fSharpDomPlayer.currentTime = 0;}, false); 

// d# minor

let dSharpMinDomPlayer = document.getElementById("d-sharp-min-dom-player");
let dSharpMinDom1 = document.getElementById("d-sharp-min-dom-1");
let dSharpMinDom2 = document.getElementById("d-sharp-min-dom-2");
let dSharpMinDom3 = document.getElementById("d-sharp-min-dom-3");

dSharpMinDomPlayer.addEventListener("play", 
function() {changeColorDom(dSharpMinDom1, dSharpMinDom2, dSharpMinDom3);}, false
);

dSharpMinDomPlayer.addEventListener("pause", function() {returnDomColor(dSharpMinDom1, dSharpMinDom2, dSharpMinDom3); dSharpMinDomPlayer.currentTime = 0;}, false);
dSharpMinDomPlayer.addEventListener("ended", function() {returnDomColor(dSharpMinDom1, dSharpMinDom2, dSharpMinDom3); dSharpMinDomPlayer.currentTime = 0;}, false);

// Gb Major

let gFlatDomPlayer = document.getElementById("g-flat-dom-player");
let gFlatDom1 = document.getElementById("g-flat-dom-1");
let gFlatDom2 = document.getElementById("g-flat-dom-2");
let gFlatDom3 = document.getElementById("g-flat-dom-3");

gFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(gFlatDom1, gFlatDom2, gFlatDom3);}, false
);

gFlatDomPlayer.addEventListener("pause", function() {returnDomColor(gFlatDom1, gFlatDom2, gFlatDom3); gFlatDomPlayer.currentTime = 0;}, false);
gFlatDomPlayer.addEventListener("ended", function() {returnDomColor(gFlatDom1, gFlatDom2, gFlatDom3); gFlatDomPlayer.currentTime = 0;}, false); 

// eb minor

let eFlatMinDomPlayer = document.getElementById("e-flat-min-dom-player");
let eFlatMinDom1 = document.getElementById("e-flat-min-dom-1");
let eFlatMinDom2 = document.getElementById("e-flat-min-dom-2");
let eFlatMinDom3 = document.getElementById("e-flat-min-dom-3");

eFlatMinDomPlayer.addEventListener("play", 
function() {changeColorDom(eFlatMinDom1, eFlatMinDom2, eFlatMinDom3);}, false
);

eFlatMinDomPlayer.addEventListener("pause", function() {returnDomColor(eFlatMinDom1, eFlatMinDom2, eFlatMinDom3); eFlatMinDomPlayer.currentTime = 0;}, false);
eFlatMinDomPlayer.addEventListener("ended", function() {returnDomColor(eFlatMinDom1, eFlatMinDom2, eFlatMinDom3); eFlatMinDomPlayer.currentTime = 0;}, false);

// Db Major

let dFlatDomPlayer = document.getElementById("d-flat-dom-player");
let dFlatDom1 = document.getElementById("d-flat-dom-1");
let dFlatDom2 = document.getElementById("d-flat-dom-2");
let dFlatDom3 = document.getElementById("d-flat-dom-3");

dFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(dFlatDom1, dFlatDom2, dFlatDom3);}, false
);

dFlatDomPlayer.addEventListener("pause", function() {returnDomColor(dFlatDom1, dFlatDom2, dFlatDom3); dFlatDomPlayer.currentTime = 0;}, false);
dFlatDomPlayer.addEventListener("ended", function() {returnDomColor(dFlatDom1, dFlatDom2, dFlatDom3); dFlatDomPlayer.currentTime = 0;}, false); 

// bb minor

let bFlatMinDomPlayer = document.getElementById("b-flat-min-dom-player");
let bFlatMinDom1 = document.getElementById("b-flat-min-dom-1");
let bFlatMinDom2 = document.getElementById("b-flat-min-dom-2");
let bFlatMinDom3 = document.getElementById("b-flat-min-dom-3");

bFlatMinDomPlayer.addEventListener("play", 
function() {changeColorDom(bFlatMinDom1, bFlatMinDom2, bFlatMinDom3);}, false
);

bFlatMinDomPlayer.addEventListener("pause", function() {returnDomColor(bFlatMinDom1, bFlatMinDom2, bFlatMinDom3); bFlatMinDomPlayer.currentTime = 0;}, false);
bFlatMinDomPlayer.addEventListener("ended", function() {returnDomColor(bFlatMinDom1, bFlatMinDom2, bFlatMinDom3); bFlatMinDomPlayer.currentTime = 0;}, false);

// C# Major

let cSharpDomPlayer = document.getElementById("c-sharp-dom-player");
let cSharpDom1 = document.getElementById("c-sharp-dom-1");
let cSharpDom2 = document.getElementById("c-sharp-dom-2");
let cSharpDom3 = document.getElementById("c-sharp-dom-3");

cSharpDomPlayer.addEventListener("play", 
function() {changeColorDom(cSharpDom1, cSharpDom2, cSharpDom3);}, false
);

cSharpDomPlayer.addEventListener("pause", function() {returnDomColor(cSharpDom1, cSharpDom2, cSharpDom3); cSharpDomPlayer.currentTime = 0;}, false);
cSharpDomPlayer.addEventListener("ended", function() {returnDomColor(cSharpDom1, cSharpDom2, cSharpDom3); cSharpDomPlayer.currentTime = 0;}, false); 

// Ab Major

let aFlatDomPlayer = document.getElementById("a-flat-dom-player");
let aFlatDom1 = document.getElementById("a-flat-dom-1");
let aFlatDom2 = document.getElementById("a-flat-dom-2");
let aFlatDom3 = document.getElementById("a-flat-dom-3");

aFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(aFlatDom1, aFlatDom2, aFlatDom3);}, false
);

aFlatDomPlayer.addEventListener("pause", function() {returnDomColor(aFlatDom1, aFlatDom2, aFlatDom3); aFlatDomPlayer.currentTime = 0;}, false);
aFlatDomPlayer.addEventListener("ended", function() {returnDomColor(aFlatDom1, aFlatDom2, aFlatDom3); aFlatDomPlayer.currentTime = 0;}, false); 

// f minor

let fMinDomPlayer = document.getElementById("f-min-dom-player");
let fMinDom1 = document.getElementById("f-min-dom-1");
let fMinDom2 = document.getElementById("f-min-dom-2");
let fMinDom3 = document.getElementById("f-min-dom-3");

fMinDomPlayer.addEventListener("play", 
function() {changeColorDom(fMinDom1, fMinDom2, fMinDom3);}, false
);

fMinDomPlayer.addEventListener("pause", function() {returnDomColor(fMinDom1, fMinDom2, fMinDom3); fMinDomPlayer.currentTime = 0;}, false);
fMinDomPlayer.addEventListener("ended", function() {returnDomColor(fMinDom1, fMinDom2, fMinDom3); fMinDomPlayer.currentTime = 0;}, false); 

// Eb Major

let eFlatDomPlayer = document.getElementById("e-flat-dom-player");
let eFlatDom1 = document.getElementById("e-flat-dom-1");
let eFlatDom2 = document.getElementById("e-flat-dom-2");
let eFlatDom3 = document.getElementById("e-flat-dom-3");

eFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(eFlatDom1, eFlatDom2, eFlatDom3);}, false
);

eFlatDomPlayer.addEventListener("pause", function() {returnDomColor(eFlatDom1, eFlatDom2, eFlatDom3); eFlatDomPlayer.currentTime = 0;}, false);
eFlatDomPlayer.addEventListener("ended", function() {returnDomColor(eFlatDom1, eFlatDom2, eFlatDom3); eFlatDomPlayer.currentTime = 0;}, false); 

// c minor

let cMinDomPlayer = document.getElementById("c-min-dom-player");
let cMinDom1 = document.getElementById("c-min-dom-1");
let cMinDom2 = document.getElementById("c-min-dom-2");
let cMinDom3 = document.getElementById("c-min-dom-3");

cMinDomPlayer.addEventListener("play", 
function() {changeColorDom(cMinDom1, cMinDom2, cMinDom3);}, false
);

cMinDomPlayer.addEventListener("pause", function() {returnDomColor(cMinDom1, cMinDom2, cMinDom3); cMinDomPlayer.currentTime = 0;}, false);
cMinDomPlayer.addEventListener("ended", function() {returnDomColor(cMinDom1, cMinDom2, cMinDom3); cMinDomPlayer.currentTime = 0;}, false); 

// Bb Major

let bFlatDomPlayer = document.getElementById("b-flat-dom-player");
let bFlatDom1 = document.getElementById("b-flat-dom-1");
let bFlatDom2 = document.getElementById("b-flat-dom-2");
let bFlatDom3 = document.getElementById("b-flat-dom-3");

bFlatDomPlayer.addEventListener("play", 
function() {changeColorDom(bFlatDom1, bFlatDom2, bFlatDom3);}, false
);

bFlatDomPlayer.addEventListener("pause", function() {returnDomColor(bFlatDom1, bFlatDom2, bFlatDom3); bFlatDomPlayer.currentTime = 0;}, false);
bFlatDomPlayer.addEventListener("ended", function() {returnDomColor(bFlatDom1, bFlatDom2, bFlatDom3); bFlatDomPlayer.currentTime = 0;}, false); 

// g minor

let gMinDomPlayer = document.getElementById("g-min-dom-player");
let gMinDom1 = document.getElementById("g-min-dom-1");
let gMinDom2 = document.getElementById("g-min-dom-2");
let gMinDom3 = document.getElementById("g-min-dom-3");

gMinDomPlayer.addEventListener("play", 
function() {changeColorDom(gMinDom1, gMinDom2, gMinDom3);}, false
);

gMinDomPlayer.addEventListener("pause", function() {returnDomColor(gMinDom1, gMinDom2, gMinDom3); gMinDomPlayer.currentTime = 0;}, false);
gMinDomPlayer.addEventListener("ended", function() {returnDomColor(gMinDom1, gMinDom2, gMinDom3); gMinDomPlayer.currentTime = 0;}, false); 

// F Major

let fDomPlayer = document.getElementById("f-dom-player");
let fDom1 = document.getElementById("f-dom-1");
let fDom2 = document.getElementById("f-dom-2");
let fDom3 = document.getElementById("f-dom-3");

fDomPlayer.addEventListener("play", 
function() {changeColorDom(fDom1, fDom2, fDom3);}, false
);

fDomPlayer.addEventListener("pause", function() {returnDomColor(fDom1, fDom2, fDom3); fDomPlayer.currentTime = 0;}, false);
fDomPlayer.addEventListener("ended", function() {returnDomColor(fDom1, fDom2, fDom3); fDomPlayer.currentTime = 0;}, false); 

// d minor

let dMinDomPlayer = document.getElementById("d-min-dom-player");
let dMinDom1 = document.getElementById("d-min-dom-1");
let dMinDom2 = document.getElementById("d-min-dom-2");
let dMinDom3 = document.getElementById("d-min-dom-3");

dMinDomPlayer.addEventListener("play", 
function() {changeColorDom(dMinDom1, dMinDom2, dMinDom3);}, false
);

dMinDomPlayer.addEventListener("pause", function() {returnDomColor(dMinDom1, dMinDom2, dMinDom3); dMinDomPlayer.currentTime = 0;}, false);
dMinDomPlayer.addEventListener("ended", function() {returnDomColor(dMinDom1, dMinDom2, dMinDom3); dMinDomPlayer.currentTime = 0;}, false); 

// Audio Event Functions
function changeColorDom(item1, item2, item3) {
    oneFiveTimeout1 = setTimeout(function() {item1.style.color = "green";}, 1000);
    oneFiveTimeout2 = setTimeout(function() {item2.style.color = "green";}, 2000);
    oneFiveTimeout3 = setTimeout(function () {item3.style.color = "green";}, 3000);
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