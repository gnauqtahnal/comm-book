import React from 'react';

import { Image, Pressable, View } from '../../core';
import { useSound } from '../../features/sound-replay';
import { useEdit } from './reducer';

function ImageView() {
  const { edit } = useEdit();
  const { setUri, playSound } = useSound();

  React.useEffect(() => {
    setUri(edit.soundUri);
  }, [edit.soundUri]);

  return (
    <Pressable onPress={playSound}>
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
