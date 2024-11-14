import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Fungsi untuk logout
function logout() {
    signOut(auth)
        .then(() => {
            console.log("User logged out");
            window.location.href = "login.html"; // Arahkan ke halaman login setelah logout
        })
        .catch((error) => {
            console.error("Logout failed: ", error);
        });
}

// Tambahkan event listener ke tombol logout
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

