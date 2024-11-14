import { db, auth } from './firebase.js';
import { doc, updateDoc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export async function markQuizComplete(ejaan) {
    const userId = auth.currentUser?.uid;
    if (userId) {
        const userRef = doc(db, 'quizProgress', userId);

        try {
            // Cek apakah dokumen user ada
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // Kalau dokumen tidak ada, buat dokumen baru
                await setDoc(userRef, { progress: { [ejaan]: true } });
                console.log(`Quiz ${ejaan} marked as complete (new document created)`);
            } else {
                // Kalau dokumen sudah ada, lanjutkan dengan update
                await updateDoc(userRef, {
                    [`progress.${ejaan}`]: true
                });
                console.log(`Quiz ${ejaan} marked as complete`);
            }
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    }
}





