import { Audio } from "expo-av"
import { Alert } from "react-native"

export const createSound = async (uri) => {
  try {
    const { sound } = await Audio.Sound.createAsync(uri)

    return sound
  } catch (error) {
    Alert.alert("Create Sound", error)

    return null
  }
}
