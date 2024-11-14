import { auth, db } from './firebase.js';  // Mengimpor auth dan db
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', function () {
    const profileBtn = document.getElementById('profile-btn');
    const profilePage = document.getElementById('profile-page');
    // const mainPage = document.getElementById('main-page');
    const logoutBtn = document.getElementById('logout-btn');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');

    // Menampilkan status login pengguna
    onAuthStateChanged(auth, user => {
        if (user) {
            // Jika pengguna sudah login, tampilkan profil

            // Mengambil data pengguna dari Firestore
            const userRef = doc(db, "users", user.uid);
            getDoc(userRef).then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    userName.textContent = userData.name || user.displayName;  // Menampilkan nama dari Firestore atau Firebase
                    userEmail.textContent = userData.email || user.email;  // Menampilkan email
                }
            }).catch((error) => {
                console.error("Gagal mengambil data pengguna:", error);
            });
        } else {
            // Jika pengguna belum login, sembunyikan profil
            // profileBtn.style.display = 'block';  // Tampilkan tombol "Lihat Profil"
            // profilePage.style.display = 'none';  // Sembunyikan halaman profil
        }
    });

    // Menangani klik pada tombol profil
    profileBtn.addEventListener('click', function () {
        window.location.href = "profile.html";  // Pindah ke halaman profil jika tombol diklik
    });

    // Menangani klik logout
    logoutBtn.addEventListener('click', function () {
        signOut(auth).then(() => {
            console.log('User signed out');
            window.location.reload();  // Memuat ulang halaman untuk mengupdate status login
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    });
});
