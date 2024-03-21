// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRncdA6y7WIhcAUlhNAPr57vWZ80gedWc",
  authDomain: "bite-battle.firebaseapp.com",
  projectId: "bite-battle",
  storageBucket: "bite-battle.appspot.com",
  messagingSenderId: "1097881345876",
  appId: "1:1097881345876:web:f8430d13688f4bdb5bb2c1",
  measurementId: "G-RLPSB5L2MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const database = getDatabase(app)
