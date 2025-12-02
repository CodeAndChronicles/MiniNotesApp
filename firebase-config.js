import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyCOqwdTEjaPp_iTMia1t1IjS8fxSUQtnTY",
    authDomain: "mininotesapp-8b171.firebaseapp.com",
    projectId: "mininotesapp-8b171",
    storageBucket: "mininotesapp-8b171.appspot.com",
    messagingSenderId: "135430086212",
    appId: "1:135430086212:web:818a9ab60f393d0ae5e611",
    measurementId: "G-4RXQ2H257S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);