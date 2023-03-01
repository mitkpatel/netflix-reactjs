// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4W0LyfU7fcI_OhVzT_zZmuAZzy7WZVbQ",
  authDomain: "netflix-reactjs-49573.firebaseapp.com",
  projectId: "netflix-reactjs-49573",
  storageBucket: "netflix-reactjs-49573.appspot.com",
  messagingSenderId: "579626769173",
  appId: "1:579626769173:web:eae541a9b0a6891470671c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
