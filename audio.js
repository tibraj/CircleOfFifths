
// C MAJOR
let cPlayer = document.getElementById("c-player");
let c1 = document.getElementById("c-1")
let c2 = document.getElementById("c-2")
let c3 = document.getElementById("c-3")
let c4 = document.getElementById("c-4")
let c5 = document.getElementById("c-5")
let c6 = document.getElementById("c-6")
let c7 = document.getElementById("c-7")

  // cPlayer.addEventListener("play", 
  // function() {changeColor(c1, c2, c3, c4, c5, c6, c7);}, false
  // );


  cPlayer.addEventListener("pause", function() {returnColor(c1, c2, c3, c4, c5, c6, c7); cPlayer.currentTime = 0}, false);
  cPlayer.addEventListener("ended", function() {returnColor(c1, c2, c3, c4, c5, c6, c7); cPlayer.currentTime = 0}, false);


// a minor

let aMinPlayer = document.getElementById("a-min-player");
let aM1 = document.getElementById("a-m-1");
let aM2 = document.getElementById("a-m-2");
let aM3 = document.getElementById("a-m-3");
let aM4 = document.getElementById("a-m-4");
let aM5 = document.getElementById("a-m-5");
let aM6 = document.getElementById("a-m-6");
let aM7 = document.getElementById("a-m-7");

  aMinPlayer.addEventListener("play", 
  function() {changeColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7);}, false
);

  aMinPlayer.addEventListener("pause", function() {returnColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7); aMinPlayer.currentTime = 0}, false);
  aMinPlayer.addEventListener("ended", function() {returnColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7); aMinPlayer.currentTime = 0}, false);

// G MAJOR

let gPlayer = document.getElementById("g-player");
let g1 = document.getElementById("g-1");
let g2 = document.getElementById("g-2");
let g3 = document.getElementById("g-3");
let g4 = document.getElementById("g-4");
let g5 = document.getElementById("g-5");
let g6 = document.getElementById("g-6");
let g7 = document.getElementById("g-7");

  gPlayer.addEventListener("play", 
  function() {changeColor(g1, g2, g3, g4, g5, g6, g7);}, false
  );

  gPlayer.addEventListener("pause", function() {returnColor(g1, g2, g3, g4, g5, g6, g7); gPlayer.currentTime = 0}, false);
  gPlayer.addEventListener("ended", function() {returnColor(g1, g2, g3, g4, g5, g6, g7); gPlayer.currentTime = 0}, false);

// e minor

let eMinPlayer = document.getElementById("e-min-player");
let eM1 = document.getElementById("e-m-1");
let eM2 = document.getElementById("e-m-2");
let eM3 = document.getElementById("e-m-3");
let eM4 = document.getElementById("e-m-4");
let eM5 = document.getElementById("e-m-5");
let eM6 = document.getElementById("e-m-6");
let eM7 = document.getElementById("e-m-7");

  eMinPlayer.addEventListener("play", 
  function() {changeColor(eM1, eM2, eM3, eM4, eM5, eM6, eM7);}, false
);

  eMinPlayer.addEventListener("pause", function() {returnColor(eM1, eM2, eM3, eM4, eM5, eM6, eM7); eMinPlayer.currentTime = 0;}, false);
  eMinPlayer.addEventListener("ended", function() {returnColor(eM1, eM2, eM3, eM4, eM5, eM6, eM7); eMinPlayer.currentTime = 0;}, false);

// D MAJOR
  let dPlayer = document.getElementById("d-player");
  let d1 = document.getElementById("d-1");
  let d2 = document.getElementById("d-2");
  let d3 = document.getElementById("d-3");
  let d4 = document.getElementById("d-4");
  let d5 = document.getElementById("d-5");
  let d6 = document.getElementById("d-6");
  let d7 = document.getElementById("d-7");
  
    dPlayer.addEventListener("play", 
    function() {changeColor(d1, d2, d3, d4, d5, d6, d7);}, false
    );
  
    dPlayer.addEventListener("pause", function() {returnColor(d1, d2, d3, d4, d5, d6, d7); dPlayer.currentTime = 0}, false);
    dPlayer.addEventListener("ended", function() {returnColor(d1, d2, d3, d4, d5, d6, d7); dPlayer.currentTime = 0}, false);

// b minor

