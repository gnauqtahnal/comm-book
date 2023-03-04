/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../redux/slice/login';

export default function NameTextInput({
  clear = true,
  contentStyle = {},
  textStyle = {},
  viewStyle = {},
}) {
  const userName = useSelector(
    (state) => state.login.userName
  );
  const dispatch = useDispatch();

  const onEndEditing = (event) => {
    const value = event.nativeEvent.text;
    if (value === '') {
      dispatch(
        setUserName({
          value,
          error: 'Tên người dùng ko được để trống',
        })
      );
    } else {
      dispatch(setUserName({ value, error: '' }));
    }
  };

  React.useEffect(() => {
    if (clear) {
      dispatch(setUserName({ value: '', error: '' }));
    }
  }, []);

  return (
    <View style={viewStyle}>
      <TextInput
        autoCapitalize="none"
        contentStyle={contentStyle}
        defaultValue={userName.value}
        error={userName.error !== ''}
        inputMode="text"
        label="Tên người dùng"
        mode="outlined"
        onEndEditing={onEndEditing}
        style={textStyle}
      />
      <HelperText
        type="error"
        visible={userName.error !== ''}
      >
        {userName.error}
      </HelperText>
    </View>
  );
}
