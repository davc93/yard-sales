// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: "yard-sales-9043f.firebaseapp.com",
  projectId: "yard-sales-9043f",
  storageBucket: "yard-sales-9043f.appspot.com",
  messagingSenderId: "1085918403389",
  appId: "1:1085918403389:web:e4facb6b86647161284354",
  measurementId: "G-738004R57M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);