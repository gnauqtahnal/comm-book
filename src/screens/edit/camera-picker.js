import { Entypo } from '@expo/vector-icons';
import React from 'react';

import { launchCameraPickerAsync } from '../../features/image-picker';
import { EditAction, useEdit } from './reducer';
import { Button, iconSize } from './style';

function CameraPickerButton() {
  const { dispatch } = useEdit();

  async function launchPicker() {
    try {
      const uri = await launchCameraPickerAsync();
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
      <Entypo name="camera" size={iconSize} color="black" />
    </Button>
  );
}

const CameraPickerButtonMemo = React.memo(CameraPickerButton);

export default CameraPickerButtonMemo;
