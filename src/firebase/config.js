// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31AkSOvsuEZ0mCizav0QFIS2qLao5k9k",
  authDomain: "e-comerceleonardosolaliga.firebaseapp.com",
  projectId: "e-comerceleonardosolaliga",
  storageBucket: "e-comerceleonardosolaliga.appspot.com",
  messagingSenderId: "859079860238",
  appId: "1:859079860238:web:f882cc1100bda771609c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);