const firebaseConfig = {
      apiKey: "AIzaSyBQCtTREniY8u9RCIoGEB2_mhQBWWHN_FM",
      authDomain: "kwitter-fc1be.firebaseapp.com",
      databaseURL: "https://kwitter-fc1be-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc1be",
      storageBucket: "kwitter-fc1be.appspot.com",
      messagingSenderId: "212532085778",
      appId: "1:212532085778:web:d557619d8ee515c84c44cb",
      measurementId: "G-59FF9M5M2Q"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
  
//ADD YOUR FIREBASE LINKS HERE



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html"
}