import { Image } from 'expo-image'
import React from 'react'
import { Text, View } from 'react-native'

const logoJpg = require('../../assets/logo.jpg')

const LogoView = () => {
  return (
    <View className="m-1 flex-row items-center justify-center">
      <Image
        className="aspect-square h-8"
        source={logoJpg}
        contentFit="scale-down"
      />

      <View className="mx-1 items-center justify-center">
        <Text className="text-[12px] font-bold">TRUNG TÂM</Text>
        <Text className="text-[12px] font-bold">NHÂN VĂN</Text>
      </View>
    </View>
  )
}

export default LogoView
