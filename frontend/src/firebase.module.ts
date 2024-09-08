import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app/app.component';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_-YCWJGHn082ij85KnB1DWuLkzVuZq80",
  authDomain: "laravel-59257.firebaseapp.com",
  projectId: "laravel-59257",
  storageBucket: "laravel-59257.appspot.com",
  messagingSenderId: "917445944763",
  appId: "1:917445944763:web:381071d6e517276686509e",
  measurementId: "G-6ETPE5MYLJ"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
