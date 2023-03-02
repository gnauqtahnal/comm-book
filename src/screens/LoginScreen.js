import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';

export default function LoginScreen() {
  return (
    <SafeAreaView style={tw`flex-1 p-4 items-center`}>
      <EmailTextInput
        viewStyle={tw`w-full`}
        clear
      />
      <PasswordTextInput
        viewStyle={tw`w-full`}
        clear
      />
      <Button
        bounce
        label="Đăng nhập"
        mode="contained"
        viewStyle={tw`w-2/4`}
        buttonStyle={tw`rounded-full`}
        textStyle={tw`text-2xl`}
      />
    </SafeAreaView>
  );
}
