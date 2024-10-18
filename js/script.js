document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-ejaan-form');

    quizForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Menyimpan jawaban benar
        const correctAnswers = {
            q1: "Huruf besar",
            q2: "Tanda titik"
        };

        // Memeriksa jawaban
        const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
        const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;

        // Menampilkan umpan balik untuk pertanyaan 1
        const feedbackQ1 = document.getElementById('feedback-q1');
        feedbackQ1.textContent = (q1Answer === correctAnswers.q1) ? 'Benar!' : 'Salah!';
        feedbackQ1.className = (q1Answer === correctAnswers.q1) ? '' : 'error'; // Tambahkan kelas 'error' jika salah

        // Menampilkan umpan balik untuk pertanyaan 2
        const feedbackQ2 = document.getElementById('feedback-q2');
        feedbackQ2.textContent = (q2Answer === correctAnswers.q2) ? 'Benar!' : 'Salah!';
        feedbackQ2.className = (q2Answer === correctAnswers.q2) ? '' : 'error'; // Tambahkan kelas 'error' jika salah
    });
});




