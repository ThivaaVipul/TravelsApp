// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiw0GAbw_NDIXAu-hytDkmcbkoXUYkPhw",
  authDomain: "moneytracker-fb975.firebaseapp.com",
  databaseURL: "https://moneytracker-fb975-default-rtdb.firebaseio.com",
  projectId: "moneytracker-fb975",
  storageBucket: "moneytracker-fb975.appspot.com",
  messagingSenderId: "682829495400",
  appId: "1:682829495400:web:fb35afac7f0105ccc68fdd",
  measurementId: "G-PHTGTM410L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
