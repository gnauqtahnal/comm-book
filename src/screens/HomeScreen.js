import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import EmailTextInput from '../components/auth/EmailTextInput';
import PasswordTextInput from '../components/auth/PasswordTextInput';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex-1 p-4`}>
      <EmailTextInput />
      <PasswordTextInput clear />
      <PasswordTextInput validate />
    </SafeAreaView>
  );
}