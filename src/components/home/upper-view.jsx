import { FontAwesome5 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React, { memo } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'

import { CommCard } from '../comm-card'

const LogoView = memo(() => {
  return (
    <View className="mx-1 my-1 items-center">
      <Image
        className="mb-1 h-10 w-10"
        source={require('../../assets/logo.jpg')}
        contentFit="scale-down"
      />
      <Text className="text-[8px] font-bold">TRUNG TÂM NHÂN VĂN</Text>
    </View>
  )
})

const BackSpaceButton = memo(() => {
  return (
    <TouchableOpacity>
      <View className="px-1">
        <FontAwesome5 name="backspace" size={36} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const TopView = memo(() => {
  return (
    <View className="flex w-full flex-row items-center bg-yellow-200">
      <LogoView />
      <View className="flex-1" />
    </View>
  )
})

const MidView = memo(() => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const renderItem = ({ item, index }) => {
    return <CommCard />
  }

  return (
    <View className="flex h-40 w-full bg-gray-300">
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4()}
      />
    </View>
  )
})

const BotView = memo(() => {
  return (
    <View className="flex w-full flex-row bg-gray-300">
      <View className="flex-1" />
      <BackSpaceButton />
    </View>
  )
})

const UpperView = memo(() => {
  return (
    <View>
      <TopView />
      <MidView />
      <BotView />
    </View>
  )
})

export default UpperView
