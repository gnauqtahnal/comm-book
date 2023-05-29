import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar as StatusBarExpo } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import {
  SafeAreaProvider as SafeAreaProviderOrg,
  SafeAreaView as SafeAreaViewOrg,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'

import store from '../../redux'
import LowerView from '../home/lower-view'
import UpperView from '../home/upper-view'

const Stack = createNativeStackNavigator()
const HomeDrawer = createDrawerNavigator()

const HomeDrawerScreen = () => {
  return (
    <SafeAreaView>
      <UpperView />

      <HomeDrawer.Navigator screenOptions={{ headerShown: false }}>
        <HomeDrawer.Screen
          name="Chung"
          component={LowerView}
          initialParams={{ section: 'common' }}
        />
        <HomeDrawer.Screen
          name="Học sinh"
          component={LowerView}
          initialParams={{ section: 'student' }}
        />
        <HomeDrawer.Screen
          name="Động từ"
          component={LowerView}
          initialParams={{ section: 'verb' }}
        />
      </HomeDrawer.Navigator>
    </SafeAreaView>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeDrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const SafeAreaProvider = ({ children }) => {
  return (
    <SafeAreaProviderOrg initialMetrics={initialWindowMetrics}>
      {children}
    </SafeAreaProviderOrg>
  )
}

const SafeAreaView = ({ children }) => {
  return (
    <SafeAreaViewOrg className="flex-1 bg-black">
      <View className="flex-1 rounded-md bg-white">
        <StatusBar />
        {children}
      </View>
    </SafeAreaViewOrg>
  )
}

const StatusBar = () => {
  return <StatusBarExpo style="light" />
}

const Core = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ReduxProvider>
  )
}

export default Core
