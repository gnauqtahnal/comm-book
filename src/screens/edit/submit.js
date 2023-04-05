import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '../../core';
import {
  downloadAsync,
  getImagePath,
  getSoundPath,
  uploadAsync,
} from '../../firebase';
import CategorySlice from '../../redux/slice/category';
import { useEdit } from './reducer';
import { Button } from './style';

function SubmitButton({ viewStyle = '', textStyle = '' }) {
  const { edit } = useEdit();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Button
      viewStyle={viewStyle}
      onPress={async () => {
        if (edit.title) {
          try {
            const imagePath = getImagePath(
              'test',
              edit.section,
              edit.title,
              edit.imageUri
            );
            const soundPath = getSoundPath(
              'test',
              edit.section,
              edit.title,
              edit.soundUri
            );

            await uploadAsync(imagePath, edit.imageUri);
            const imageUrl = await downloadAsync(imagePath);

            await uploadAsync(soundPath, edit.soundUri);
            const soundUrl = await downloadAsync(soundPath);

            dispatch(
              CategorySlice.actions.update({
                index: edit.index,
                section: edit.section,
                title: edit.title,
                imageUri: imageUrl,
                soundUri: soundUrl,
              })
            );
            navigation.goBack();
          } catch (error) {
            // do nothing
            console.error(`handle submit failure ${error}`);
          }
          return;
        }

        dispatch(
          CategorySlice.actions.update({
            index: edit.index,
            section: edit.section,
            title: edit.title,
            imageUri: edit.imageUri,
            soundUri: edit.soundUri,
          })
        );

        navigation.goBack();
      }}
    >
      <Text tw={`text-xl ${textStyle}`}>Hoàn tất</Text>
    </Button>
  );
}

const SubmitButtonMemo = React.memo(SubmitButton);

export default SubmitButtonMemo;
