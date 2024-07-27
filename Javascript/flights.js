// Check if js is linked
console.log("work work work work work")

let cart = document.querySelector("#cart");

var modal = document.querySelector("#myModal");

var span = document.getElementsByClassName("close")[0];

cart.addEventListener("click",()=>{ modal.style.display = "block";})

span.onclick = function() {
    modal.style.display = "none";
  }

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }


flightsArray = [
  {
    id: 'mars',
    name: 'The Classic Mars Experience',
    price: 25000,
    count: 1
  },
  {
    id: 'neptune',
    name: "Neptune's Cosmic Dive",
    price: 25000,
    count: 1
  },
  {
    id: 'giant',
    name: "The Giant's Journey",
    price: 25000,
    count: 1
  },
  {
    id: 'saturn',
    name: 'Ring Around a Saturn',
    price: 25000,
    count: 1
  },
  {
    id: 'uranus',
    name: 'Uranus Uncharted',
    price: 25000,
    count: 1
  },
  {
    id: 'moon',
    name: 'Moonlight Meander',
    price: 15000,
    count: 1
  },
]

bookedFlightsArray = []

function addToCart(){
  for (let i = 0; i < bookedFlightsArray.length; i++){
    let div = document.createElement("div");
    let btn = document.createElement("button");
    let btnPlus = document.createElement("button");
    let btnMinus = document.createElement("button");
    div.style.width = "500px";
    div.style.height = "30px";
    div.style.background = "white";
    div.style.color = "black";
    div.innerHTML = `${flightsArray[i].name}`;
    btn.style.color = "black"
    btn.innerHTML = `${flightsArray[i].count}`;
    btnPlus.id = "plus";
    btnMinus.id = "minus";
    btnPlus.innerHTML = "+";
    btnMinus.innerHTML = "-";
    document.getElementById("cart-content").appendChild(div);
    document.getElementById("cart-content").appendChild(btnMinus);
    document.getElementById("cart-content").appendChild(btn);
    document.getElementById("cart-content").appendChild(btnPlus);
  
  }
}

// minus and plus increment to change innerHTML

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".min");
let add = document.querySelectorAll(".add");
let marsCount = 1;
let neptuneCount = 1;
let giantCount = 1;
let saturnCount = 1;
let uranusCount = 1;
let moonCount = 1;
let marsCountVal = document.querySelector('.mars-count');

plus.onclick = function() {
  console.log(plus.name);
  if (plus.name == 'mars')
  {
    flightsArray[0].count+= 1;
    marsCountVal.innerHTML = flightsArray[0].count;
  }
  else if (plus.name == 'neptune')
    {   
      flightsArray[0].count+= 1;
      marsCountVal.innerHTML = flightsArray[0].count;}
  else if (plus.name == 'giant')
    {   
      flightsArray[0].count+= 1;
      marsCountVal.innerHTML = flightsArray[0].count;}
  else if (plus.name == 'saturn')
    {   
      flightsArray[0].count+= 1;
      marsCountVal.innerHTML = flightsArray[0].count;}
  else if (plus.name == 'uranus')
    {   
      flightsArray[0].count+= 1;
      marsCountVal.innerHTML = flightsArray[0].count;}
  else if (plus.name == 'moon')
    {   
      flightsArray[0].count+= 1;
      marsCountVal.innerHTML = flightsArray[0].count;}
}

minus.onclick = function() {
  if (minus.name == 'mars' &&  flightsArray[0].count > 1)
    {
      flightsArray[0].count-= 1;
      marsCountVal.innerHTML = flightsArray[0].count;
    }
    else if (plus.name == 'neptune')
      {   
        flightsArray[0].count+= 1;
        marsCountVal.innerHTML = flightsArray[0].count;}
    else if (plus.name == 'giant')
      {   
        flightsArray[0].count+= 1;
        marsCountVal.innerHTML = flightsArray[0].count;}
    else if (plus.name == 'saturn')
      {   
        flightsArray[0].count+= 1;
        marsCountVal.innerHTML = flightsArray[0].count;}
    else if (plus.name == 'uranus')
      {   
        flightsArray[0].count+= 1;
        marsCountVal.innerHTML = flightsArray[0].count;}
    else if (plus.name == 'moon')
      {   
        flightsArray[0].count+= 1;
        marsCountVal.innerHTML = flightsArray[0].count;}
  }


add.onclick = function() {
  if(!bookedFlightsArray.includes(flightsArray[0]) && add.name == "mars"){
    bookedFlightsArray.push(flightsArray[0]);
    addToCart();

  } else if (!bookedFlightsArray.includes(flightsArray[1]) && add.name == "neptune"){
    bookedFlightsArray.push(flightsArray[1]);
    addToCart();

  }else if (!bookedFlightsArray.includes(flightsArray[2]) && add.name == "giant"){
    bookedFlightsArray.push(flightsArray[2]);
    addToCart();

  }

}

// creates divs with name of flight and amount of tickets



