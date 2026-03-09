// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyBec-Au5g_avp92ewDenggGmjSHB0tJRbs",
    authDomain: "duong-53920.firebaseapp.com",
    databaseURL: "https://duong-53920-default-rtdb.firebaseio.com",
    projectId: "duong-53920",
    storageBucket: "duong-53920.firebasestorage.app",
    messagingSenderId: "38534539449",
    appId: "1:38534539449:web:73df0917f106b2718d1368",
    measurementId: "G-NF823CB1V8"
};

// Initialize Firebase
let db = null;
let firebaseReady = false;

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    firebaseReady = true;
    console.log('✅ Firebase connected successfully!');
} catch (error) {
    console.warn('⚠️ Firebase connection failed:', error.message);
    firebaseReady = false;
}
