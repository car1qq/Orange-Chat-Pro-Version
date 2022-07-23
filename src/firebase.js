import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBWE35aaxuDE11NeYmpW8hWnmqP5WDfv-0",
  authDomain: "gitclone-chat-app.firebaseapp.com",
  databaseURL: "https://gitclone-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gitclone-chat-app",
  storageBucket: "gitclone-chat-app.appspot.com",
  messagingSenderId: "875650023505",
  appId: "1:875650023505:web:f5e0668b08141a1b493870",
  measurementId: "G-YD9409CWVN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
