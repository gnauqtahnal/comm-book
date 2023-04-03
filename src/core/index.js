import { styled } from 'nativewind';
import React from 'react';
import {
  FlatList as RnFlatList,
  Image as RnImage,
  Text as RnText,
  TextInput as RnTextInput,
  TouchableOpacity as RnTouchableOpacity,
  View as RnView,
} from 'react-native';

export const FlatList = styled(({ ...props }) => {
  return <RnFlatList {...props} />;
});

export const View = styled(({ children, ...props }) => {
  return <RnView {...props}>{children}</RnView>;
});

export const Center = styled(({ children, ...props }) => {
  return <RnView {...props}>{children}</RnView>;
}, `justify-center items-center`);

export const Pressable = styled(({ children, ...props }) => {
  return <RnTouchableOpacity {...props}>{children}</RnTouchableOpacity>;
});

export const Text = styled(({ children, ...props }) => {
  return <RnText {...props}>{children}</RnText>;
});

export const Image = styled(({ children, ...props }) => {
  return <RnImage {...props} resizeMode="cover" />;
});

export const TextInput = styled(({ children, ...props }) => {
  return <RnTextInput {...props} />;
});

export function Divider({ viewStyle = '' }) {
  return <View tw={`w-full border-t border-gray-500 ${viewStyle}`} />;
}
