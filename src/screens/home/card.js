import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Center, Image, Pressable, Text, View } from '../../core';
import CategorySlice from '../../redux/slice/category';

export const CardMode = {
  None: 0,
  Select: 1,
  Update: 2,
  PlaySound: 3,
};

function Card({
  index = -1,
  section = 'main',
  title = '',
  imageUri = '',
  soundUri = '',
  viewStyle = {},
  textStyle = {},
  mode = CardMode.None,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [soundObj, setSoundObj] = React.useState(undefined);

  React.useEffect(() => {
    if (soundObj) {
      soundObj?.unloadAsync().then(() => {
        setSoundObj(undefined);
        Audio.Sound.createAsync({ uri: soundUri })
          .then(({ sound }) => {
            setSoundObj(sound);
          })
          .catch(() => {
            setSoundObj(undefined);
          });
      });
    } else if (soundUri) {
      Audio.Sound.createAsync({ uri: soundUri })
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
            soundObj?.replayAsync();
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
