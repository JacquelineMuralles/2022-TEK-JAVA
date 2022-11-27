function getEvents(e){
  e.preventDefault();
  console.log("submitted form");

  let country = document.getElementById("inputCountry");
  let city = document.getElementById("inputCity");
  let header = document.getElementById("header");

  
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