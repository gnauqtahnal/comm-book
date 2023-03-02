import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
