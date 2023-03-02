import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export function useEmailTextInputState() {
  const [pass, setPass] = React.useState('');
  const [passErr, setPassErr] = React.useState('');

  return { pass, setPass, passErr, setPassErr };
}

export default function EmailTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const { pass, setPass, passErr, setPassErr } =
    useEmailTextInputState();

  const isEmail = (text) => text.includes('@');

  const onEndEditing = (event) => {
    setPass(event.nativeEvent.text);
    if (isEmail(event.nativeEvent.text)) {
      setPassErr('');
    } else {
      setPassErr('Email không hợp lệ');
    }
  };

  React.useEffect(() => {
    if (clear) {
      setPass('');
      setPassErr('');
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={pass}
        error={passErr !== ''}
        inputMode="email"
        label="Email"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={passErr !== ''}
      >
        {passErr}
      </HelperText>
    </View>
  );
}
