import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

const SelectionView = () => {
  const route = useRoute()

  return (
    <View>
      <Text>{route.params.section}</Text>
    </View>
  )
}

export default SelectionView
