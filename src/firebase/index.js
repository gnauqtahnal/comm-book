import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';

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

export async function uploadAsync(ref, uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = (e) => {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  await uploadBytes(ref, blob);
  blob.close();

  return await getDownloadURL(ref);
}
