// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvv_2raJ3NDpehrU5h_ah6ohWVEoYV5KY",
  authDomain: "mjc-007-f4dbb.firebaseapp.com",
  projectId: "mjc-007-f4dbb",
  storageBucket: "mjc-007-f4dbb.appspot.com",
  messagingSenderId: "1020682336593",
  appId: "1:1020682336593:web:8a9e23353bdf7c41e7fb70",
  measurementId: "G-N1EE5SM1DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();