function showForm() {
    document.getElementById("form-content").style.display = "flex";
}

let form = document.getElementById("form");

function submitForm(event) {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let ticket = document.getElementById("ticket");
    let form = document.getElementsByTagName("form");
    event.preventDefault();
  
    if (name.value == "" || email.value == "") {
      alert("check your form again");
      return
    } 

      alert("Your form has been submitted");

      console.log(name.value);
      console.log(email.value);
      console.log(message.value);

      name.value = "";
      email.value = "";
      phone.value = "";
      ticket.value ="";
      message.value = "";
    
}



