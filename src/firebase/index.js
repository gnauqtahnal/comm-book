import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCvna3Im7J_fraCefao8tvu_rwGLwj9BFY',
  authDomain: 'comm-book-9267f.firebaseapp.com',
  projectId: 'comm-book-9267f',
  storageBucket: 'comm-book-9267f.appspot.com',
  messagingSenderId: '245911528676',
  appId: '1:245911528676:web:b70b1d9c1d6703994ff8f1',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export async function downloadAsync(path) {
  const storageRef = ref(storage, path);
  const url = await getDownloadURL(storageRef);
  return url;
}

export function getImagePath(user, section, title, uri) {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];
  const path = `${user}/${section}/image/${title.replace(
    '/\\s+/g',
    '_'
  )}.${fileType}`;
  return path;
}

export function getSoundPath(user, section, title, uri) {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];
  const path = `${user}/${section}/sound/${title.replace(
    '/\\s+/g',
    '_'
  )}.${fileType}`;
  return path;
}

export async function uploadAsync(path, uri) {
  const storageRef = ref(storage, path);
  // const obj = await fetch(uri);
  // const blob = await obj.blob();
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      try {
        resolve(xhr.response);
      } catch (error) {
        console.error(error);
      }
    };
    xhr.onerror = (e) => {
      console.error(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  await uploadBytesResumable(storageRef, blob);
  const url = await getDownloadURL(storageRef);
  return url;
}
