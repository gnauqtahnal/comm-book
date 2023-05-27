import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Center, Image, Pressable, Text, View } from '../../core';
import { useSound } from '../../features/sound-replay';
import CategorySlice from '../../redux/slice/category';

export const CardMode = {
  None: 0,
  Select: 1,
  Update: 2,
  PlaySound: 3,
};

function Card({
  index = -1,
  section = 'default',
  title = '',
  imageUri = '',
  soundUri = '',
  viewStyle = {},
  textStyle = {},
  mode = CardMode.None,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { setUri, playSound } = useSound();

  React.useEffect(() => {
    setUri(soundUri);
  }, [soundUri]);

  return (
    <Pressable
      onPress={() => {
        switch (mode) {
          case CardMode.Select:
            dispatch(CategorySlice.actions.select({ index, section }));
            break;

          case CardMode.Update:
            navigation.navigate('Edit', {
              index,
              section,
              title,
              imageUri,
              soundUri,
            });
            break;

          case CardMode.PlaySound:
            playSound();
            break;

          default:
            break;
        }
      }}
      delayLongPress={1000}
      onLongPress={() => {
        switch (mode) {
          case CardMode.Select:
          case CardMode.Update:
            navigation.navigate('Edit', {
              index,
              section,
              title,
              imageUri,
              soundUri,
            });
            break;

          default:
            break;
        }
      }}
    >
      <View
        tw={`w-32 h-40 items-center bg-white border border-gray-500 ${viewStyle}`}
      >
        <Image
          tw={`w-full aspect-square`}
          source={imageUri ? { uri: imageUri } : undefined}
        />
        <Center tw={`flex-1 w-full border-t border-gray-500`}>
          <Text tw={`text-lg ${textStyle}`}>{title}</Text>
        </Center>
      </View>
    </Pressable>
  );
}

const CardMemo = React.memo(Card);

export default CardMemo;
