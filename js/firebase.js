// firebase.js
<script type="module">
    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

    const firebaseConfig = {
        projectId: "backend-teras-bahasa",
    storageBucket: "backend-teras-bahasa.appspot.com",
    messagingSenderId: "611271543765",
    appId: "1:611271543765:web:6370a2e4d9322adfbb0b5c",
    measurementId: "G-7PPH2S7RCS"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
</script>

