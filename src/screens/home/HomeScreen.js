import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { on } from '../../redux/slices/loading'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const openLoadingModal = () => {
    dispatch(on())
  }

  return (
    <View>
      <Text>Hello from HomeScreen</Text>
      <TouchableOpacity onPress={openLoadingModal}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 32 }}>Modal</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
