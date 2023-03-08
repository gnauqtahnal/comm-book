import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

import auth from '../firebase/auth';
import Button from '../components/core/Button';

function CartView({ style = {} }) {
  return (
    <View style={tw`w-full`}>
      <ScrollView
        horizontal
        style={[style, tw`w-full`]}
      >
        {/* <Card style={tw`w-30 h-40`}>
          <Card.Cover
            style={tw`h-30 w-30`}
            source={{ uri: 'https://picsum.photos/700' }}
          />
          <Card.Title
            title="cái gì đó"
            titleStyle={tw`text-center`}
          />
        </Card> */}
      </ScrollView>
    </View>
  );
}

function CategoryView({ style = {} }) {
  return (
    <ScrollView
      refreshControl
      style={[style, tw`w-full flex-wrap`]}
      contentContainerStyle={tw`flex-row flex-wrap justify-around`}
    >
      {/* <Card style={tw`w-30 h-40`}>
        <Card.Cover
          style={tw`h-30 w-30`}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Title
          title="cái gì đó"
          titleStyle={tw`text-center`}
        />
      </Card>
      <Card style={tw`w-30 h-40`}>
        <Card.Cover
          style={tw`h-30 w-30`}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Title
          title="cái gì đó"
          titleStyle={tw`text-center`}
        />
      </Card>
      <Card style={tw`w-30 h-40`}>
        <Card.Cover
          style={tw`h-30 w-30`}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Title
          title="cái gì đó"
          titleStyle={tw`text-center`}
        />
      </Card>
      <Card style={tw`w-30 h-40`}>
        <Card.Cover
          style={tw`h-30 w-30`}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Title
          title="cái gì đó"
          titleStyle={tw`text-center`}
        />
      </Card>
      <Card style={tw`w-30 h-40`}>
        <Card.Cover
          style={tw`h-30 w-30`}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Title
          title="cái gì đó"
          titleStyle={tw`text-center`}
        />
      </Card> */}
    </ScrollView>
  );
}

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

      {/* <CartView style={tw`border mt-4`} />

      <CategoryView style={tw`flex-1 border mt-4`} /> */}
    </SafeAreaView>
  );
}
