import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '../../core';
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
      onPress={() => {
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
