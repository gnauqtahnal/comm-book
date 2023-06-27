import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { memo, useCallback } from 'react'
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CommCard from '../../components/button/comm-card'
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

const TopView = memo(() => {
  return (
    <View className="flex-row items-center justify-start bg-white">
      <DrawerMenu />
      <LogoView />
    </View>
  )
})

const MidView = () => {
  return (
    <View>
      <StackScrollList />
    </View>
  )
}

const dataTable = {
  People: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Teacher: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
}

const BotView = () => {
  const section = [
    'People',
    'Teacher',
    'People',
    'Teacher',
    'People',
    'Teacher',
    'People',
    'Teacher',
    'People',
    'Teacher',
  ]

  return (
    <View className="flex-1">
      <FlatList
        data={section}
        renderItem={({ item }) => {
          return (
            <View className="h-36">
              <FlatList
                data={dataTable[item]}
                renderItem={({ item }) => {
                  return <CommCard />
                }}
                ItemSeparatorComponent={() => {
                  return <View className="p-1" />
                }}
                horizontal
                snapToAlignment="start"
                decelerationRate={'fast'}
                snapToInterval={112 + 8}
              />
            </View>
          )
        }}
        ItemSeparatorComponent={() => {
          return <View className="p-1" />
        }}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={144 + 8}
      />
    </View>
  )
}

const SeparateBar = () => {
  return <View className="h-2 w-full bg-gray-200" />
}

const TestScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopView />
      <SeparateBar />

      <MidView />
      <SeparateBar />

      <BotView />
    </SafeAreaView>
  )
}

export default TestScreen
