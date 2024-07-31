// firebaseConfig.js
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
