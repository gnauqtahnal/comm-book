import { Audio } from 'expo-av';
import React from 'react';

async function initRecording() {
  await Audio.requestPermissionsAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: true,
    playsInSilentModeIOS: true,
  });
}

async function deinitRecording(recording) {
  recording.stopAndUnloadAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
  });
}

export function useRecorder(callback) {
  const [recording, setRecording] = React.useState(undefined);

  const record = React.useCallback(() => {
    if (recording) {
      setRecording(undefined);
      deinitRecording(recording).then(() => {
        const uri = recording.getURI();
        callback(uri);
      });
    } else {
      initRecording().then(() => {
        Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.LOW_QUALITY
        ).then(({ recording }) => {
          setRecording(recording);
        });
      });
    }
  }, [recording]);

  return [recording, record];
}
