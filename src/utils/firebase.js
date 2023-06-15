// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO8cmmDVPRYIiu15Xo9IWfYc9OlKHUSGE",
  authDomain: "alex-project-a6589.firebaseapp.com",
  databaseURL: "https://alex-project-a6589-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alex-project-a6589",
  storageBucket: "alex-project-a6589.appspot.com",
  messagingSenderId: "27023599085",
  appId: "1:27023599085:web:a18e35a163ed052c90b3e4",
  measurementId: "G-2WJ7GNE6NQ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;