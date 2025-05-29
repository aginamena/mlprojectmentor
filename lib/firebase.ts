// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWcw1FEwrLZfML6qWIVV8CJSRwBsHDjc8",
  authDomain: "ml-project-mentor.firebaseapp.com",
  projectId: "ml-project-mentor",
  storageBucket: "ml-project-mentor.firebasestorage.app",
  messagingSenderId: "910301669215",
  appId: "1:910301669215:web:1e63173d4763170d1178ea",
  measurementId: "G-CC6CHCT9S3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