let bMinPlayer = document.getElementById("b-min-player");
let bM1 = document.getElementById("b-m-1");
let bM2 = document.getElementById("b-m-2");
let bM3 = document.getElementById("b-m-3");
let bM4 = document.getElementById("b-m-4");
let bM5 = document.getElementById("b-m-5");
let bM6 = document.getElementById("b-m-6");
let bM7 = document.getElementById("b-m-7");

  bMinPlayer.addEventListener("play", 
  function() {changeColor(bM1, bM2, bM3, bM4, bM5, bM6, bM7);}, false
);

  bMinPlayer.addEventListener("pause", function() {returnColor(bM1, bM2, bM3, bM4, bM5, bM6, bM7); bMinPlayer.currentTime = 0;}, false);
  bMinPlayer.addEventListener("ended", function() {returnColor(bM1, bM2, bM3, bM4, bM5, bM6, bM7); bMinPlayer.currentTime = 0;}, false);

  // A MAJOR

  let aPlayer = document.getElementById("a-player");
  let a1 = document.getElementById("a-1");
  let a2 = document.getElementById("a-2");
  let a3 = document.getElementById("a-3");
  let a4 = document.getElementById("a-4");
  let a5 = document.getElementById("a-5");
  let a6 = document.getElementById("a-6");
  let a7 = document.getElementById("a-7");
  
    aPlayer.addEventListener("play", 
    function() {changeColor(a1, a2, a3, a4, a5, a6, a7);}, false
    );
  
    aPlayer.addEventListener("pause", function() {returnColor(a1, a2, a3, a4, a5, a6, a7); aPlayer.currentTime = 0}, false);
    aPlayer.addEventListener("ended", function() {returnColor(a1, a2, a3, a4, a5, a6, a7); aPlayer.currentTime = 0}, false);

// f sharp minor

let fSMinPlayer = document.getElementById("f-sharp-min-player");
let fSM1 = document.getElementById("f-s-m-1");
let fSM2 = document.getElementById("f-s-m-2");
let fSM3 = document.getElementById("f-s-m-3");
let fSM4 = document.getElementById("f-s-m-4");
let fSM5 = document.getElementById("f-s-m-5");
let fSM6 = document.getElementById("f-s-m-6");
let fSM7 = document.getElementById("f-s-m-7");

  fSMinPlayer.addEventListener("play", 
  function() {changeColor(fSM1, fSM2, fSM3, fSM4, fSM5, fSM6, fSM7);}, false
);

  fSMinPlayer.addEventListener("pause", function() {returnColor(fSM1, fSM2, fSM3, fSM4, fSM5, fSM6, fSM7); fSMinPlayer.currentTime = 0;}, false);
  fSMinPlayer.addEventListener("ended", function() {returnColor(fSM1, fSM2, fSM3, fSM4, fSM5, fSM6, fSM7); fSMinPlayer.currentTime = 0;}, false);

// E MAJOR

let ePlayer = document.getElementById("e-player");
let e1 = document.getElementById("e-1");
let e2 = document.getElementById("e-2");
let e3 = document.getElementById("e-3");
let e4 = document.getElementById("e-4");
let e5 = document.getElementById("e-5");
let e6 = document.getElementById("e-6");
let e7 = document.getElementById("e-7");

  ePlayer.addEventListener("play", 
  function() {changeColor(e1, e2, e3, e4, e5, e6, e7);}, false
  );

  ePlayer.addEventListener("pause", function() {returnColor(e1, e2, e3, e4, e5, e6, e7); ePlayer.currentTime = 0}, false);
  ePlayer.addEventListener("ended", function() {returnColor(e1, e2, e3, e4, e5, e6, e7); ePlayer.currentTime = 0}, false);

// c sharp minor

let cSMinPlayer = document.getElementById("c-sharp-min-player");
let cSM1 = document.getElementById("c-s-m-1");
let cSM2 = document.getElementById("c-s-m-2");
let cSM3 = document.getElementById("c-s-m-3");
let cSM4 = document.getElementById("c-s-m-4");
let cSM5 = document.getElementById("c-s-m-5");
let cSM6 = document.getElementById("c-s-m-6");
let cSM7 = document.getElementById("c-s-m-7");

  cSMinPlayer.addEventListener("play", 
  function() {changeColor(cSM1, cSM2, cSM3, cSM4, cSM5, cSM6, cSM7);}, false
);

  cSMinPlayer.addEventListener("pause", function() {returnColor(cSM1, cSM2, cSM3, cSM4, cSM5, cSM6, cSM7); cSMinPlayer.currentTime = 0;}, false);
  cSMinPlayer.addEventListener("ended", function() {returnColor(cSM1, cSM2, cSM3, cSM4, cSM5, cSM6, cSM7); cSMinPlayer.currentTime = 0;}, false);

