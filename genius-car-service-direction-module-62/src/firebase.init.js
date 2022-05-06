// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN2CqYiYpNEyISIW2h0w9IDoLmcAmFES8",
  authDomain: "conceptual-react-auth.firebaseapp.com",
  projectId: "conceptual-react-auth",
  storageBucket: "conceptual-react-auth.appspot.com",
  messagingSenderId: "405325374522",
  appId: "1:405325374522:web:3e2cfaafbb29cd5249c103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
