import { Entypo } from '@expo/vector-icons';
import React from 'react';

import { launchLibraryPickerAsync } from '../../features/image-picker';
import { EditAction, useEdit } from './reducer';
import { Button, iconSize } from './style';

function LibraryPickerButton() {
  const { dispatch } = useEdit();

  async function launchPicker() {
    try {
      const uri = await launchLibraryPickerAsync();
      dispatch({
        type: EditAction.SetImageUri,
        imageUri: uri,
      });
    } catch (error) {
      // do nothing
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
