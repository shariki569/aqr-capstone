// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "file-f204f.firebaseapp.com",
  projectId: "file-f204f",
  storageBucket: "file-f204f.appspot.com",
  messagingSenderId: "235675609667",
  appId: "1:235675609667:web:4e1482143f9ef024c842f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);