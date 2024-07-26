// Check if js is linked
console.log("work work work work work")

let cart = document.querySelector("#cart");

var modal = document.querySelector("#myModal");

var span = document.getElementsByClassName("close")[0];

cart.addEventListener("click",()=>{ modal.style.display = "block";})

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


flightsArray = [
  {
    id: 'mars',
    name: 'The Classic Mars Experience',
    price: 25000
  },
  {
    id: 'neptune',
    name: "Neptune's Cosmic Dive",
    price: 25000
  },
  {
    id: 'giant',
    name: "The Giant's Journey",
    price: 25000
  },
  {
    id: 'saturn',
    name: 'Ring Around a Saturn',
    price: 25000
  },
  {
    id: 'uranus',
    name: 'Uranus Uncharted',
    price: 25000
  },
  {
    id: 'moon',
    name: 'Moonlight Meander',
    price: 15000
  },
]

bookedFlightsArray = []
 
// minus and plus increment to change innerHTML
let plus = document.querySelector("#mars-plus");
let minus = document.querySelector("#mars-min");
let addMars = document.querySelector("#add-mars");
let marsCount = 1;
let marsCountVal = document.querySelector('.mars-count');

plus.onclick = function() {
  marsCount+= 1;
  marsCountVal.innerHTML = marsCount
}

minus.onclick = function() {
  if(marsCount > 1) {
    marsCount-=1;
  }
  marsCountVal.innerHTML = marsCount
}

addMars.onclick = function() {
  if(!bookedFlightsArray.includes("mars")){
    bookedFlightsArray.push('mars');
  }
  console.log(bookedFlightsArray)
}

// creates divs with name of flight and amount of tickets

bookedFlightsArray.forEach(flight => {
  
});