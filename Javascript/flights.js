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
    price: 25000,
    count: 0
  },
  {
    id: 'neptune',
    name: "Neptune's Cosmic Dive",
    price: 45000,
    count: 0
  },
  {
    id: 'giant',
    name: "The Giant's Journey",
    price: 65000,
    count: 0
  },
  {
    id: 'saturn',
    name: 'Ring Around a Saturn',
    price: 40000,
    count: 0
  },
  {
    id: 'uranus',
    name: 'Uranus Uncharted',
    price: 50000,
    count: 0
  },
  {
    id: 'moon',
    name: 'Moonlight Meander',
    price: 15000,
    count: 0
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

// minus and plus increment to change innerHTml


// mars cart start
let plus = document.querySelector("#plus");
let minus = document.querySelector("#min");
let add = document.querySelector("#add");
let marsCountVal = document.querySelector('.mars-count');
let marsTotalVal = document.querySelector(".mars-total");
let marsTotal = 0;

let plusNept = document.querySelector("#plus-nept");
let minusNept = document.querySelector("#min-nept");
let neptCountVal = document.querySelector('.nept-count');
let neptTotalVal = document.querySelector(".nept-total");
let neptTotal = 0;

let plusGiant = document.querySelector("#plus-giant");
let minusGiant = document.querySelector("#min-giant");

let giantCountVal = document.querySelector('.giant-count');
let giantTotalVal = document.querySelector(".giant-total");
let giantTotal = 0;

let plusSat = document.querySelector("#plus-sat");
let minusSat = document.querySelector("#min-sat");

let satCountVal = document.querySelector('.sat-count');
let satTotalVal = document.querySelector(".sat-total");
let satTotal = 0;

let plusUn = document.querySelector("#plus-un");
let minusUn = document.querySelector("#min-un");

let unCountVal = document.querySelector('.un-count');
let unTotalVal = document.querySelector(".un-total");
let unTotal = 0;

let plusM = document.querySelector("#plus-m");
let minusM = document.querySelector("#min-m");

let mCountVal = document.querySelector('.m-count');
let mTotalVal = document.querySelector(".m-total");
let mTotal = 0;

let totalVal = document.querySelector(".total");
let total = 0;





plus.onclick = function() {
  if (plus.name == 'mars')
  {
    flightsArray[0].count+= 1;
    marsCountVal.innerHTML = flightsArray[0].count;
    marsTotalVal.innerHTML = flightsArray[0].count*25000;
    marsTotal = flightsArray[0].count*25000;
    total+=marsTotal;
    totalVal.innerHTML = total;
    
  }
}

minus.onclick = function() {
  if (minus.name == 'mars' &&  flightsArray[0].count > 0)
    {
      flightsArray[0].count-= 1;
      marsCountVal.innerHTML = flightsArray[0].count;
      marsTotalVal.innerHTML = flightsArray[0].count*25000;
      total-=marsTotal;
      marsTotal = flightsArray[0].count*25000;
      totalVal.innerHTML = total;
    }
  }
// mars cart end





plusNept.onclick = function() {
 
    flightsArray[1].count+= 1;
    neptCountVal.innerHTML = flightsArray[1].count;
    neptTotalVal.innerHTML = flightsArray[1].count*45000;
    neptTotal = flightsArray[1].count*45000;
    console.log(neptTotal)
    total+=neptTotal;
    totalVal.innerHTML = total;
    console.log(total)
}

minusNept.onclick = function() {
  if (flightsArray[1].count > 0)
    {
      flightsArray[1].count-= 1;
      neptCountVal.innerHTML = flightsArray[1].count;
      neptTotalVal.innerHTML = flightsArray[1].count*45000;
      total-=neptTotal;
      neptTotal = flightsArray[1].count*45000;
      totalVal.innerHTML = total;
    }
  }
// end neptune



plusGiant.onclick = function() {
 
    flightsArray[2].count+= 1;
    giantCountVal.innerHTML = flightsArray[2].count;
    giantTotalVal.innerHTML = flightsArray[2].count*65000;
    giantTotal = flightsArray[2].count*65000;
    total+=giantTotal;
    totalVal.innerHTML = total;
}

minusGiant.onclick = function() {
  if (flightsArray[2].count > 0)
    {
      flightsArray[2].count-= 1;
      giantCountVal.innerHTML = flightsArray[2].count;
      giantTotalVal.innerHTML = flightsArray[2].count*65000;
      total-=giantTotal;
      giantTotal = flightsArray[2].count*65000;
      totalVal.innerHTML = total;
    }
  }

// end giant





plusSat.onclick = function() {
 
    flightsArray[3].count+= 1;
    satCountVal.innerHTML = flightsArray[3].count;
    satTotalVal.innerHTML = flightsArray[3].count*40000;
    satTotal = flightsArray[3].count*40000;
    total+=satTotal;
    totalVal.innerHTML = total;
}

minusSat.onclick = function() {
  if (flightsArray[3].count > 0)
    {
      flightsArray[3].count-= 1;
      satCountVal.innerHTML = flightsArray[3].count;
      satTotalVal.innerHTML = flightsArray[3].count*40000;
      total-=satTotal;
      satTotal = flightsArray[3].count*40000;
      totalVal.innerHTML = total;
    }
  }

// end saturn



plusUn.onclick = function() {
 
    flightsArray[4].count+= 1;
    unCountVal.innerHTML = flightsArray[4].count;
    unTotalVal.innerHTML = flightsArray[4].count*50000;
    unTotal = flightsArray[4].count*50000;
    total+=unTotal;
    totalVal.innerHTML = total;
}

minusUn.onclick = function() {
  if (flightsArray[4].count > 0)
    {
      flightsArray[4].count-= 1;
      unCountVal.innerHTML = flightsArray[4].count;
      unTotalVal.innerHTML = flightsArray[4].count*50000;
      total-=unTotal;
      unTotal = flightsArray[4].count*50000;
      totalVal.innerHTML = total;
    }
  }

  // end uranus
  
  plusM.onclick = function() {
   
      flightsArray[5].count+= 1;
      mCountVal.innerHTML = flightsArray[5].count;
      mTotalVal.innerHTML = flightsArray[5].count*15000;
      mTotal = flightsArray[5].count*15000;
      total+=mTotal;
      totalVal.innerHTML = total;
  }
  
  minusM.onclick = function() {
    if (flightsArray[5].count > 0)
      {
        flightsArray[5].count-= 1;
        mCountVal.innerHTML = flightsArray[5].count;
        mTotalVal.innerHTML = flightsArray[5].count*15000;
        total-=mTotal;
        mTotal = flightsArray[5].count*15000;
        totalVal.innerHTML = total;
      }
    }



add.onclick = function() {
  console.log(flightsArray)
  if(!bookedFlightsArray.includes(flightsArray[0]) && add.name == "mars"){
    bookedFlightsArray.push(flightsArray[0]);
    addToCart();

  } 
}

// creates divs with name of flight and amount of tickets
