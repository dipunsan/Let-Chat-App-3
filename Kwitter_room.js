var firebaseConfig = {
    apiKey: "AIzaSyC9Tkc9SGC_Kt8vCjLM857e5PaYsdICPhY",
    authDomain: "project---94-79173.firebaseapp.com",
    projectId: "project---94-79173",
    storageBucket: "project---94-79173.appspot.com",
    messagingSenderId: "25809030869",
    appId: "1:25809030869:web:36c4634e31b200917d5c5c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 function addRoom()
 {
     user_name = document.getElementById("user_room").value;
     firebase.database().ref("/").room(user_room).update({
         purpose : "adding room"
     });
 }
 
var firebaseConfig = {
    apiKey: "AIzaSyBJu7SbR92eSBpKHme8n2Aodk7Ys9tpO1U",
    authDomain: "kwitterapp-a251d.firebaseapp.com",
    databaseURL: "https://kwitterapp-a251d-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-a251d",
    storageBucket: "kwitterapp-a251d.appspot.com",
    messagingSenderId: "567079490243",
    appId: "1:567079490243:web:a50d6dfa0a682adea34876"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").room(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
     document.getElementById("output").innerHTML += row;
    
    });});}


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}