// B MAJOR

let bPlayer = document.getElementById("b-player");
let b1 = document.getElementById("b-1");
let b2 = document.getElementById("b-2");
let b3 = document.getElementById("b-3");
let b4 = document.getElementById("b-4");
let b5 = document.getElementById("b-5");
let b6 = document.getElementById("b-6");
let b7 = document.getElementById("b-7");

  bPlayer.addEventListener("play", 
  function() {changeColor(b1, b2, b3, b4, b5, b6, b7);}, false
  );

  bPlayer.addEventListener("pause", function() {returnColor(b1, b2, b3, b4, b5, b6, b7); bPlayer.currentTime = 0}, false);
  bPlayer.addEventListener("ended", function() {returnColor(b1, b2, b3, b4, b5, b6, b7); bPlayer.currentTime = 0}, false);

// g sharp minor

let gSMinPlayer = document.getElementById("g-sharp-min-player");
let gSM1 = document.getElementById("g-s-m-1");
let gSM2 = document.getElementById("g-s-m-2");
let gSM3 = document.getElementById("g-s-m-3");
let gSM4 = document.getElementById("g-s-m-4");
let gSM5 = document.getElementById("g-s-m-5");
let gSM6 = document.getElementById("g-s-m-6");
let gSM7 = document.getElementById("g-s-m-7");

  gSMinPlayer.addEventListener("play", 
  function() {changeColor(gSM1, gSM2, gSM3, gSM4, gSM5, gSM6, gSM7);}, false
);

  gSMinPlayer.addEventListener("pause", function() {returnColor(gSM1, gSM2, gSM3, gSM4, gSM5, gSM6, gSM7); gSMinPlayer.currentTime = 0;}, false);
  gSMinPlayer.addEventListener("ended", function() {returnColor(gSM1, gSM2, gSM3, gSM4, gSM5, gSM6, gSM7); gSMinPlayer.currentTime = 0;}, false);

// c flat minor

let cBMinPlayer = document.getElementById("c-flat-min-player");
let cBM1 = document.getElementById("c-b-m-1");
let cBM2 = document.getElementById("c-b-m-2");
let cBM3 = document.getElementById("c-b-m-3");
let cBM4 = document.getElementById("c-b-m-4");
let cBM5 = document.getElementById("c-b-m-5");
let cBM6 = document.getElementById("c-b-m-6");
let cBM7 = document.getElementById("c-b-m-7");

  cBMinPlayer.addEventListener("play", 
  function() {changeColor(cBM1, cBM2, cBM3, cBM4, cBM5, cBM6, cBM7);}, false
);

  cBMinPlayer.addEventListener("pause", function() {returnColor(cBM1, cBM2, cBM3, cBM4, cBM5, cBM6, cBM7); cBMinPlayer.currentTime = 0;}, false);
  cBMinPlayer.addEventListener("ended", function() {returnColor(cBM1, cBM2, cBM3, cBM4, cBM5, cBM6, cBM7); cBMinPlayer.currentTime = 0;}, false);

// F SHARP MAJOR

let fSPlayer = document.getElementById("f-sharp-player");
let fS1 = document.getElementById("f-s-1");
let fS2 = document.getElementById("f-s-2");
let fS3 = document.getElementById("f-s-3");
let fS4 = document.getElementById("f-s-4");
let fS5 = document.getElementById("f-s-5");
let fS6 = document.getElementById("f-s-6");
let fS7 = document.getElementById("f-s-7");

  fSPlayer.addEventListener("play", 
  function() {changeColor(fS1, fS2, fS3, fS4, fS5, fS6, fS7);}, false
  );

  fSPlayer.addEventListener("pause", function() {returnColor(fS1, fS2, fS3, fS4, fS5, fS6, fS7); fSPlayer.currentTime = 0}, false);
  fSPlayer.addEventListener("ended", function() {returnColor(fS1, fS2, fS3, fS4, fS5, fS6, fS7); fSPlayer.currentTime = 0}, false);

// d sharp minor

let dSMPlayer = document.getElementById("d-sharp-min-player");
let dSM1 = document.getElementById("d-s-m-1");
let dSM2 = document.getElementById("d-s-m-2");
let dSM3 = document.getElementById("d-s-m-3");
let dSM4 = document.getElementById("d-s-m-4");
let dSM5 = document.getElementById("d-s-m-5");
let dSM6 = document.getElementById("d-s-m-6");
let dSM7 = document.getElementById("d-s-m-7");

  dSMinPlayer.addEventListener("play", 
  function() {changeColor(dSM1, dSM2, dSM3, dSM4, dSM5, dSM6, dSM7);}, false
);

  dSMinPlayer.addEventListener("pause", function() {returnColor(dSM1, dSM2, dSM3, dSM4, dSM5, dSM6, dSM7); dSMinPlayer.currentTime = 0;}, false);
  dSMinPlayer.addEventListener("ended", function() {returnColor(dSM1, dSM2, dSM3, dSM4, dSM5, dSM6, dSM7); dSMinPlayer.currentTime = 0;}, false);

// G FLAT MAJOR

let gBPlayer = document.getElementById("g-flat-player");
let gB1 = document.getElementById("g-b-1");
let gB2 = document.getElementById("g-b-2");
let gB3 = document.getElementById("g-b-3");
let gB4 = document.getElementById("g-b-4");
let gB5 = document.getElementById("g-b-5");
let gB6 = document.getElementById("g-b-6");
let gB7 = document.getElementById("g-b-7");

  gBPlayer.addEventListener("play", 
  function() {changeColor(gB1, gB2, gB3, gB4, gB5, gB6, gB7);}, false
  );

  gBPlayer.addEventListener("pause", function() {returnColor(gB1, gB2, gB3, gB4, gB5, gB6, gB7); gBPlayer.currentTime = 0}, false);
  gBPlayer.addEventListener("ended", function() {returnColor(gB1, gB2, gB3, gB4, gB5, gB6, gB7); gBPlayer.currentTime = 0}, false);

// e flat minor

let eBMinPlayer = document.getElementById("e-flat-min-player");
let eBM1 = document.getElementById("e-b-m-1");
let eBM2 = document.getElementById("e-b-m-2");
let eBM3 = document.getElementById("e-b-m-3");
let eBM4 = document.getElementById("e-b-m-4");
let eBM5 = document.getElementById("e-b-m-5");
let eBM6 = document.getElementById("e-b-m-6");
let eBM7 = document.getElementById("e-b-m-7");

  eBMinPlayer.addEventListener("play", 
  function() {changeColor(eBM1, eBM2, eBM3, eBM4, eBM5, eBM6, eBM7);}, false
);

  eBMinPlayer.addEventListener("pause", function() {returnColor(eBM1, eBM2, eBM3, eBM4, eBM5, eBM6, eBM7); eBMinPlayer.currentTime = 0;}, false);
  eBMinPlayer.addEventListener("ended", function() {returnColor(eBM1, eBM2, eBM3, eBM4, eBM5, eBM6, eBM7); eBMinPlayer.currentTime = 0;}, false);

// D FLAT MAJOR

let dBPlayer = document.getElementById("d-flat-player");
let dB1 = document.getElementById("d-b-1");
let dB2 = document.getElementById("d-b-2");
let dB3 = document.getElementById("d-b-3");
let dB4 = document.getElementById("d-b-4");
let dB5 = document.getElementById("d-b-5");
let dB6 = document.getElementById("d-b-6");
let dB7 = document.getElementById("d-b-7");

  dBPlayer.addEventListener("play", 
  function() {changeColor(dB1, dB2, dB3, dB4, dB5, dB6, dB7);}, false
  );

  dBPlayer.addEventListener("pause", function() {returnColor(dB1, dB2, dB3, dB4, dB5, dB6, dB7); dBPlayer.currentTime = 0}, false);
  dBPlayer.addEventListener("ended", function() {returnColor(dB1, dB2, dB3, dB4, dB5, dB6, dB7); dBPlayer.currentTime = 0}, false);

// b flat minor
  let bBMinPlayer = document.getElementById("b-flat-min-player");
  let bBM1 = document.getElementById("b-b-m-1");
  let bBM2 = document.getElementById("b-b-m-2");
  let bBM3 = document.getElementById("b-b-m-3");
  let bBM4 = document.getElementById("b-b-m-4");
  let bBM5 = document.getElementById("b-b-m-5");
  let bBM6 = document.getElementById("b-b-m-6");
  let bBM7 = document.getElementById("b-b-m-7");
  
    bBMinPlayer.addEventListener("play", 
    function() {changeColor(bBM1, bBM2, bBM3, bBM4, bBM5, bBM6, bBM7);}, false
  );
  
    bBMinPlayer.addEventListener("pause", function() {returnColor(bBM1, bBM2, bBM3, bBM4, bBM5, bBM6, bBM7); bBMinPlayer.currentTime = 0;}, false);
    bBMinPlayer.addEventListener("ended", function() {returnColor(bBM1, bBM2, bBM3, bBM4, bBM5, bBM6, bBM7); bBMinPlayer.currentTime = 0;}, false);

// C SHARP MAJOR

let cSPlayer = document.getElementById("c-sharp-player");
let cS1 = document.getElementById("c-s-1");
let cS2 = document.getElementById("c-s-2");
let cS3 = document.getElementById("c-s-3");
let cS4 = document.getElementById("c-s-4");
let cS5 = document.getElementById("c-s-5");
let cS6 = document.getElementById("c-s-6");
let cS7 = document.getElementById("c-s-7");

  cSPlayer.addEventListener("play", 
  function() {changeColor(cS1, cS2, cS3, cS4, cS5, cS6, cS7);}, false
  );

  cSPlayer.addEventListener("pause", function() {returnColor(cS1, cS2, cS3, cS4, cS5, cS6, cS7); cSPlayer.currentTime = 0}, false);
  cSPlayer.addEventListener("ended", function() {returnColor(cS1, cS2, cS3, cS4, cS5, cS6, cS7); cSPlayer.currentTime = 0}, false);

// A FLAT MAJOR

let aBPlayer = document.getElementById("a-flat-player");
let aB1 = document.getElementById("a-b-1");
let aB2 = document.getElementById("a-b-2");
let aB3 = document.getElementById("a-b-3");
let aB4 = document.getElementById("a-b-4");
let aB5 = document.getElementById("a-b-5");
let aB6 = document.getElementById("a-b-6");
let aB7 = document.getElementById("a-b-7");

  aBPlayer.addEventListener("play", 
  function() {changeColor(aB1, aB2, aB3, aB4, aB5, aB6, aB7);}, false
  );

  aBPlayer.addEventListener("pause", function() {returnColor(aB1, aB2, aB3, aB4, aB5, aB6, aB7); aBPlayer.currentTime = 0}, false);
  aBPlayer.addEventListener("ended", function() {returnColor(aB1, aB2, aB3, aB4, aB5, aB6, aB7); aBPlayer.currentTime = 0}, false);

// f minor 

let fMinPlayer = document.getElementById("f-min-player");
let fM1 = document.getElementById("f-m-1");
let fM2 = document.getElementById("f-m-2");
let fM3 = document.getElementById("f-m-3");
let fM4 = document.getElementById("f-m-4");
let fM5 = document.getElementById("f-m-5");
let fM6 = document.getElementById("f-m-6");
let fM7 = document.getElementById("f-m-7");

  fMinPlayer.addEventListener("play", 
  function() {changeColor(fM1, fM2, fM3, fM4, fM5, fM6, fM7);}, false
);

  fMinPlayer.addEventListener("pause", function() {returnColor(fM1, fM2, fM3, fM4, fM5, fM6, fM7); fMinPlayer.currentTime = 0;}, false);
  fMinPlayer.addEventListener("ended", function() {returnColor(fM1, fM2, fM3, fM4, fM5, fM6, fM7); fMinPlayer.currentTime = 0;}, false);

// E FLAT MAJOR 

