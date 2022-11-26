function getEvents(e){
  e.preventDefault();
  console.log("submitted form");

  let country = document.getElementById("inputCountry");
  let city = document.getElementById("inputCity");
  let header = document.getElementById("header");
  let eventTable = document.getElementById("eventsTable");

  const events = [
    {
      id : 1,
      activity : "Eat some good BBQ."
    },
    {
      id : 2,
      activity : "Listen to some great music."
    }, 
    {
      id : 3,
      activity : "Go tubing."
    },
    {
      id : 4,
      activity : "Go to Times Square."
    },
    {
      id : 5,
      activity : "See SNL live."
    },
    {
      id : 6,
      activity : "Climb the Empire State Building."
    },
    {
      id : 7,
      activity : "Find a celebrity."
    },
    {
      id : 8,
      activity : "Visit Santa Monica Pier."
    },
    {
      id : 9,
      activity : "Visit the Hollywood Walk Of Fame."
    },
    {
      id : 10,
      activity : "Go to the beach."
    }, 
    {
      id : 11,
      activity : "Shop at the mercado."
    },
    {
      id : 12,
      activity : "Go on a bike tour."
    },
    {
      id : 13,
      activity : "Climb the pyramids at Teotihuacan."
    },
    {
      id : 14,
      activity : "Hot balloon over Teotihuacan."
    },
    {
      id : 15,
      activity : "Float on the river at Xochimilco."
    },
    {
      id : 16,
      activity : "Visit La Casa Azul."
    },
    {
      id : 17,
      activity : "Visit the Louvre Museum."
    },
    {
      id : 18,
      activity : "Visit the Eiffel Tower."
    },
    {
      id : 19,
      activity : "Do a romantic dinner cruz on the Seine River."
    },
    {
      id : 20,
      activity : "Visit an ice bar."
    },
    {
      id : 21,
      activity : "Visit a brewery."
    },
    {
      id : 22,
      activity : "Visit the castles."
    }, 
    {
      id : 23,
      activity : "Go on a private tour."
    },
    {
      id : 24,
      activity : "Visit the Park Guell."
    },
    {
      id : 25, 
      activity : "Visit Sagrada Familia."
    },
    {
      id : 26,
      activity : "Take in a flamenco show."
    },
    {
      id : 27,
      activity : "Go on a Toledo Tour."
    },
    {
      id : 28,
      activity : "Do a tapas and wine tasting tour."
    }, 
    {
      id : 29,
      activity : "Go on the Madrid Royal Palace Tour."
    }
    ];

    // for(let i=0; i < events.length; i++ ){
    //   if(country.value == "United States" && city.value.includes("Austin") && (i >= 0 && i < 3)){
    //     events.innerHTML = `
    //       <tr>
    //         <td>${events[i].id}</td>
    //         <td>${events[i].activity}</td>
    //       </tr>
    //       `
    //   } else if ((country.value == "United States" && inputCity.value.includes("New York City")) && (i > )){
    //     events.innerHTML = `
    //       <tr>
    //         <td>${events[i].id}</td>
    //         <td>${events[i].activity}</td>
    //       </tr>
    //       `
    //   } else if(country.value == "United States" && inputCity.value.includes("Los Angeles") && (i == 7 || i == 8)){

    //   } else if(){

    //   }

    // }
  
  // US
  if((country.value == "United States" && !city.value.includes("US")) || (country.value == "Mexico" && !city.value.includes("MX")) || (country.value == "France" && !city.value.includes("FR")) || (country.value == "Germany" && !city.value.includes("DE"))){

    console.log("this is an error")
    country.classList.add("border-danger");
    city.classList.add("border-danger");
    alert("Please make sure the country and city match before submitting.");

  } else if(country.value == "United States" && city.value.includes("Austin")){

    header.classList.remove("hide");
    let austin = document.getElementById("austin");
    austin.classList.remove("hide");

  } else if(country.value == "United States" && inputCity.value.includes("New York City")){

    header.classList.remove("hide");
    let newYork = document.getElementById("newYork");
    newYork.classList.remove("hide");

  } else if(country.value == "United States" && inputCity.value.includes("Los Angeles")){

    header.classList.remove("hide");
    let la = document.getElementById("la");
    la.classList.remove("hide");

  } else if(country.value == "Mexico" && city.value.includes("Mexico City")){
    
    header.classList.remove("hide");
    let mxCity = document.getElementById("mxCity");
    mxCity.classList.remove("hide");

  } else if(country.value == "Mexico" && city.value.includes("Puerto Escondido")){

    header.classList.remove("hide");
    let pe = document.getElementById("pe");
    pe.classList.remove("hide");
    
  } else if(country.value == "France" && city.value.includes("Paris")){
    
    header.classList.remove("hide");
    let paris = document.getElementById("paris");
    paris.classList.remove("hide");

  } else if(country.value == "Germany" && city.value.includes("Berlin")){

    header.classList.remove("hide");
    let berlin = document.getElementById("berlin");
    berlin.classList.remove("hide");
    
  } else if(country.value == "Germany" && city.value.includes("Munich")){

    header.classList.remove("hide");
    let munich = document.getElementById("munich");
    munich.classList.remove("hide");
    
  } else if(country.value == "Spain" && city.value.includes("Barcelona")){

    header.classList.remove("hide");
    let barcelona = document.getElementById("barcelona");
    barcelona.classList.remove("hide");

  } else if(country.value == "Spain" && city.value.includes("Madrid")){

    header.classList.remove("hide");
    let madrid = document.getElementById("madrid");
    madrid.classList.remove("hide");
    
  }


}