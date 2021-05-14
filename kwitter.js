
function addUser() {
  var checkBox = document.querySelector(".check");
  if (checkBox.checked == true) {
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
      localStorage.setItem("user_name", user_name);
      localStorage.setItem("password", password);
        window.location = "kwitter_room.html";
  } else {
     alert("Error. Made by Tchind Technologies.  Pls fill the captcha. ")
  }
    


   
  }



