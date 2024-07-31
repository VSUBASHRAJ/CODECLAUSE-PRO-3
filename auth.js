// auth.js
const firebaseConfig = {
    apiKey: "AIzaSyDdo8kTBRw1avle8aYPY6RnObx6QdHLekk",
    authDomain: "excellent-29bd9.firebaseapp.com",
    databaseURL: "https://excellent-29bd9-default-rtdb.firebaseio.com",
    projectId: "excellent-29bd9",
    storageBucket: "excellent-29bd9.appspot.com",
    messagingSenderId: "336170356351",
    appId: "1:336170356351:web:23732231b3376843bb394a"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registered successfully
            alert('User registered successfully');
        })
        .catch((error) => {
            alert(error.message);
        });
}
