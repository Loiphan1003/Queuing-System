import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { config } from 'dotenv';
// config();

const firebaseConfig = {
  apiKey: "AIzaSyBzNHMNVtOSOUcTKAO5EPwllpH9ZXPhTWo",
  authDomain: "queuing-system-edddf.firebaseapp.com",
  projectId: "queuing-system-edddf",
  storageBucket: "queuing-system-edddf.appspot.com",
  messagingSenderId: "1092795130879",
  appId: "1:1092795130879:web:9d6a4f278121cf0ffb3dca"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);