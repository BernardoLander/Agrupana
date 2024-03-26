// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wuhBrlPEWaW_fg6vCONjNRkGs_Xp4fY",
  authDomain: "agrupana.firebaseapp.com",
  projectId: "agrupana",
  storageBucket: "agrupana.appspot.com",
  messagingSenderId: "478717383297",
  appId: "1:478717383297:web:40770d48ab9dd2311df380"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)