import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD0oWHifYxefgDAu_RCCC6WUYzemjDp1Y",
  authDomain: "chatapp-nextjs-e15dd.firebaseapp.com",
  projectId: "chatapp-nextjs-e15dd",
  storageBucket: "chatapp-nextjs-e15dd.appspot.com",
  messagingSenderId: "43504485229",
  appId: "1:43504485229:web:916476ad18a27be02b1064",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
