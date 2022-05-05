import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


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
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = firebase.auth();

export const db = firebase.firestore();


