// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvn1UVe8dNX1odlTjUMP5NlGawJBKOuVk",
  authDomain: "wedding-website-835af.firebaseapp.com",
  projectId: "wedding-website-835af",
  storageBucket: "wedding-website-835af.appspot.com",
  messagingSenderId: "482884183772",
  appId: "1:482884183772:web:a89a1a2d7dadd6e0163619",
  measurementId: "G-JNKL7Y5G4H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);
export { firebaseApp, firebaseAnalytics };