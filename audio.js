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

  cPlayer.addEventListener("pause", function() {returnColor(c1, c2, c3, c4, c5, c6, c7);}, false);

  function changeColor(item1, item2, item3, item4, item5, item6, item7) {
    setTimeout(function() {item1.style.color = "blue";}, 1000),
    setTimeout(function() {item2.style.color = "blue";}, 2000),
    setTimeout(function () {item3.style.color = "blue";}, 3000),
    setTimeout(function() {item4.style.color = "blue";}, 4000),
    setTimeout(function() {item5.style.color = "blue";}, 5000),
    setTimeout(function() {item6.style.color = "blue";}, 6000),
    setTimeout(function() {item7.style.color = "blue";}, 7000)
  }

  // function returnColor(item1, item2, item3, item4, item5, item6, item7) {
  //   item1.style.color = "black";
  //   item2.style.color = "black";
  //   item3.style.color = "black";
  //   item4.style.color = "black";
  //   item5.style.color = "black";
  //   item6.style.color = "black";
  //   item7.style.color = "black";
  // }




