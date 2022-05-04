// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC6bAPiZa2R4AsK0rMLq2dmnj8jRy0Dhs",
  authDomain: "endterm-814ce.firebaseapp.com",
  databaseURL:
    "https://endterm-814ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "endterm-814ce",
  storageBucket: "endterm-814ce.appspot.com",
  messagingSenderId: "766497178500",
  appId: "1:766497178500:web:cf0a82b78bbf78c68113d1",
  measurementId: "G-0Y52Q8E6Z5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
