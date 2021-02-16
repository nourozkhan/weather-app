import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDulsGdC0cski_5D6JmdghZcaWmVu_xYXY",
    authDomain: "sample-for-sos.firebaseapp.com",
    databaseURL: "https://sample-for-sos.firebaseio.com",
    projectId: "sample-for-sos",
    storageBucket: "sample-for-sos.appspot.com",
    messagingSenderId: "562991705013",
    appId: "1:562991705013:web:ffc399ebe148e9a2"
  };

  firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));