import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwUEtim6UntGFWf4lCXARxD6hrZmKo7iU",
  authDomain: "netflix-clone-570e0.firebaseapp.com",
  projectId: "netflix-clone-570e0",
  storageBucket: "netflix-clone-570e0.appspot.com",
  messagingSenderId: "754956553529",
  appId: "1:754956553529:web:0c793e74bb627c12432ce8",
  measurementId: "G-J4Z0TCBBSL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
