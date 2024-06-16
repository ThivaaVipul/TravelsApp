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
  apiKey: "AIzaSyBiw0GAbw_NDIXAu-hytDkmcbkoXUYkPhw",
  authDomain: "moneytracker-fb975.firebaseapp.com",
  databaseURL: "https://moneytracker-fb975-default-rtdb.firebaseio.com",
  projectId: "moneytracker-fb975",
  storageBucket: "moneytracker-fb975.appspot.com",
  messagingSenderId: "682829495400",
  appId: "1:682829495400:web:fb35afac7f0105ccc68fdd",
  measurementId: "G-PHTGTM410L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
