import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { View, Pressable, TouchableOpacity } from 'react-native'

const ToolBarView = memo(() => {
  return (
    <TouchableOpacity>
      <View tw={`px-1`}>
        <Ionicons name="ios-backspace" size={50} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const SelectedView = memo(() => {
  return (
    <View tw="flex-row w-full">
      <View tw="flex-1" />
      <ToolBarView />
    </View>
  )
})

export default SelectedView
