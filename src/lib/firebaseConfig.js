// src/lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfyaxwya1Q3n7WrgnIditpk46Lx3TPIrw",
  authDomain: "la-elena.firebaseapp.com",
  projectId: "la-elena",
  storageBucket: "la-elena.firebasestorage.app",
  messagingSenderId: "138774601460",
  appId: "1:138774601460:web:e4d04da334b05d9b4288a1",
  measurementId: "G-J1DYS89FP2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
