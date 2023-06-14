import { Audio } from 'expo-av'
import React from 'react'

async function initRecordingAsync() {
  await Audio.requestPermissionsAsync()
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: true,
    playsInSilentModeIOS: true,
  })
}

async function deinitRecordingAsync(recording) {
  recording.stopAndUnloadAsync()
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
  })
}

export function useRecorder(callback) {
  const [recording, setRecording] = React.useState(undefined)

  const record = React.useCallback(() => {
    if (recording) {
      setRecording(undefined)
      deinitRecordingAsync(recording).then(() => {
        const uri = recording.getURI()
        callback(uri)
      })
    } else {
      initRecordingAsync().then(() => {
        Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.LOW_QUALITY
        ).then(({ recording }) => {
          setRecording(recording)
        })
      })
    }
  }, [recording])

  return [recording, record]
}
