import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Button from '../components/core/Button';

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={tw`flex-1 p-4 items-center`}>
      <View
        style={tw`flex-row justify-start items-center bg-gray-200 rounded-full`}
      >
        <Button
          bounce
          buttonStyle={tw`rounded-full bg-white`}
          label="Đăng nhập"
          mode="outlined"
          onPress={navigateToLogin}
        />
        <View style={tw`flex-1`} />
      </View>
    </SafeAreaView>
  );
}
