import { Image } from 'expo-image'
import React, { useLayoutEffect, useState } from 'react'
import { memo } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

const ImageView = () => {
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState(0)

  useLayoutEffect(() => {
    setId(Math.random() * 9999999)
  }, [])

  return (
    <View className="flex aspect-square w-full rounded-t-md">
      <Image
        className="aspect-square w-full rounded-t-md"
        source={`https://picsum.photos/512/512?ramdom=${id}`}
        contentFit="contain"
        onLoadStart={() => {
          setLoading(true)
        }}
        onLoadEnd={() => {
          setLoading(false)
        }}
      />
      {loading ? (
        <View className="absolute aspect-square w-full items-center justify-center rounded-t-md bg-white opacity-80">
          <ActivityIndicator size="small" color="black" />
        </View>
      ) : null}
    </View>
  )
}

const TextView = memo(({ text }) => {
  return (
    <View className="w-fit flex-1 justify-center rounded-b-md bg-gray-300">
      <Text className="text-center">{text}</Text>
    </View>
  )
})

export const BlankCommCard = memo(() => {
  return <View className="h-40 w-32" />
})

const CommCard = () => {
  return (
    <TouchableOpacity className="flex h-40 w-32 rounded-md border bg-white">
      <ImageView />
      <TextView text="TRUNG TAM" />
    </TouchableOpacity>
  )
}

export default CommCard
