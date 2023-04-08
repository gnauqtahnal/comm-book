import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';

import { Center, Pressable, View } from '../../core';
import {
  launchCameraPickerAsync,
  launchLibraryPickerAsync,
} from '../../features/image-picker';
import { LoadingModalMemo } from '../../features/loading-modal';
import SafeAreaView from '../../safearea';
import ImageViewMemo from './image-view';
import { EditAction, EditProvider, useEdit } from './reducer';
import SoundRecorderButtonMemo from './sound-recorder';
import SubmitButtonMemo from './submit';
import TitleInputMemo from './title-input';

export const iconSize = 36;

export function Button({ children, onPress = undefined, viewStyle = '' }) {
  return (
    <Pressable tw="w-full" onPress={onPress}>
      <Center tw={`border p-2 mx-2 my-1 ${viewStyle}`}>{children}</Center>
    </Pressable>
  );
}

export function InputView({ children, viewStyle = '' }) {
  return <View tw={`w-full px-2 mx-2 my-1 ${viewStyle}`}>{children}</View>;
}

const CameraPickerButtonMemo = React.memo(() => {
  const { dispatch } = useEdit();

  const launchPicker = () => {
    launchCameraPickerAsync().then((uri) => {
      dispatch({
        type: EditAction.SetImageUri,
        imageUri: uri,
      });
    });
  };

  return (
    <Button onPress={launchPicker}>
      <Entypo name="camera" size={iconSize} color="black" />
    </Button>
  );
});

const LibraryPickerButtonMemo = React.memo(() => {
  const { dispatch } = useEdit();

  const launchPicker = () => {
    launchLibraryPickerAsync().then((uri) => {
      dispatch({
        type: EditAction.SetImageUri,
        imageUri: uri,
      });
    });
  };

  return (
    <Button onPress={launchPicker}>
      <Entypo name="images" size={iconSize} color="black" />
    </Button>
  );
});

function EditComponent() {
  const route = useRoute();
  const { dispatch } = useEdit();

  React.useLayoutEffect(() => {
    dispatch({
      type: EditAction.Update,
      index: route.params.index,
      section: route.params.section,
      title: route.params.title,
      imageUri: route.params.imageUri,
      soundUri: route.params.soundUri,
    });
  }, []);

  return (
    <Center tw="flex-1 w-full justify-start px-16 py-4">
      <ImageViewMemo />
      <TitleInputMemo />
      <CameraPickerButtonMemo />
      <LibraryPickerButtonMemo />
      <SoundRecorderButtonMemo />
      <SubmitButtonMemo />

      <LoadingModalMemo />
    </Center>
  );
}

export default function EditScreen() {
  return (
    <SafeAreaView>
      <EditProvider>
        <EditComponent />
      </EditProvider>
    </SafeAreaView>
  );
}
