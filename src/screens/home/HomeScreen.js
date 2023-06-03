import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { CommCard } from '../../components/button/card'
import { useCardPlayableStack } from '../../redux/slices/stack'

export default function HomeScreen() {
  const { cardPlayable, popValue, pushCard, popCard } = useCardPlayableStack()

  return (
    <View>
      <CommCard />

      <TouchableOpacity
        onPress={() => {
          pushCard('a')
        }}
      >
        <View
          style={{
            padding: 8,
            borderWidth: 1,
            borderRadius: 8,
            width: 128,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        >
          <Text style={{ fontSize: 18 }}>PUSH</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          popCard()
        }}
      >
        <View
          style={{
            padding: 8,
            borderWidth: 1,
            borderRadius: 8,
            width: 128,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        >
          <Text style={{ fontSize: 18 }}>POP</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
