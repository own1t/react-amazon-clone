import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdyzVW7aIIEMtmYnD43zeUXtDAwAi_XUk",
  authDomain: "clone-824ab.firebaseapp.com",
  databaseURL: "https://clone-824ab.firebaseio.com",
  projectId: "clone-824ab",
  storageBucket: "clone-824ab.appspot.com",
  messagingSenderId: "755274749416",
  appId: "1:755274749416:web:b495dd1df12e64dda6005d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
