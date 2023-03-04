import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';
import {
  clearInfo,
  setRegisterStatus,
} from '../redux/slice/login';

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const registerStatus = useSelector(
    (state) => state.login.registerStatus
  );

  const navigateToRegister = () => {
    dispatch(clearInfo());
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={tw`flex-1 p-4 items-center`}>
      <EmailTextInput viewStyle={tw`w-full`} />
      <PasswordTextInput viewStyle={tw`w-full`} />
      <Button
        bounce
        buttonStyle={tw`rounded-full bg-white`}
        label="Đăng nhập"
        mode="outlined"
        textStyle={tw`text-2xl`}
        viewStyle={tw`w-2/4`}
      />
      <View style={tw`flex-1`} />
      <Button
        bounce
        buttonStyle={tw`rounded-full`}
        label="Đăng ký"
        mode="text"
        onPress={navigateToRegister}
        textStyle={tw`text-2xl`}
        viewStyle={tw`w-2/4`}
      />
      <Snackbar
        visible={registerStatus}
        duration={10000}
        onDismiss={() => {
          dispatch(setRegisterStatus(false));
        }}
      >
        Đăng ký thành công
      </Snackbar>
    </SafeAreaView>
  );
}
