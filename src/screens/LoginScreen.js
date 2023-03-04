import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';
import Button from '../components/core/Button';

export default function LoginScreen() {
  const navigation = useNavigation();

  const navigateToRegister = () => {
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
    </SafeAreaView>
  );
}
