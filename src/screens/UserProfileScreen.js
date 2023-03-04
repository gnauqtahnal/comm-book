/* eslint-disable import/order */
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { signOut } from 'firebase/auth';
import auth from '../firebase/auth';
import Button from '../components/core/Button';
import { useNavigation } from '@react-navigation/native';

export default function UserProfileScreen() {
  const navigation = useNavigation();
  const { currentUser } = auth;
  const [loginLoading, setLoginLoading] =
    React.useState(false);

  const onPressLogout = () => {
    setLoginLoading(true);

    signOut(auth)
      .then(() => {
        setLoginLoading(false);
        console.log('SignOut success');

        navigation.replace('Home');
      })
      .catch((error) => {
        setLoginLoading(false);
        console.log('SignOut failure: ', error.code);
      });
  };

  return (
    <SafeAreaView style={tw`flex-1 p-4 items-center`}>
      <Text style={tw`text-xl`}>UserProfile</Text>

      <View style={tw`items-start`}>
        <Text style={tw`text-xl`}>Số điện thoại: </Text>
        <Text style={tw`text-xl`}>
          {currentUser.phoneNumber}
        </Text>
      </View>

      <Button
        bounce
        buttonStyle={tw`rounded-full bg-white`}
        label="Thoát"
        loading={loginLoading}
        mode="outlined"
        onPress={onPressLogout}
        textStyle={tw`text-2xl`}
        viewStyle={tw`w-2/4`}
      />
    </SafeAreaView>
  );
}
