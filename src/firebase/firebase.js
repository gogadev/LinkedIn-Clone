import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3F9hyej9Wt_Uq2MZM4L617U4QpfEXn9k",
  authDomain: "linkedin-clone-bc8b5.firebaseapp.com",
  projectId: "linkedin-clone-bc8b5",
  storageBucket: "linkedin-clone-bc8b5.appspot.com",
  messagingSenderId: "646604704482",
  appId: "1:646604704482:web:9602b2b5a5fb2d22162cbb",
  measurementId: "G-JCDMMLE3WZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
