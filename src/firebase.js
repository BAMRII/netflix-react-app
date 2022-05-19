// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb3BXZNhna9HW-ApQ5ltbEnWVdGQO6cRI",
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-react-d0cb6.firebaseapp.com",
  projectId: "netflix-react-d0cb6",
  storageBucket:"netflix-react-d0cb6.appspot.com",
  messagingSenderId: "470874596178",
  appId:"1:470874596178:web:73ba78eeb96fc7fc99908b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)