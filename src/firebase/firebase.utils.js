import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC-5LsJEbItfk4du5M-j6e1JmIcVCf1WDY",
    authDomain: "crown-db-6b31b.firebaseapp.com",
    projectId: "crown-db-6b31b",
    storageBucket: "crown-db-6b31b.appspot.com",
    messagingSenderId: "557934236867",
    appId: "1:557934236867:web:f6f2f9a12697f86b40fe76",
    measurementId: "G-9Y85R72G7F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;