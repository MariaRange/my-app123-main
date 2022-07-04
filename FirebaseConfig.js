// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgK13l6fxTznbacnZM5A8NvZGePmpVBE",
  authDomain: "ejemplomovil-4f156.firebaseapp.com",
  projectId: "ejemplomovil-4f156",
  storageBucket: "ejemplomovil-4f156.appspot.com",
  messagingSenderId: "991981761195",
  appId: "1:991981761195:web:f6b48b48b385ee1fd8fdee",
  measurementId: "G-597W4EMBTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);