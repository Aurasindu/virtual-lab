import { db, auth } from './firebase.js'; // Import Firebase dan Auth 
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Cek status login pengguna menggunakan onAuthStateChanged
auth.onAuthStateChanged(async (user) => {
    if (user) {
        console.log('Pengguna sudah login:', user);
        const userId = user.uid; // Ambil userId dari auth

        // Dapatkan referensi ke dokumen pengguna di Firestore
        const userRef = doc(db, 'quizProgress', userId);

        try {
            const userDoc = await getDoc(userRef); // Ambil data pengguna dari Firestore
            if (userDoc.exists()) {
                const progress = userDoc.data().progress; // Ambil data progress

                // Mengatur status setiap kuis berdasarkan progress
                updateProgressStatus('ejaan', progress.ejaan);
                updateProgressStatus('tataKata', progress.tataKata);
                updateProgressStatus('paragraf', progress.paragraf);
            } else {
                console.log('Dokumen pengguna tidak ditemukan!');
            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    } else {
        console.log('Pengguna belum login!');
    }
});

// Fungsi untuk memperbarui status progress
function updateProgressStatus(quizName, isCompleted) {
    const statusElement = document.querySelector(`#${quizName} .status`);

    if (statusElement) {
        // Jika progress selesai (true), set status "Sudah Mengerjakan", jika belum (false), set "Belum Mengerjakan"
        statusElement.textContent = isCompleted ? 'Sudah Mengerjakan' : 'Belum Mengerjakan';
    }
}

