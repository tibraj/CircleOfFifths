
// C MAJOR
let cPlayer = document.getElementById("c-player");
let c1 = document.getElementById("c-1")
let c2 = document.getElementById("c-2")
let c3 = document.getElementById("c-3")
let c4 = document.getElementById("c-4")
let c5 = document.getElementById("c-5")
let c6 = document.getElementById("c-6")
let c7 = document.getElementById("c-7")
let scale = [c1, c2, c3, c4, c5, c6, c7];

  cPlayer.addEventListener("play", 
  function() {changeColor(c1, c2, c3, c4, c5, c6, c7);}, false
  );

  cPlayer.addEventListener("pause", function() {returnColor(c1, c2, c3, c4, c5, c6, c7); cPlayer.currentTime = 0}, false);
  cPlayer.addEventListener("ended", function() {returnColor(c1, c2, c3, c4, c5, c6, c7); cPlayer.currentTime = 0}, false);

// a minor

let aMinPlayer = document.getElementById("a-min-player");
let aM1 = document.getElementById("a-1")
let aM2 = document.getElementById("a-2")
let aM3 = document.getElementById("a-3")
let aM4 = document.getElementById("a-4")
let aM5 = document.getElementById("a-5")
let aM6 = document.getElementById("a-6")
let aM7 = document.getElementById("a-7")

  aMinPlayer.addEventListener("play", 
  function() {changeColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7);}, false
);

  aMinPlayer.addEventListener("pause", function() {returnColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7);}, false);
  aMinPlayer.addEventListener("ended", function() {returnColor(aM1, aM2, aM3, aM4, aM5, aM6, aM7);}, false);




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




