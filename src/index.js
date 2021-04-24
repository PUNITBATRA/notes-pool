import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB91XGbzSGwEecwwL9NdS5FWGbguISv0kQ",
  authDomain: "notes-pool-a7f1d.firebaseapp.com",
  projectId: "notes-pool-a7f1d",
  storageBucket: "notes-pool-a7f1d.appspot.com",
  messagingSenderId: "35587580412",
  appId: "1:35587580412:web:97d2d030612145451e1279",
};
firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
