/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setPhone } from '../../redux/slice/login';

export default function PhoneTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const phone = useSelector((state) => state.login.phone);
  const dispatch = useDispatch();

  const onEndEditing = (event) => {
    const value = event.nativeEvent.text;
    dispatch(setPhone({ value, error: '' }));
  };

  React.useEffect(() => {
    if (clear) {
      dispatch(setPhone({ value: '', error: '' }));
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={phone.value}
        error={phone.error !== ''}
        inputMode="numeric"
        label="Số điện thoại"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={phone.error !== ''}
      >
        {phone.error}
      </HelperText>
    </View>
  );
}
