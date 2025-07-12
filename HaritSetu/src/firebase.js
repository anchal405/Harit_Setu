// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCc5nIs9UnXN16DGGyOveTz3x7Z-VvlqXg',
  authDomain: 'haritsetu-b327a.firebaseapp.com',
  projectId: 'haritsetu-b327a',
  storageBucket: 'haritsetu-b327a.appspot.com', // 🔧 correct this part
  messagingSenderId: '573156138785',
  appId: '1:573156138785:web:2178fe4f448d58fd8aa860',
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export instances
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
