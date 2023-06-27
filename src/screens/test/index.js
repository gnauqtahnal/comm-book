import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { memo, useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import LogoView from '../../components/logo'
import StackScrollList from '../../components/scroll-list/stack/StackScrollList'

const DrawerMenu = () => {
  const navigation = useNavigation()

  const drawerToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [])

  return (
    <TouchableOpacity onPress={drawerToggle}>
      <View className="m-1 rounded-full bg-white p-1">
        <MaterialCommunityIcons name="menu" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const TopBar = memo(() => {
  return (
    <View className="flex-row items-center justify-start bg-white">
      <DrawerMenu />
      <LogoView />
    </View>
  )
})

const MiddleBar = () => {
  return (
    <View>
      <StackScrollList />
    </View>
  )
}

const SeparateBar = () => {
  return <View className="h-2 w-full bg-gray-200" />
}

const TestScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopBar />
      <SeparateBar />

      <MiddleBar />
      <SeparateBar />
    </SafeAreaView>
  )
}

export default TestScreen
