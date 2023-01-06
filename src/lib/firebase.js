// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbhXAdP485zjZ5dJNyfxh2p31fsKzfBYw",
  authDomain: "equilibrio-saludable.firebaseapp.com",
  projectId: "equilibrio-saludable",
  storageBucket: "equilibrio-saludable.appspot.com",
  messagingSenderId: "518710435585",
  appId: "1:518710435585:web:4c9bfcc5ca506b2b9b4500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);