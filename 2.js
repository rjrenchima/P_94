function addUser(){
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "login_index.html";
}

var  firebaseConfig = {
    apiKey: "AIzaSyDa18ILkRlU_mWg28kx3PvUYkG0gQofKrM",
    authDomain: "let-s-chat-web-app-e0670.firebaseapp.com",
    projectId: "let-s-chat-web-app-e0670",
    storageBucket: "let-s-chat-web-app-e0670.appspot.com",
    messagingSenderId: "876957145319",
    appId: "1:876957145319:web:f4f750970be71948d0aa42"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localstorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
