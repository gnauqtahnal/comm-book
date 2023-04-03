import { useRoute } from '@react-navigation/native';
import React from 'react';

import { Center } from '../../core';
import SafeAreaView from '../../safearea';
import CameraPickerButtonMemo from './camera-picker';
import ImageViewMemo from './image-view';
import LibraryPickerButtonMemo from './library-picker';
import { EditAction, EditProvider, useEdit } from './reducer';
import SoundRecorderButtonMemo from './sound-recorder';
import SubmitButtonMemo from './submit';
import TitleInputMemo from './title-input';

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
