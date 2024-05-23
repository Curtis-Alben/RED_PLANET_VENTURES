// Check if js is linked
console.log("work work work work work")

let book = document.querySelector("#book");

var modal = document.querySelector("#myModal");

var span = document.getElementsByClassName("close")[0];

book.addEventListener("click",()=>{ modal.style.display = "block";})

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }