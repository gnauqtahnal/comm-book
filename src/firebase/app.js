/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBSf7ojTNt6rLzsnzgi8_VetEtDgRf7dDQ',
  authDomain: 'commbook-5f24f.firebaseapp.com',
  projectId: 'commbook-5f24f',
  storageBucket: 'commbook-5f24f.appspot.com',
  messagingSenderId: '1074477687375',
  appId: '1:1074477687375:web:61cab9eab5f8d5f5e7403a',
};

const app = initializeApp(firebaseConfig);

export default app;
