import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';

import { downloadAsync, uploadAsync } from '../firebase';
import FirebaseSlice from '../redux/slice/firebase';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.2,
};

export async function launchCameraPickerAsync() {
  try {
    await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync(options);

    if (!result.canceled) {
      const { uri } = result.assets[0];
      return uri;
    }
    return undefined;
  } catch (error) {
    console.error(`error: launchCameraPickerAsync ${error}`);
    return undefined;
  }
}

export async function launchLibraryPickerAsync() {
  try {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      const { uri } = result.assets[0];
      return uri;
    }
    return undefined;
  } catch (error) {
    console.error(`error: launchLibraryPickerAsync ${error}`);
    return undefined;
  }
}

export async function handleImagePickerAsync(path, uri) {
  try {
    await uploadAsync(path, uri);
    const url = await downloadAsync(path);
    return url;
  } catch (error) {
    console.error(`error: handleImagePickerAsync ${error}`);
    return undefined;
  }
}
