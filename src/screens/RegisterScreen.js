import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import auth from '../firebase/auth';
import EmailTextInput from '../components/auth/EmailTextInput';
import NameTextInput from '../components/auth/NameTextInput';
import PhoneTextInput from '../components/auth/PhoneTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';
import {
  clearInfo,
  setEmail,
  setRegisterStatus,
  setUserName,
} from '../redux/slice/login';

export default function RegisterScreen() {
  const login = useSelector((state) => state.login);
  const navigation = useNavigation();
  const dispath = useDispatch();
  const [loginLoading, setLoginLoading] =
    React.useState(false);

  const onPressRegister = () => {
    setLoginLoading(true);

    if (
      login.email.error ||
      login.password.error ||
      login.confirmPassword.error ||
      login.userName.error ||
      login.phone.error
    ) {
      /* When there is an error then do nothing */
      setLoginLoading(false);
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      login.email.value,
      login.password.value
    )
      .then((userCredential) => {
        const { user } = userCredential;
        updateProfile(user, {
          displayName: login.userName.value,
          phoneNumber: login.phone.value,
        })
          .then(() => {
            setLoginLoading(false);
            dispath(clearInfo());
            dispath(setRegisterStatus(true));

            navigation.goBack();
          })
          .catch((error) => {
            setLoginLoading(false);
            deleteUser(user);
            // console.log('update failure: ', error.code);
            if (
              error.code.includes(
                'invalid-value-(display-name)'
              )
            ) {
              dispath(
                setUserName({
                  error: 'Tên đăng nhập không hợp lệ',
                })
              );
            }
          });
      })
      .catch((error) => {
        setLoginLoading(false);
        dispath(setRegisterStatus(false));
        // console.log('Register failure:', error.code);

        if (
          error.code.includes('auth/email-already-in-use')
        ) {
          dispath(setEmail({ error: 'Email đã tồn tại' }));
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
        loading={loginLoading}
        mode="outlined"
        onPress={onPressRegister}
        textStyle={tw`text-2xl`}
        viewStyle={tw`w-2/4`}
      />
    </SafeAreaView>
  );
}
