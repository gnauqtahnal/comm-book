import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import EditScreen from './screens/edit';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
