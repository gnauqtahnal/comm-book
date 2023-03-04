import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';
import auth from '../firebase/auth';
import {
  clearInfo,
  setEmail,
  setRegisterStatus,
} from '../redux/slice/login';

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const registerStatus = useSelector(
    (state) => state.login.registerStatus
  );

  const navigateToRegister = () => {
    dispatch(clearInfo());
    navigation.navigate('Register');
  };

  const onPressLogin = () => {
    if (login.email.error || login.password.error) {
      /* When there is an error then do nothing */
      return;
    }

    signInWithEmailAndPassword(
      auth,
      login.email.value,
      login.password.value
    )
      .then((userCredential) => {
        const { user } = userCredential;
        // console.log('Login success: ', user);

        navigation.goBack();
      })
      .catch((error) => {
        // console.log(error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            dispatch(
              setEmail({ error: 'Email không tồn tại' })
            );
            break;
          default:
            break;
        }
      });
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
        onPress={onPressLogin}
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
        duration={7000}
        onDismiss={() => {
          dispatch(setRegisterStatus(false));
        }}
      >
        Đăng ký thành công
      </Snackbar>
    </SafeAreaView>
  );
}
