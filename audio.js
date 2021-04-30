let cPlayer = document.getElementById("c-player");
let c1 = document.getElementById("c-1")
let c2 = document.getElementById("c-2")
let c3 = document.getElementById("c-3")
let c4 = document.getElementById("c-4")
let c5 = document.getElementById("c-5")
let c6 = document.getElementById("c-6")
let c7 = document.getElementById("c-7")
let scale = [c1, c2, c3, c4, c5, c6, c7];
console.log(cScale);
let colors = ["blue"]
  cPlayer.addEventListener("play", 
  setTimeout(c1.style.color = colors[0], 1000),
  setTimeout(c2.style.color = colors[0], 2000),
  setTimeout(c3.style.color = colors[0], 3000)
  );





