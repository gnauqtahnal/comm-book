/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPassword,
  setConfirmPassword,
} from '../../redux/slice/login';

export default function PasswordTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  validate = false,
  viewStyle = {},
}) {
  const password = useSelector(
    (state) => state.login.password
  );
  const confirmPassword = useSelector(
    (state) => state.login.confirmPassword
  );
  const dispatch = useDispatch();

  const onEndEditingPass = (event) => {
    const value = event.nativeEvent.text;
    if (value.length >= 8) {
      dispatch(setPassword({ value, error: '' }));
    } else {
      dispatch(
        setPassword({
          value,
          error: 'Mật khẩu phải từ 8 ký tự trở lên',
        })
      );
    }
  };

  const onEndEditingConfPass = (event) => {
    const value = event.nativeEvent.text;
    if (value === password.value) {
      dispatch(setConfirmPassword({ value, error: '' }));
    } else {
      dispatch(
        setConfirmPassword({
          value,
          error: 'Xác nhận mật khẩu thất bại',
        })
      );
    }
  };

  React.useEffect(() => {
    if (clear) {
      dispatch(setPassword({ value: '', error: '' }));
      dispatch(
        setConfirmPassword({ value: '', error: '' })
      );
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={password.value}
        error={password.error !== ''}
        inputMode="text"
        label="Password"
        mode="outlined"
        onEndEditing={onEndEditingPass}
        secureTextEntry
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={password.error !== ''}
      >
        {password.error}
      </HelperText>

      {validate && (
        <>
          <TextInput
            autoCapitalize="none"
            contentStyle={contentStyle}
            defaultValue={confirmPassword.value}
            error={confirmPassword.error !== ''}
            inputMode="text"
            label="Confirm password"
            mode="outlined"
            onEndEditing={onEndEditingConfPass}
            secureTextEntry
            style={textStyle}
          />
          <HelperText
            type="error"
            visible={confirmPassword.error !== ''}
          >
            {confirmPassword.error}
          </HelperText>
        </>
      )}
    </View>
  );
}
