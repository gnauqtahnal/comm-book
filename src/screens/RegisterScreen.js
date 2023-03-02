import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import NameTextInput from '../components/auth/NameTextInput';
import PhoneTextInput from '../components/auth/PhoneTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';

export default function RegisterScreen() {
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
        label="Đăng ký"
        mode="contained"
        viewStyle={tw`w-2/4`}
        buttonStyle={tw`rounded-full`}
        textStyle={tw`text-2xl`}
      />
    </SafeAreaView>
  );
}
