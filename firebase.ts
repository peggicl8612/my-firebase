// Firebase Client SDK
// firebase init
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC356T4tkKUo4DUwmMmOJWPboFKlpOqDJM",
    authDomain: "my-firebase-12fb4.firebaseapp.com",
    projectId: "my-firebase-12fb4",
    storageBucket: "my-firebase-12fb4.firebasestorage.app",
    messagingSenderId: "251411595390",
    appId: "1:251411595390:web:d9396d5b8165079ecf182f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth }
export default app