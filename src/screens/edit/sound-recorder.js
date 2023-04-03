import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import React from 'react';

import { EditAction, useEdit } from './reducer';
import { Button, iconSize } from './style';

function SoundRecorderButton() {
  const { dispatch } = useEdit();
  const [record, setRecord] = React.useState(undefined);

  async function startRecorder() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.LOW_QUALITY
      );

      setRecord(recording);
    } catch (err) {
      console.error(`startRecorder failure ${err}`);
    }
  }

  async function stopRecorder() {
    try {
      await record.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });

      const uri = record.getURI();
      setRecord(undefined);

      dispatch({ type: EditAction.SetSoundUri, soundUri: uri });
    } catch (err) {
      console.error(`stopRecorder failure ${err}`);
    }
  }

  return (
    <Button
      onPress={async () => {
        record ? await stopRecorder() : await startRecorder();
      }}
    >
      {record ? (
        <FontAwesome name="stop" size={iconSize} color="black" />
      ) : (
        <FontAwesome name="microphone" size={iconSize} color="black" />
      )}
    </Button>
  );
}

const SoundRecorderButtonMemo = React.memo(SoundRecorderButton);

export default SoundRecorderButtonMemo;
