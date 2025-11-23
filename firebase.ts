// Firebase Client SDK
// firebase init
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1eY8labR815hpvML7lQYjKDGBpwxChfk",
    authDomain: "my-firebase-12fb4.firebaseapp.com",
    databaseURL: "https://my-firebase-12fb4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-firebase-12fb4",
    storageBucket: "my-firebase-12fb4.firebasestorage.app",
    messagingSenderId: "251411595390",
    appId: "1:251411595390:web:d9396d5b8165079ecf182f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { app, db, auth, storage }
export default app

