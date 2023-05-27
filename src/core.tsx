import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  SafeAreaProvider as SafeAreaProviderOrg,
  SafeAreaView as SafeAreaViewOrg,
  initialWindowMetrics,
} from 'react-native-safe-area-context'

import { StatusBar as StatusBarExpo } from 'expo-status-bar'

import CommonView from './components/home/section/common'
import SelectedView from './components/home/selected'

const Stack = createNativeStackNavigator()
const HomeDrawer = createDrawerNavigator()

const HomeDrawerScreen = () => {
  return (
    <SafeAreaView>
      <SelectedView />
      <HomeDrawer.Navigator screenOptions={{ headerShown: false }}>
        <HomeDrawer.Screen name="Common" component={CommonView} />
      </HomeDrawer.Navigator>
    </SafeAreaView>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeDrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const SafeAreaProvider = ({ children }) => {
  return (
    <SafeAreaProviderOrg initialMetrics={initialWindowMetrics}>
      {children}
    </SafeAreaProviderOrg>
  )
}

export const SafeAreaView = ({ children }) => {
  return (
    <SafeAreaViewOrg>
      <View>
        <StatusBar />
        {children}
      </View>
    </SafeAreaViewOrg>
  )
}

export const StatusBar = () => {
  return <StatusBarExpo style="light" />
}