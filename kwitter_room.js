  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLqflOJi9rgXsppieBFMn6EvHbh8AMA0c",
    authDomain: "onesearch-kids.firebase.com",
    databaseURL: "https://onesearch-kids-default-rtdb.firebaseio.com",
    projectId: "onesearch-kids",
    storageBucket: "onesearch-kids.appspot.com",
    messagingSenderId: "175270442053",
    appId: "1:175270442053:web:eb1d517908be88f2b55f2c",
    measurementId: "G-WYNB0B6C17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Namaste  " + username + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

               