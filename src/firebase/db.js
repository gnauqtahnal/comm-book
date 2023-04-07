import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import {app} from './app'

export const db = getFirestore(app);

function createRef(path, converter) {
  let ref;

  if (converter) {
    ref = doc(db, path).withConverter(converter);
  } else {
    ref = doc(db, path);
  }

  return ref;
}

export async function uploadDbAsync(path, data, converter = undefined) {
  const ref = createRef(path, converter);

  await setDoc(
    ref,
    data,
    { merge: true }
  )
}

export async function downloadDbAsync(path, converter = undefined) {
  const ref = createRef(path, converter);

  const snap = await getDoc(ref);

  if (snap.exists()) {
    return snap.data();
  }
  return undefined;
}
