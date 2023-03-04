import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Dialog, Portal, Text } from 'react-native-paper';
import app from '../firebase/app';
import EmailTextInput from '../components/auth/EmailTextInput';
import NameTextInput from '../components/auth/NameTextInput';
import PhoneTextInput from '../components/auth/PhoneTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';
import {
  clearInfo,
  setEmail,
  setRegisterStatus,
} from '../redux/slice/login';

export default function RegisterScreen() {
  const login = useSelector((state) => state.login);
  const navigation = useNavigation();
  const dispath = useDispatch();

  const onPressRegister = () => {
    if (
      login.email.error ||
      login.password.error ||
      login.confirmPassword.error ||
      login.userName.error ||
      login.phone.error
    ) {
      /* When there is an error then do nothing */
      return;
    }

    const auth = getAuth(app);

    createUserWithEmailAndPassword(
      auth,
      login.email.value,
      login.password.value
    )
      .then((userCredential) => {
        const { user } = userCredential;
        updateProfile(user, {
          displayName: login.userName,
          phoneNumber: login.phone
            ? login.phone
            : undefined,
        });

        dispath(clearInfo());
        dispath(setRegisterStatus(true));
        navigation.goBack();
      })
      .catch((error) => {
        dispath(setRegisterStatus(false));
        // console.log('Register failure:', error.code);

        switch (error.code) {
          case 'auth/email-already-in-use':
            dispath(
              setEmail({ error: 'Email đã tồn tại' })
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
      <NameTextInput viewStyle={tw`w-full`} />
      <PhoneTextInput viewStyle={tw`w-full`} />
      <PasswordTextInput
        validate
        viewStyle={tw`w-full`}
      />
      <Button
        bounce
        buttonStyle={tw`rounded-full bg-white`}
        label="Đăng ký"
        mode="outlined"
        onPress={onPressRegister}
        textStyle={tw`text-2xl`}
        viewStyle={tw`w-2/4`}
      />
    </SafeAreaView>
  );
}
