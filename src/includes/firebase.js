import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBr-clqQmvYQRgJof9vQmNGVLEC7qUC11Q',
  authDomain: 'music-3a001.firebaseapp.com',
  projectId: 'music-3a001',
  storageBucket: 'music-3a001.appspot.com',
  appId: '1:1087629362479:web:e9dd7fdc26b5c5dcfa8dda'
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const users = db.collection('users');

export { auth, users };
