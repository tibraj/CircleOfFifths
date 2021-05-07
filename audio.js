
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

// e flat minor

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


