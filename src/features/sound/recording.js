import { Audio } from "expo-av"
import { Alert } from "react-native"

export const startRecording = async (
  onRecordingStatusUpdate = null,
  progressUpdateIntervalMillis = null,
) => {
  try {
    await Audio.requestPermissionsAsync()
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    })

    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.LOW_QUALITY,
      onRecordingStatusUpdate,
      progressUpdateIntervalMillis,
    )

    return recording
  } catch (error) {
    Alert.alert("Start Recording", error)

    return null
  }
}

export const stopRecording = async (recording) => {
  try {
    await recording.stopAndUnloadAsync()
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
    })

    const uri = recording.getURI()

    return uri
  } catch (error) {
    Alert.alert("Stop Recording", error)

    return null
  }
}
