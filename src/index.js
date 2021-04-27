import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


// const firebase = require('firebase');
// require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBURyDBhPlPe6dk_rCTJdtkw6KuogNSDLw",
  authDomain: "evernote-clone-299b0.firebaseapp.com",
  projectId: "evernote-clone-299b0",
  storageBucket: "evernote-clone-299b0.appspot.com",
  messagingSenderId: "777239017618",
  appId: "1:777239017618:web:ac1b014d021aeba2828e4b",
  measurementId: "G-SPYSG8HHFS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
   <App />,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
