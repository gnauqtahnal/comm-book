import React from 'react';

import { Center, Pressable, View } from '../../core';

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
