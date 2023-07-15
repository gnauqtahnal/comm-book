import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import React, { memo, useCallback } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CommCard from '../../components/button/comm-card'
import LogoView from '../../components/logo'
import { useCommCategoryModal } from '../../components/modal/comm-category'
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
    <View className="w-full flex-row items-center justify-start bg-white">
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

const dataSection = [
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
const dataTable = {
  People: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Teacher: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
}

const BotView = () => {
  const navigation = useNavigation()
  const { toggle } = useCommCategoryModal()

  return (
    <View className="flex-1">
      <FlatList
        data={dataSection}
        renderItem={({ item, index }) => {
          return (
            <View className="mb-8">
              <View className="flex-row">
                <TouchableOpacity
                  onPress={() => {
                    // toggle({ section: item })
                    navigation.navigate('CommCategoryModal')
                  }}
                >
                  <View className="justify-star mb-2 flex-row items-center rounded-md border border-gray-300 bg-white pr-2">
                    <Image
                      className="mr-2 h-11 w-11 rounded-md"
                      source={`https://picsum.photos/512/512?random=${index}`}
                    />
                    <Text className="text-lg">SECTION NAME</Text>
                  </View>
                </TouchableOpacity>
              </View>

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
          return <SeparateBar />
        }}
        // snapToAlignment="start"
        // decelerationRate={'fast'}
        // snapToInterval={144 + 8}
      />
    </View>
  )
}

const SeparateBar = () => {
  return <View className="h-2 w-full bg-gray-200" />
}

const TestScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <TopView />
      <SeparateBar />

      <MidView />
      <SeparateBar />

      <BotView />
    </SafeAreaView>
  )
}

export default TestScreen
