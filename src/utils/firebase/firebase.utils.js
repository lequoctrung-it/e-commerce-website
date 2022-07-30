// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRnRlc0x5lT90nx5hD_C5VXM7l3tDEZw",
  authDomain: "e-commerce-db-e74a4.firebaseapp.com",
  projectId: "e-commerce-db-e74a4",
  storageBucket: "e-commerce-db-e74a4.appspot.com",
  messagingSenderId: "565931078589",
  appId: "1:565931078589:web:418bb0f8dc794160d358d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, provider);