// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsvBxq7boMTU2n8okwjIvh6uBMHlzxtZo",
    authDomain: "car-doctor-client-ed6db.firebaseapp.com",
    projectId: "car-doctor-client-ed6db",
    storageBucket: "car-doctor-client-ed6db.appspot.com",
    messagingSenderId: "581684555542",
    appId: "1:581684555542:web:d4d5e11963d93ed13eea37"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;