let eBPlayer = document.getElementById("e-flat-player");
let eB1 = document.getElementById("e-b-1");
let eB2 = document.getElementById("e-b-2");
let eB3 = document.getElementById("e-b-3");
let eB4 = document.getElementById("e-b-4");
let eB5 = document.getElementById("e-b-5");
let eB6 = document.getElementById("e-b-6");
let eB7 = document.getElementById("e-b-7");

  eBPlayer.addEventListener("play", 
  function() {changeColor(eB1, eB2, eB3, eB4, eB5, eB6, eB7);}, false
  );

  eBPlayer.addEventListener("pause", function() {returnColor(eB1, eB2, eB3, eB4, eB5, eB6, eB7); eBPlayer.currentTime = 0}, false);
  eBPlayer.addEventListener("ended", function() {returnColor(eB1, eB2, eB3, eB4, eB5, eB6, eB7); eBPlayer.currentTime = 0}, false);

// c minor

let cMinPlayer = document.getElementById("c-min-player");
let cM1 = document.getElementById("c-m-1");
let cM2 = document.getElementById("c-m-2");
let cM3 = document.getElementById("c-m-3");
let cM4 = document.getElementById("c-m-4");
let cM5 = document.getElementById("c-m-5");
let cM6 = document.getElementById("c-m-6");
let cM7 = document.getElementById("c-m-7");

  cMinPlayer.addEventListener("play", 
  function() {changeColor(cM1, cM2, cM3, cM4, cM5, cM6, cM7);}, false
);

  cMinPlayer.addEventListener("pause", function() {returnColor(cM1, cM2, cM3, cM4, cM5, cM6, cM7); cMinPlayer.currentTime = 0;}, false);
  cMinPlayer.addEventListener("ended", function() {returnColor(cM1, cM2, cM3, cM4, cM5, cM6, cM7); cMinPlayer.currentTime = 0;}, false);

// B FLAT MAJOR

let bBPlayer = document.getElementById("b-flat-player");
let bB1 = document.getElementById("b-b-1");
let bB2 = document.getElementById("b-b-2");
let bB3 = document.getElementById("b-b-3");
let bB4 = document.getElementById("b-b-4");
let bB5 = document.getElementById("b-b-5");
let bB6 = document.getElementById("b-b-6");
let bB7 = document.getElementById("b-b-7");

  bBPlayer.addEventListener("play", 
  function() {changeColor(bB1, bB2, bB3, bB4, bB5, bB6, bB7);}, false
  );

  bBPlayer.addEventListener("pause", function() {returnColor(bB1, bB2, bB3, bB4, bB5, bB6, bB7); bBPlayer.currentTime = 0}, false);
  bBPlayer.addEventListener("ended", function() {returnColor(bB1, bB2, bB3, bB4, bB5, bB6, bB7); bBPlayer.currentTime = 0}, false);

// g minor

let gMinPlayer = document.getElementById("g-min-player");
let gM1 = document.getElementById("g-m-1");
let gM2 = document.getElementById("g-m-2");
let gM3 = document.getElementById("g-m-3");
let gM4 = document.getElementById("g-m-4");
let gM5 = document.getElementById("g-m-5");
let gM6 = document.getElementById("g-m-6");
let gM7 = document.getElementById("g-m-7");

  gMinPlayer.addEventListener("play", 
  function() {changeColor(gM1, gM2, gM3, gM4, gM5, gM6, gM7);}, false
);

  gMinPlayer.addEventListener("pause", function() {returnColor(gM1, gM2, gM3, gM4, gM5, gM6, gM7); gMinPlayer.currentTime = 0;}, false);
  gMinPlayer.addEventListener("ended", function() {returnColor(gM1, gM2, gM3, gM4, gM5, gM6, gM7); gMinPlayer.currentTime = 0;}, false);
  
// F MAJOR

let fPlayer = document.getElementById("f-player");
let f1 = document.getElementById("f-1");
let f2 = document.getElementById("f-2");
let f3 = document.getElementById("f-3");
let f4 = document.getElementById("f-4");
let f5 = document.getElementById("f-5");
let f6 = document.getElementById("f-6");
let f7 = document.getElementById("f-7");

  fPlayer.addEventListener("play", 
  function() {changeColor(f1, f2, f3, f4, f5, f6, f7);}, false
  );

  fPlayer.addEventListener("pause", function() {returnColor(f1, f2, f3, f4, f5, f6, f7); fPlayer.currentTime = 0}, false);
  fPlayer.addEventListener("ended", function() {returnColor(f1, f2, f3, f4, f5, f6, f7); fPlayer.currentTime = 0}, false);

