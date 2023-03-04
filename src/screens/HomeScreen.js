import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import auth from '../firebase/auth';
import Button from '../components/core/Button';

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const { currentUser } = auth;

  return (
    <SafeAreaView style={tw`flex-1 p-4 items-center`}>
      <View
        style={tw`flex-row justify-start items-center bg-gray-200 rounded-full`}
      >
        <Button
          bounce
          buttonStyle={tw`rounded-full bg-white`}
          label={
            currentUser
              ? currentUser.displayName
              : 'Đăng nhập'
          }
          mode="outlined"
          onPress={
            currentUser
              ? navigateToUserProfile
              : navigateToLogin
          }
        />
        <View style={tw`flex-1`} />
      </View>
    </SafeAreaView>
  );
}
