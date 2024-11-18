// Mengimpor library Firebase yang diperlukan
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyBrdzKy0UlxGgQl_YNNaSRJG14Qdpe2wN4",
    authDomain: "backend-teras-bahasa.firebaseapp.com",
    projectId: "backend-teras-bahasa",
    storageBucket: "backend-teras-bahasa.appspot.com",
    messagingSenderId: "611271543765",
    appId: "1:611271543765:web:6370a2e4d9322adfbb0b5c",
    measurementId: "G-7PPH2S7RCS"
};

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

if (auth) {
    console.log("Firebase Auth initialized successfully.");
} else {
    console.error("Failed to initialize Firebase Auth.");
}


export { auth, db };


