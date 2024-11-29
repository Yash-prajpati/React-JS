// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoFYuFhcWu5nHHCXMo6HWMS8urIZq_VIg",
  authDomain: "pr12-database.firebaseapp.com",
  projectId: "pr12-database",
  storageBucket: "pr12-database.firebasestorage.app",
  messagingSenderId: "785934255673",
  appId: "1:785934255673:web:be59e44c676d1372262fe8",
  measurementId: "G-89MT8E7MK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
