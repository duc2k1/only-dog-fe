import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBLi6LoEwIVcoiiIPVinak9RKJl1rkgdxk",
  authDomain: "okita-49779.firebaseapp.com",
  databaseURL:
    "https://okita-49779-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "okita-49779",
  storageBucket: "okita-49779.appspot.com",
  messagingSenderId: "431584964167",
  appId: "1:431584964167:web:bcc31ad94c0280873dcb62",
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();
const { FieldValue } = firebase.firestore;

export { fire, FieldValue, storage };
