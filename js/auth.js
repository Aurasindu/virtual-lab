// auth.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Fungsi Sign Up
export async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Sign up successful:", userCredential.user);
        alert("Sign up berhasil! Silakan login.");
        // Arahkan ke halaman login setelah sign-up berhasil
        window.location.href = "login.html";
    } catch (error) {
        console.error("Sign up failed:", error.message);
        alert(`Sign up gagal: ${error.message}`);
    }
}

// Fungsi Login
export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful:", userCredential.user);
        alert("Login berhasil!");
        // Arahkan ke halaman utama setelah login berhasil
        window.location.href = "index.html";
    } catch (error) {
        console.error("Login failed:", error.message);
        alert(`Login gagal: ${error.message}`);
    }
}

