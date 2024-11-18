import { db, auth } from './firebase.js';
import { doc, updateDoc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export async function markQuizComplete(paragraf) {
    const userId = auth.currentUser?.uid;
    if (userId) {
        const userRef = doc(db, 'quizProgress', userId);

        try {

            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {

                await setDoc(userRef, { progress: { [paragraf]: true } });
                console.log(`Quiz ${paragraf} marked as complete (new document created)`);
            } else {

                await updateDoc(userRef, {
                    [`progress.${paragraf}`]: true
                });
                console.log(`Quiz ${paragraf} marked as complete`);
            }
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    }
}