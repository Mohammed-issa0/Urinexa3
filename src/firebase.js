import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPz_EFrX-JT2XaBRYO4vPahc-Q7BewcRY",
    authDomain: "urinexa2.firebaseapp.com",
    projectId: "urinexa2",
    storageBucket: "urinexa2.firebasestorage.app",
    messagingSenderId: "885333323242",
    appId: "1:885333323242:web:d1724bdb9265796b589693"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


