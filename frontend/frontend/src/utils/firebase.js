import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyDDBpYTJTladLYupRNWzFeB-9xdOVTFzpQ",
    authDomain: "stadafint-4be35.firebaseapp.com",
    databaseURL: "https://stadafint-4be35-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stadafint-4be35",
    storageBucket: "stadafint-4be35.appspot.com",
    messagingSenderId: "679439977501",
    appId: "1:679439977501:web:1d2aa173ac6634773b4af4",
    measurementId: "G-1WMLRLZFV0"
});
export const auth = firebase.auth();
