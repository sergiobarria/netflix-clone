import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgyhKmXkZzbztoE1U27KWgAQ1J66wSBZg',
  authDomain: 'netflix-clone-5be53.firebaseapp.com',
  projectId: 'netflix-clone-5be53',
  storageBucket: 'netflix-clone-5be53.appspot.com',
  messagingSenderId: '331413427524',
  appId: '1:331413427524:web:fb754b70857436d9ff7311',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
