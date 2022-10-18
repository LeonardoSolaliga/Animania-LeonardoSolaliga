
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB31AkSOvsuEZ0mCizav0QFIS2qLao5k9k",
  authDomain: "e-comerceleonardosolaliga.firebaseapp.com",
  projectId: "e-comerceleonardosolaliga",
  storageBucket: "e-comerceleonardosolaliga.appspot.com",
  messagingSenderId: "859079860238",
  appId: "1:859079860238:web:f882cc1100bda771609c5f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);