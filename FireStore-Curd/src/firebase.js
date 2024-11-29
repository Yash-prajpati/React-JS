// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);