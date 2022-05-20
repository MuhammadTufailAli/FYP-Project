import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWwtyjVy7ZHL_d_f-x4pUET-09VosaghI',
  authDomain: 'reactnativefirstdatabase-a7b2b.firebaseapp.com',
  databaseURL:
    'https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com',
  projectId: 'reactnativefirstdatabase-a7b2b',
  storageBucket: 'reactnativefirstdatabase-a7b2b.appspot.com',
  messagingSenderId: '210814950670',
  appId: '1:210814950670:web:03d52f89144eab253acb5f',
  measurementId: 'G-7MW26PPM4W',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({experimentalForceLongPolling: true});

const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();
export {auth, db, provider};
