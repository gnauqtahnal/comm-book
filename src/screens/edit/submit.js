import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '../../core';
import { useLoadingModal } from '../../features/loading-modal';
// import { uploadDbAsync } from '../../firebase/db';
import CategorySlice from '../../redux/slice/category';
import { useEdit } from './reducer';
import { Button } from './style';

function SubmitButton({ viewStyle = '', textStyle = '' }) {
  const { edit } = useEdit();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { setLoading } = useLoadingModal();

  return (
    <Button
      viewStyle={viewStyle}
      onPress={async () => {
        if (edit.title) {
          setLoading(true);
          try {
            // const imagePath = getImagePath(
            //   'default',
            //   'default',
            //   edit.title,
            //   edit.imageUri
            // );
            // const soundPath = getSoundPath(
            //   'default',
            //   'default',
            //   edit.title,
            //   edit.soundUri
            // );

            // setLoading(true);

            // const [imageUrl, soundUrl] = await Promise.all([
            //   uploadAsync(imagePath, edit.imageUri),
            //   uploadAsync(soundPath, edit.soundUri),
            // ]);

            // const uploadDbObj = JSON.parse(`{
            //   "${edit.index}": {
            //     "title": "${edit.title}",
            //     "imageUri": "${imageUrl}",
            //     "soundUri": "${soundUrl}"
            //   }
            // }`);
            // console.log(`uploadDbObj: ${JSON.stringify(uploadDbObj, null, 2)}`);

            // await uploadDbAsync('default/default', uploadDbObj);

            const imageUrl = edit.imageUri;
            const soundUrl = edit.soundUri;

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
            console.error(`handle submit failure ${error}`);
          }
          setLoading(false);
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
