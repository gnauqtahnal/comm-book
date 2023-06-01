import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { useLoadingModal } from '../../redux/slices/loading'

export default function HomeScreen() {
  const { setOn, setOff } = useLoadingModal()
  const openLoadingModal = () => {
    setOn()

    setTimeout(() => {
      setOff()
    }, 1000)
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
