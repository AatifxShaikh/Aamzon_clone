// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFlz07vBqQXVKGUT3bcgOswcw7cQJN5gw",
  authDomain: "clone-35600.firebaseapp.com",
  projectId: "clone-35600",
  storageBucket: "clone-35600.appspot.com",
  messagingSenderId: "606714122982",
  appId: "1:606714122982:web:b8136a8323b27531d3a127",
  measurementId: "G-57RJN165CD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };