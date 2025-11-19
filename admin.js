// amdin SDK
import admin from 'firebase-admin'
import serviceAccount from './my-firebase.json' assert { type: 'json' }

if(!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    }) 
    console.log('Firebase Admin initialized')
}


 
export default admin