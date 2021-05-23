import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBZmDdvX-WRji_j5rOpELxIl9bCeHvMpq0",
    authDomain: "facebook-lite-40cc8.firebaseapp.com",
    projectId: "facebook-lite-40cc8",
    storageBucket: "facebook-lite-40cc8.appspot.com",
    messagingSenderId: "476711141755",
    appId: "1:476711141755:web:c2f369a32a1e095268fdde",
    measurementId: "G-9DV4VXJHVC"
})
const db=firebaseApp.firestore();
export default db;