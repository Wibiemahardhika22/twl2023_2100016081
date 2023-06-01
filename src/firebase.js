import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDf1gTJq5td7Or0DBZZL7AjHI4NXOb09iI",
  authDomain: "web-movie-8f8a4.firebaseapp.com",
  projectId: "web-movie-8f8a4",
  storageBucket: "web-movie-8f8a4.appspot.com",
  messagingSenderId: "1075513759380",
  appId: "1:1075513759380:web:c50abfde0de7c6142cc681"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)