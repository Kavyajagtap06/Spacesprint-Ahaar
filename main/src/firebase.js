// import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyC47ExFZ5YTtYKi_V4rx-M0J35B8taVLOc",
    authDomain: "react-fb-diff-env-ahaar.firebaseapp.com",
    projectId: "react-fb-diff-env-ahaar",
    storageBucket: "react-fb-diff-env-ahaar.appspot.com",
    messagingSenderId: "1047248455448",
    appId: "1:1047248455448:web:8a7e1caf7bf217f5b0806d",
    measurementId: "G-64RL9EC6ZG"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

export { app, auth };

