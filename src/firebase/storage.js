import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import { app } from './app';

export const storage = getStorage(app);

export async function downloadAsync(path) {
  const storageRef = ref(storage, path);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function uploadAsync(path, uri) {
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

  const storageRef = ref(storage, path);
  await uploadBytesResumable(storageRef, blob);
  const url = await getDownloadURL(storageRef);
  return url;
}
export async function uploadImageSoundAsync(
  user,
  section,
  title,
  imageUri,
  soundUri
) {
  const getFileType = (uri) => {
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];
    return fileType;
  };

  const imageType = getFileType(imageUri);
  const soundType = getFileType(soundUri);

  const imagePath = `${user}/${section}/image_${title}.${imageType}`.replace(
    ' ',
    '_'
  );
  const soundPath = `${user}/${section}/sound_${title}.${soundType}`.replace(
    ' ',
    '_'
  );

  const arr = await Promise.all([
    uploadAsync(imagePath, imageUri),
    uploadAsync(soundPath, soundUri),
  ]);

  return arr;
}
