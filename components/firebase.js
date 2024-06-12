import firebase from "firebase/app";
import "firebase/auth";

export const auth = firsebase.initializeApp({
    apiKey: "AIzaSyBw2DWRwHWo2V6H1pc80Py5y5g8YXhRkMM",
    authDomain: "crown-travels.firebaseapp.com",
    projectId: "crown-travels",
    storageBucket: "crown-travels.appspot.com",
    messagingSenderId: "88557951510",
    appId: "1:88557951510:web:f2e7be8c427310f41f7337"
  }).auth();