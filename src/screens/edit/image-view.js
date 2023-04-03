import { Audio } from 'expo-av';
import React from 'react';

import { Image, Pressable, View } from '../../core';
import { useEdit } from './reducer';

function ImageView() {
  const { edit } = useEdit();
  const [soundObj, setSoundObj] = React.useState(undefined);

  React.useEffect(() => {
    if (soundObj) {
      soundObj?.unloadAsync().then(() => {
        setSoundObj(undefined);
        Audio.Sound.createAsync({ uri: edit.soundUri })
          .then(({ sound }) => {
            setSoundObj(sound);
          })
          .catch(() => {
            setSoundObj(undefined);
          });
      });
    } else if (edit.soundUri) {
      Audio.Sound.createAsync({ uri: edit.soundUri })
        .then(({ sound }) => {
          setSoundObj(sound);
        })
        .catch(() => {
          setSoundObj(undefined);
        });
    }

    return soundObj
      ? () => {
          soundObj?.unloadAsync();
        }
      : undefined;
  }, [edit.soundUri]);

  return (
    <Pressable
      onPress={
        soundObj
          ? () => {
              soundObj?.replayAsync();
            }
          : undefined
      }
    >
      <View tw="w-full p-2 mx-2 my-1">
        <Image
          tw="w-full aspect-square border"
          source={edit.imageUri ? { uri: edit.imageUri } : undefined}
        />
      </View>
    </Pressable>
  );
}

const ImageViewMemo = React.memo(ImageView);

export default ImageViewMemo;
