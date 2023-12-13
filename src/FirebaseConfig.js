// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyApfdVg_Kp5YG9h-g0o1kjDLejwdafCXs0",
  authDomain: "lab6-8ee00.firebaseapp.com",
  projectId: "lab6-8ee00",
  storageBucket: "lab6-8ee00.appspot.com",
  messagingSenderId: "656926215750",
  appId: "1:656926215750:web:f3f1ecca316e624c280447"
};

// Initialize Firebase
const FirebaseApp = initializeApp(FirebaseConfig);


export const auth = getAuth(FirebaseApp);
export default FirebaseApp;