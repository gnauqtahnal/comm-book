import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useDispatch } from 'react-redux'

import { Pressable, View } from '../../core'
import CategorySlice from '../../redux/slice/category'
import { iconSize } from './style'

const AdditionCardButton = () => {
  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(CategorySlice.actions.add())
      }}
    >
      <View tw={`border rounded-lg mx-1 px-4 py-1 bg-white`}>
        <FontAwesome name="plus" size={iconSize} color="black" />
      </View>
    </Pressable>
  )
}

function DropSelectedButton({ viewStyle = '' }) {
  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(CategorySlice.actions.drop())
      }}
    >
      <View tw={`border rounded-lg mx-1 px-4 py-1 bg-white ${viewStyle}`}>
        <Ionicons name="ios-backspace" size={iconSize} color="black" />
      </View>
    </Pressable>
  )
}

const DropSelectedButtonMemo = React.memo(DropSelectedButton)

function ToolBarView({ viewStyle = '' }) {
  return (
    <View tw={`flex-row w-full ${viewStyle}`}>
      <View tw="flex-1" />
      <AdditionCardButton />
      <DropSelectedButtonMemo />
    </View>
  )
}

export default ToolBarView
