function addUser(){
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "login_index.html";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDa18ILkRlU_mWg28kx3PvUYkG0gQofKrM",
    authDomain: "let-s-chat-web-app-e0670.firebaseapp.com",
    projectId: "let-s-chat-web-app-e0670",
    storageBucket: "let-s-chat-web-app-e0670.appspot.com",
    messagingSenderId: "876957145319",
    appId: "1:876957145319:web:f4f750970be71948d0aa42"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);




