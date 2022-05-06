// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZmrp08S57gD02F3sQLfqde1nWtW-yJc",
  authDomain: "email-password-auth-c9e2e.firebaseapp.com",
  projectId: "email-password-auth-c9e2e",
  storageBucket: "email-password-auth-c9e2e.appspot.com",
  messagingSenderId: "1028008261264",
  appId: "1:1028008261264:web:0cd3da5761da170acc0a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;