import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export function useEmailTextInputState() {
  const [email, setEmail] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');

  return { email, setEmail, emailErr, setEmailErr };
}

export default function EmailTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const { email, setEmail, emailErr, setEmailErr } =
    useEmailTextInputState();

  const isEmail = (text) => text.includes('@');

  const onEndEditing = (event) => {
    setEmail(event.nativeEvent.text);
    if (isEmail(event.nativeEvent.text)) {
      setEmailErr('');
    } else {
      setEmailErr('Email không hợp lệ');
    }
  };

  React.useEffect(() => {
    if (clear) {
      setEmail('');
      setEmailErr('');
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={email}
        error={emailErr !== ''}
        inputMode="email"
        label="Email"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={emailErr !== ''}
      >
        {emailErr}
      </HelperText>
    </View>
  );
}
