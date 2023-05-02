import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';
import App from './components/App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4nwc_S6RVF-fTgyT0b34q_3M_ZDLDlMs",
  authDomain: "atlas-25a78.firebaseapp.com",
  projectId: "atlas-25a78",
  storageBucket: "atlas-25a78.appspot.com",
  messagingSenderId: "141827458782",
  appId: "1:141827458782:web:312a49ae6b291e0aaea44f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

