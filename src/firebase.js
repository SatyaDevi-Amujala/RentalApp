
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMK6VY975rekl8DnzCA-N4hRfcAgJorQE",
  authDomain: "reactauth-2de8a.firebaseapp.com",
  projectId: "reactauth-2de8a",
  storageBucket: "reactauth-2de8a.appspot.com",
  messagingSenderId: "577887679698",
  appId: "1:577887679698:web:81ba85a3468e6c5463e90b",
  measurementId: "G-4D09YQM28E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;