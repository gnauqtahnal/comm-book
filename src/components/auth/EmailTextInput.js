/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../redux/slice/login';

export default function EmailTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();

  const isEmail = (text) => text.includes('@');

  const onEndEditing = (event) => {
    const value = event.nativeEvent.text;
    if (isEmail(value)) {
      dispatch(setEmail({ value, error: '' }));
    } else {
      dispatch(
        setEmail({ value, error: 'Email không hợp lệ' })
      );
    }
  };

  React.useEffect(() => {
    if (clear) {
      dispatch(setEmail({ value: '', error: '' }));
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={email.value}
        error={email.error !== ''}
        inputMode="email"
        label="Email"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={email.error !== ''}
      >
        {email.error}
      </HelperText>
    </View>
  );
}
