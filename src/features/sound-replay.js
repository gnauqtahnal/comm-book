import { Audio } from 'expo-av';
import React from 'react';

async function unloadSoundAsync(sound) {
  await sound.unloadAsync();
}

async function loadSoundAsync(preSound, uri) {
  if (preSound) {
    await unloadSoundAsync(preSound);
  }
  const { sound } = await Audio.Sound.createAsync({ uri });
  return sound;
}

export function useSound() {
  const [uri, setUri] = React.useState('');
  const [sound, setSound] = React.useState(undefined);

  React.useEffect(() => {
    if (uri) {
      loadSoundAsync(sound, uri).then((sound) => {
        setSound(sound);
      });
    }

    return sound
      ? () => {
          unloadSoundAsync().then(() => {
            setSound(undefined);
          });
        }
      : undefined;
  }, [uri]);

  const playSound = React.useCallback(() => {
    if (sound) {
      sound.replayAsync();
    }
  }, [sound]);

  return { setUri, playSound };
}
