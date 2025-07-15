// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
// api key 
  authDomain: 'haritsetu-b327a.firebaseapp.com',
  projectId: 'haritsetu-b327a',
  storageBucket: 'haritsetu-b327a.appspot.com', 
  messagingSenderId: '573156138785',
  appId: '1:573156138785:web:2178fe4f448d58fd8aa860',
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
