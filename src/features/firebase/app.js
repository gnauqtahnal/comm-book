import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyAuxtmsEiVcz7Pf8jsQGi6IIGimRJWXlAc',
  authDomain: 'comm-book-test.firebaseapp.com',
  projectId: 'comm-book-test',
  storageBucket: 'comm-book-test.appspot.com',
  messagingSenderId: '675799436317',
  appId: '1:675799436317:web:1f9de000367cd8eeaa8af4',
}

export const app = initializeApp(firebaseConfig)
