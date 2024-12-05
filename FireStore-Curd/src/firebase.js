// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD3DPmD1ZdI93e8jGJ3jYFWjncH9_3AC8",
  authDomain: "firestore-d9d7a.firebaseapp.com",
  projectId: "firestore-d9d7a",
  storageBucket: "firestore-d9d7a.firebasestorage.app",
  messagingSenderId: "917558236257",
  appId: "1:917558236257:web:a4380f991029cdca934620",
  measurementId: "G-33261YBNXN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider()