// d minor

let dMinPlayer = document.getElementById("d-min-player");
let dM1 = document.getElementById("d-m-1");
let dM2 = document.getElementById("d-m-2");
let dM3 = document.getElementById("d-m-3");
let dM4 = document.getElementById("d-m-4");
let dM5 = document.getElementById("d-m-5");
let dM6 = document.getElementById("d-m-6");
let dM7 = document.getElementById("d-m-7");

  dMinPlayer.addEventListener("play", 
  function() {changeColor(dM1, dM2, dM3, dM4, dM5, dM6, dM7);}, false
);

  dMinPlayer.addEventListener("pause", function() {returnColor(dM1, dM2, dM3, dM4, dM5, dM6, dM7); dMinPlayer.currentTime = 0;}, false);
  dMinPlayer.addEventListener("ended", function() {returnColor(dM1, dM2, dM3, dM4, dM5, dM6, dM7); dMinPlayer.currentTime = 0;}, false);

// Audio Event Functions
  function changeColor(item1, item2, item3, item4, item5, item6, item7) {
    setTimeout(function() {item1.style.color = "blue";}, 1000);
    setTimeout(function() {item2.style.color = "blue";}, 2000);
    setTimeout(function () {item3.style.color = "blue";}, 3000);
    setTimeout(function() {item4.style.color = "blue";}, 4000);
    setTimeout(function() {item5.style.color = "blue";}, 5000);
    setTimeout(function() {item6.style.color = "blue";}, 6000);
    setTimeout(function() {item7.style.color = "blue";}, 7000);
  }

  function returnColor(item1, item2, item3, item4, item5, item6, item7) {
    let items = [item1, item2, item3, item4, item5, item6, item7];
    for(let i = 0; i < items.length; i++) {
      items[i].style.color = "black";
    }
  }


// Timeout Issues
// function handlingTimeouts(player, scale, item1, item2, item3, item4, item5, item6, item7) {
//     let a = setTimeout(function() {item1.style.color = "blue";}, 1000);
//     let b = setTimeout(function() {item2.style.color = "blue";}, 2000);
//     let c = setTimeout(function () {item3.style.color = "blue";}, 3000);
//     let d = setTimeout(function() {item4.style.color = "blue";}, 4000);
//     let e = setTimeout(function() {item5.style.color = "blue";}, 5000);
//     let f = setTimeout(function() {item6.style.color = "blue";}, 6000);
//     let g =setTimeout(function() {item7.style.color = "blue";}, 7000);
//   if(player.play()) {
//     setTimeout(function() {item1.style.color = "blue";}, 1000);
//     setTimeout(function() {item2.style.color = "blue";}, 2000);
//     setTimeout(function () {item3.style.color = "blue";}, 3000);
//     setTimeout(function() {item4.style.color = "blue";}, 4000);
//     setTimeout(function() {item5.style.color = "blue";}, 5000);
//     setTimeout(function() {item6.style.color = "blue";}, 6000);
//     setTimeout(function() {item7.style.color = "blue";}, 7000);
//   } else if (player.pause() || player.ended()) {
//     clearTimeout(a);
//     clearTimeout(b);
//     clearTimeout(c);
//     clearTimeout(d);
//     clearTimeout(e);
//     clearTimeout(f);
//     clearTimeout(g);
//     for(let i = 0; i < scale.length; i++) {
//       scale[i].style.color = "black";
//     }
//   }
// }

// cPlayer.addEventListener("play", 
// function() {changeScale(cPlayer, c1, c2, c3, c4, c5, c6, c7);}, false
// );

// function changeScale(player, item1, item2, item3, item4, item5, item6, item7) {
//   switch(player.currentTime) {
//     case 1:
//       item1.style.color = "blue";
//       break;
//     case 2:
//       item2.style.color = "blue";
//       break;
//     case 3:
//       item3.style.color = "blue";
//       break;
//     case 4:
//       item4.style.color = "blue";
//       break;
//     case 5:
//       item5.style.color = "blue";
//       break;
//     case 6:
//       item6.style.color = "blue";
//       break;
//     case 7:
//       item7.style.color = "blue";
//       break;
//   }
// }


