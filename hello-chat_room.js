// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCp9UkthKf7jSX4nxcgTnc8BxL-_nFPeXo",
  authDomain: "project-95-c673f.firebaseapp.com",
  databaseURL: "https://project-95-c673f-default-rtdb.firebaseio.com",
  projectId: "project-95-c673f",
  storageBucket: "project-95-c673f.appspot.com",
  messagingSenderId: "124890111441",
  appId: "1:124890111441:web:299bf538380cd8f84714f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   //End code
   });});}
getData();

var welcome = localStorage.getItem("user_name");