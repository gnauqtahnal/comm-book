import { FontAwesome5 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

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
  return <View className="flex h-32 w-full bg-blue-100"></View>
})

const BotView = memo(() => {
  return (
    <View className="flex w-full flex-row bg-blue-100">
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
