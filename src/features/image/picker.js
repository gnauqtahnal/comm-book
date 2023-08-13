import * as ImagePicker from "expo-image-picker"
import { Alert } from "react-native"

export const imagePickFromLibrary = async () => {
  try {
    let permission = await ImagePicker.getMediaLibraryPermissionsAsync()
    if (!permission.granted) {
      permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (!permission.granted) {
        return undefined
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    let uri = result.assets[0].uri

    return uri
  } catch (error) {
    Alert.alert("ImagePicker", "FromLibraryFailure")
    return undefined
  }
}

export const imagePickFromCamera = async () => {
  try {
    let permission = await ImagePicker.getCameraPermissionsAsync()
    if (!permission.granted) {
      permission = await ImagePicker.requestCameraPermissionsAsync()
      if (!permission.granted) {
        return undefined
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    let uri = result.assets[0].uri

    return uri
  } catch (error) {
    Alert.alert("ImagePicker", "FromLibraryFailure")
    return undefined
  }
}
