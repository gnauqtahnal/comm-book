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
  setPassword,
  setRegisterStatus,
} from '../redux/slice/login';

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const registerStatus = useSelector(
    (state) => state.login.registerStatus
  );
  const [loginLoading, setLoginLoading] =
    React.useState(false);

  const navigateToRegister = () => {
    dispatch(clearInfo());
    navigation.navigate('Register');
  };

  const onPressLogin = () => {
    setLoginLoading(true);
    if (login.email.error || login.password.error) {
      setLoginLoading(false);
      return;
    }

    if (login.email.value === '') {
      dispatch(
        setEmail({ error: 'Email không được bỏ trống' })
      );
      setLoginLoading(false);
      return;
    }

    if (login.password.value === '') {
      dispatch(
        setPassword({
          error: 'Mật khẩu không được bỏ trống',
        })
      );
      setLoginLoading(false);
      return;
    }

    signInWithEmailAndPassword(
      auth,
      login.email.value,
      login.password.value
    )
      .then((userCredential) => {
        setLoginLoading(false);
        const { user } = userCredential;
        // console.log('Login success: ', user);

        dispatch(clearInfo());
        navigation.replace('Home');
      })
      .catch((error) => {
        setLoginLoading(false);
        if (error.code.includes('auth/wrong-password')) {
          dispatch(setPassword({ error: 'Sai mật khẩu' }));
        } else if (
          error.code.includes('auth/invalid-email')
        ) {
          dispatch(
            setEmail({ error: 'Email không tồn tại' })
          );
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
        loading={loginLoading}
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
