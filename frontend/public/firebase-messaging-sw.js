importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA_-YCWJGHn082ij85KnB1DWuLkzVuZq80",
  authDomain: "laravel-59257.firebaseapp.com",
  projectId: "laravel-59257",
  storageBucket: "laravel-59257.appspot.com",
  messagingSenderId: "917445944763",
  appId: "1:917445944763:web:381071d6e517276686509e",
  measurementId: "G-6ETPE5MYLJ"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});