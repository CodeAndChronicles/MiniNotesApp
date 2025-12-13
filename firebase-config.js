// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOqwdTEjaPp_iTMia1t1IjS8fxSUQtnTY",
    authDomain: "mininotesapp-8b171.firebaseapp.com",
    projectId: "mininotesapp-8b171",
    storageBucket: "mininotesapp-8b171.appspot.com",
    messagingSenderId: "135430086212",
    appId: "1:135430086212:web:818a9ab60f393d0ae5e611",
    measurementId: "G-4RXQ2H257S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };