import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';

import { EditAction, useEdit } from './reducer';
import { Button, iconSize } from './style';

function LibraryPickerButton() {
  const { dispatch } = useEdit();

  async function launchPicker() {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      dispatch({
        type: EditAction.SetImageUri,
        imageUri: result.assets[0].uri,
      });
    }
  }

  return (
    <Button
      onPress={async () => {
        await launchPicker();
      }}
    >
      <Entypo name="images" size={iconSize} color="black" />
    </Button>
  );
}

const LibraryPickerButtonMemo = React.memo(LibraryPickerButton);

export default LibraryPickerButtonMemo;
