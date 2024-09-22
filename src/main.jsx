import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLSqXmtoTXeoVWjqqnOXWBXvOyu1vWEZA",
  authDomain: "artamcrafts-bd.firebaseapp.com",
  projectId: "artamcrafts-bd",
  storageBucket: "artamcrafts-bd.appspot.com",
  messagingSenderId: "1098356967022",
  appId: "1:1098356967022:web:41971ca635843e40e3887f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
