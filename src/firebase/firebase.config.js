// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqV-4ugDTswdY6hhokXbkKGw7wBCT49RE",
  authDomain: "ema-john-with-firebase-a-f29a2.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f29a2",
  storageBucket: "ema-john-with-firebase-a-f29a2.appspot.com",
  messagingSenderId: "502023003849",
  appId: "1:502023003849:web:de358f74f89a65d2d4b718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;