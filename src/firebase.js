// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBlG8ywKq0qUW30ufgAFK5mkKj8fHHbdxY",
    authDomain: "e-commerce-11419.firebaseapp.com",
    projectId: "e-commerce-11419",
    storageBucket: "e-commerce-11419.appspot.com",
    messagingSenderId: "298995762806",
    appId: "1:298995762806:web:59c697235c6c4692fcc157",
    measurementId: "G-4Z1NYFV6HJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };