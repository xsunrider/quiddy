// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHdJGqEsQqvenHZ3YpV6PljZVlq-6mls0",
  authDomain: "quiddychat.firebaseapp.com",
  databaseURL: "https://quiddychat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quiddychat",
  storageBucket: "quiddychat.firebasestorage.app",
  messagingSenderId: "774184119891",
  appId: "1:774184119891:web:0a51bec4499326515c60a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);