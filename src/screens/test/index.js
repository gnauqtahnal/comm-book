import React from 'react';

import { Center, Pressable, Text } from '../../core';
import LoadingModal, { useLoadingModal } from '../../features/loading-modal';
import SafeAreaView from '../../safearea';
import { uploadDbAsync, downloadDbAsync } from '../../firebase/db';

export default function TestScreen() {
  const { setLoading } = useLoadingModal();
  const [fromDb, setFromDb] = React.useState(undefined);

  return (
    <SafeAreaView>
      <Center>
        <Text>Hello world</Text>

        <Pressable
          onPress={() => {
            setLoading((v) => !v);
            uploadDbAsync("mynameishello/book", {
              0: {
                titile: "orange",
                image: {
                  uri: "image-url",
                  ref: "image/apple",
                },
                sound: {
                  uri: "sound-url",
                  ref: "sound/apple",
                }
              }
            })
            .catch((error) => {
              console.error(`upload to database error ${error}`)
            })
            .finally(() => {
              setLoading(false)
            })
          }}
        >
          <Center tw="border rounded-xl p-2">
            <Text tw="text-xl">Upload</Text>
          </Center>
        </Pressable>

        <Pressable
          onPress={() => {
            setLoading((v) => !v);
            downloadDbAsync("mynameishello/book")
            .then((data) => {
              setFromDb(data);
            })
            .catch((error) => {
              console.error(`upload to database error ${error}`)
            })
            .finally(() => {
              setLoading(false)
            })
          }}
        >
          <Center tw="border rounded-xl p-2">
            <Text tw="text-xl">Download</Text>
          </Center>
        </Pressable>

        <Text>{JSON.stringify(fromDb, null, 2)}</Text>

        <LoadingModal />
      </Center>
    </SafeAreaView>
  );
}
