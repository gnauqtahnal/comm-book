/* eslint-disable react/style-prop-object */
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'

import { CommCategoryModal } from './src/components/modal/comm-category'
import { LoadingModal } from './src/components/modal/loading'
import { ReduxProvider } from './src/redux'
import TestScreen from './src/screens/test'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Test" component={TestScreen} />

      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          contentStyle: {
            backgroundColor: undefined,
          },
        }}
      >
        <Stack.Screen name="CommCategoryModal" component={CommCategoryModal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem label="Help" /> */}
    </DrawerContentScrollView>
  )
}

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <LoadingModal />
        {/* <CommCategoryModal /> */}
        <HomeDrawer />
      </NavigationContainer>
    </ReduxProvider>
  )
}
