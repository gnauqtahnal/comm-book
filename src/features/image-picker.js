import { manipulateAsync } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';

import { downloadAsync, uploadAsync } from '../firebase/storage';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
};

async function resizeImage(uri) {
  try {
    const result = await manipulateAsync(
      uri,
      [
        {
          resize: { height: 256, width: 256 },
        },
      ],
      { compress: 1 }
    );
    return result.uri;
  } catch (error) {
    console.error(error);
  }
  return '';
}

export async function launchCameraPickerAsync() {
  try {
    await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync(options);

    if (!result.canceled) {
      let { uri } = result.assets[0];
      uri = await resizeImage(uri);
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
      let { uri } = result.assets[0];
      uri = await resizeImage(uri);
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
