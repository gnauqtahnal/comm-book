import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export function usePhoneTextInputState() {
  const [phone, setPhone] = React.useState('');
  const [phoneErr, setPhoneErr] = React.useState('');

  return { phone, setPhone, phoneErr, setPhoneErr };
}

export default function PhoneTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const { phone, setPhone, phoneErr, setPhoneErr } =
    usePhoneTextInputState();

  const onEndEditing = (event) => {
    setPhone(event.nativeEvent.text);
  };

  React.useEffect(() => {
    if (clear) {
      setPhone('');
      setPhoneErr('');
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={phone}
        error={phoneErr !== ''}
        inputMode="numeric"
        label="Số điện thoại"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={phoneErr !== ''}
      >
        {phoneErr}
      </HelperText>
    </View>
  );
}
