import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Center, Pressable, Text, View } from '../../core';
import {
  launchCameraPickerAsync,
  launchLibraryPickerAsync,
} from '../../features/image-picker';
import {
  LoadingModalMemo,
  useLoadingModal,
} from '../../features/loading-modal';
import { useRecorder } from '../../features/sound-recorder';
import { uploadCardDbAsync } from '../../firebase/db';
import { uploadImageSoundAsync } from '../../firebase/storage';
import CategorySlice from '../../redux/slice/category';
import SafeAreaView from '../../safearea';
import ImageViewMemo from './image-view';
import { EditAction, EditProvider, useEdit } from './reducer';
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

const SoundRecorderButtonMemo = React.memo(() => {
  const { dispatch } = useEdit();

  const callback = (uri) => {
    dispatch({ type: EditAction.SetSoundUri, soundUri: uri });
  };

  const [recording, record] = useRecorder(callback);

  return (
    <Button onPress={record}>
      {recording ? (
        <FontAwesome name="stop" size={iconSize} color="black" />
      ) : (
        <FontAwesome name="microphone" size={iconSize} color="black" />
      )}
    </Button>
  );
});

const SubmitButtonMemo = React.memo(({ viewStyle = '', textStyle = '' }) => {
  const { edit } = useEdit();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { setLoading } = useLoadingModal();

  const handleSubmit = async () => {
    let imageUrl = edit.imageUri;
    let soundUrl = edit.soundUri;

    if (edit.title) {
      setLoading(true);
      [imageUrl, soundUrl] = await uploadImageSoundAsync(
        'default',
        'default',
        edit.title,
        edit.imageUri,
        edit.soundUri
      );
      await uploadCardDbAsync(
        'default',
        'default',
        edit.index,
        edit.title,
        imageUrl,
        soundUrl
      );
      setLoading(false);
    }

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
  };

  return (
    <Button viewStyle={viewStyle} onPress={handleSubmit}>
      <Text tw={`text-xl ${textStyle}`}>Hoàn tất</Text>
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
