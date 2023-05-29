import { Octicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Pressable = ({
  children = undefined,
  onPress = undefined,
  onLongPress = undefined,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      delayLongPress={1000}
      onLongPress={onLongPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const CardView = ({ children, twStyle = '' }) => {
  return (
    <View
      className={`ml-2 h-40 w-32 items-center justify-center rounded-lg border border-black bg-white ${twStyle}`}
    >
      {children}
    </View>
  )
}

export const CommCard = ({ viewTwStyle = '' }) => {
  return (
    <Pressable>
      <CardView twStyle={viewTwStyle}>
        <View className="p-2">
          <Image
            className={`aspect-square w-full rounded-lg`}
            source={{ uri: 'https://picsum.photos/200' }}
          />
        </View>
        <View
          className={`w-full flex-1 items-center justify-center border-t border-black`}
        >
          <Text className={`text-lg`}></Text>
        </View>
      </CardView>
    </Pressable>
  )
}

export const IconAddCommCard = ({ viewTwStyle = '' }) => {
  return (
    <Pressable>
      <CardView twStyle={viewTwStyle}>
        <Octicons name="plus" size={40} color="black" />
      </CardView>
    </Pressable>
  )
}
