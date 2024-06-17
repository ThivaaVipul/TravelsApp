// app/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw2DWRwHWo2V6H1pc80Py5y5g8YXhRkMM",
  authDomain: "crown-travels.firebaseapp.com",
  projectId: "crown-travels",
  storageBucket: "crown-travels.appspot.com",
  messagingSenderId: "88557951510",
  appId: "1:88557951510:web:f2e7be8c427310f41f7337",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
