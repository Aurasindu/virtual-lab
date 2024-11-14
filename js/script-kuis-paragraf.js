import { markQuizComplete } from './progress.js';

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-paragraf-form');

    quizForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const correctAnswers = {
            q1: "argumentasi",
            q2: "eksposisi",
            q3: "deskripsi"
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

        if (q1Answer && q2Answer && q3Answer) {
            // Update Firestore to mark this quiz as complete
            try {
                await markQuizComplete('paragraf'); // Call the function to mark 'ejaan' quiz as complete
                console.log('Quiz completion recorded in Firestore');
            } catch (error) {
                console.error('Error updating quiz completion:', error);
            }
        }
    });
});




