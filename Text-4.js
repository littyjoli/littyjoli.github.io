var btn = document.getElementById("btn");
var count = document.getElementById("clicks"); 
var counter = 1;
btn.addEventListener("onclick", count());
function count() {
  counter++;
}

clicks.innerHTML = counter;