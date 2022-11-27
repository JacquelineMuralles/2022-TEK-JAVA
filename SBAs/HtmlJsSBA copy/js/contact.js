function contactUs(e){
  e.preventDefault();
  console.log("form submitted");

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");

  if ((!firstName.value.match(/^[a-zA-Z]+$/g))){
    firstName.classList.add("border-danger");
    alert("Please use a valid first name.");
    console.log("incorrect data");

  }else if(!lastName.value.match(/^[a-zA-Z]+$/g)){
    lastName.classList.add("border-danger");
    alert("Please use a valid last name.")

  } else if(!email.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)){
    email.classList.add("border-danger");
    alert("Please use a valid email.");
    
  }else if ((firstName.value.match(/^[a-zA-Z]+$/g)) || (lastName.value.match(/^[a-zA-Z]+$/g)) || (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)){
    alert("Thank you! Your form has been submitted!");
    console.log("correct data");
  }
  
}