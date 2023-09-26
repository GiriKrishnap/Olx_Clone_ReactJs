import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrySKgZAyPdc4CCaAETyYnkVB3ur-0rHs",
    authDomain: "olx-clone-8e7c0.firebaseapp.com",
    projectId: "olx-clone-8e7c0",
    storageBucket: "olx-clone-8e7c0.appspot.com",
    messagingSenderId: "960995996977",
    appId: "1:960995996977:web:80eac1b5f0a3db08b8ec10",
    measurementId: "G-S1QYP2FMGQ"
};

export default firebase.initializeApp(firebaseConfig)

