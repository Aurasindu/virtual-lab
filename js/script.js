import { markQuizComplete } from './progress.js';

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-ejaan-form');

    quizForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Menyimpan jawaban benar
        const correctAnswers = {
            q1: "bika-ambon",
            q2: "sub-bagian",
            q3: "ultrasound"
        };

        // Memeriksa jawaban
        const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
        const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;
        const q3Answer = document.querySelector('input[name="q3"]:checked')?.value;

        const feedbackQ1 = document.getElementById('feedback-q1');
        feedbackQ1.textContent = (q1Answer === correctAnswers.q1) ? 'Benar!' : 'Salah!';
        feedbackQ1.className = (q1Answer === correctAnswers.q1) ? '' : 'error';

        const feedbackQ2 = document.getElementById('feedback-q2');
        feedbackQ2.textContent = (q2Answer === correctAnswers.q2) ? 'Benar!' : 'Salah!';
        feedbackQ2.className = (q2Answer === correctAnswers.q2) ? '' : 'error';

        const feedbackQ3 = document.getElementById('feedback-q3');
        feedbackQ3.textContent = (q3Answer === correctAnswers.q3) ? 'Benar!' : 'Salah!';
        feedbackQ3.className = (q3Answer === correctAnswers.q3) ? '' : 'error';

        // Menyimpan jawaban pengguna
        const answers = {
            q1: q1Answer,
            q2: q2Answer,
            q3: q3Answer
        };

        if (q1Answer && q2Answer && q3Answer) {
            // Update Firestore untuk menandai quiz sebagai selesai dan menyimpan jawaban
            try {
                await markQuizComplete('ejaan', answers);  // Kirim jawaban ke Firebase
                console.log('Quiz completion and answers recorded in Firestore');
            } catch (error) {
                console.error('Error updating quiz completion and answers:', error);
            }
        }
    });
});


