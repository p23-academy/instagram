// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyLhB4TqF99yeXSoD8-wRNt8ay8N2kHok",
  authDomain: "akademija-instach.firebaseapp.com",
  projectId: "akademija-instach",
  storageBucket: "akademija-instach.appspot.com",
  messagingSenderId: "1037354941761",
  appId: "1:1037354941761:web:8fe5b0417644b5129f35c0",
  measurementId: "G-YMQP7RF2NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App initialized")

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();
export {db, storage, auth}