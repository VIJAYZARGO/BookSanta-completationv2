import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA8AP2E9QXclWR9sRWwq1ETR8rcURS1ils",
  authDomain: "booksanta-zargo-b6168.firebaseapp.com",
  projectId: "booksanta-zargo-b6168",
  storageBucket: "booksanta-zargo-b6168.appspot.com",
  messagingSenderId: "564849827313",
  appId: "1:564849827313:web:15e3f209efd39648357850",
  measurementId: "G-TJCLPDCMRJ"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
