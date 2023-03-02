import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export function useNameTextInputState() {
  const [name, setName] = React.useState('');
  const [nameErr, setNameErr] = React.useState('');

  return { name, setName, nameErr, setNameErr };
}

export default function NameTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const { name, setName, nameErr, setNameErr } =
    useNameTextInputState();

  const onEndEditing = (event) => {
    setName(event.nativeEvent.text);
  };

  React.useEffect(() => {
    if (clear) {
      setName('');
      setNameErr('');
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={name}
        error={nameErr !== ''}
        inputMode="text"
        label="Tên người dùng"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={nameErr !== ''}
      >
        {nameErr}
      </HelperText>
    </View>
  );
}
