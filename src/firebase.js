import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, getDoc } from "firebase/firestore"; 
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wuhBrlPEWaW_fg6vCONjNRkGs_Xp4fY",
  authDomain: "agrupana.firebaseapp.com",
  databaseURL: "https://agrupana-default-rtdb.firebaseio.com",
  projectId: "agrupana",
  storageBucket: "agrupana.appspot.com",
  messagingSenderId: "478717383297",
  appId: "1:478717383297:web:40770d48ab9dd2311df380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

export { auth, createUserWithEmailAndPassword, googleProvider, db, signInWithPopup, onAuthStateChanged, facebookProvider, getStorage, collection, getDocs, query, where, getDoc}; 