// src/firebase.ks
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCD_1rI2qbogIbMBRjsZdPkyQPQCV4UhvI",
    authDomain: "my-cv-7bbd6.firebaseapp.com",
    projectId: "my-cv-7bbd6",
    storageBucket: "my-cv-7bbd6.appspot.com",
    messagingSenderId: "753145798071",
    appId: "1:753145798071:web:a675658ce8f89e2f351c32",
    measurementId: "G-VJLZ07CFFW"
};

firebase.initializeApp(config);
export default firebase;