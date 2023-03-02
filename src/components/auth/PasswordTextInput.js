import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export function usePasswordTextInputState() {
  const [pass, setPass] = React.useState('');
  const [passErr, setPassErr] = React.useState('');
  const [confPass, setConfPass] = React.useState('');
  const [confPassErr, setConfPassErr] = React.useState('');

  return {
    pass,
    setPass,
    passErr,
    setPassErr,
    confPass,
    setConfPass,
    confPassErr,
    setConfPassErr,
  };
}

export default function PasswordTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  validate = false,
  viewStyle = {},
}) {
  const {
    pass,
    setPass,
    passErr,
    setPassErr,
    confPass,
    setConfPass,
    confPassErr,
    setConfPassErr,
  } = usePasswordTextInputState();

  const onEndEditingPass = (event) => {
    const value = event.nativeEvent.text;
    if (value.length >= 8) {
      setPassErr('');
    } else {
      setPassErr('Mật khẩu phải từ 8 ký tự trở lên');
    }
    setPass(value);
  };

  const onEndEditingConfPass = (event) => {
    const value = event.nativeEvent.text;
    if (value === pass) {
      setConfPassErr('');
    } else {
      setConfPassErr('Xác nhận mật khẩu thất bại');
    }
    setConfPass(value);
  };

  React.useEffect(() => {
    if (clear) {
      setPass('');
      setPassErr('');
      setConfPass('');
      setConfPassErr('');
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={pass}
        error={passErr !== ''}
        inputMode="text"
        label="Password"
        mode="outlined"
        onEndEditing={onEndEditingPass}
        secureTextEntry
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={passErr !== ''}
      >
        {passErr}
      </HelperText>

      {validate && (
        <>
          <TextInput
            autoCapitalize="none"
            contentStyle={contentStyle}
            defaultValue={confPass}
            error={confPassErr !== ''}
            inputMode="text"
            label="Confirm password"
            mode="outlined"
            onEndEditing={onEndEditingConfPass}
            secureTextEntry
            style={textStyle}
          />
          <HelperText
            type="error"
            visible={confPassErr !== ''}
          >
            {confPassErr}
          </HelperText>
        </>
      )}
    </View>
  );
}
