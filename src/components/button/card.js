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

const CommCardView = ({ children = undefined, viewStyle = {} }) => {
  return (
    <View
      style={[
        {
          height: 160,
          width: 128,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'rgb(255, 255, 255)',
        },
        viewStyle,
      ]}
    >
      {children}
    </View>
  )
}

export const CommCard = memo(function CommCard({ viewStyle = {} }) {
  return (
    <Pressable>
      <CommCardView viewStyle={viewStyle}>
        <View style={{ padding: 8 }}>
          <Image
            style={{ aspectRatio: 1, width: '100%', borderRadius: 8 }}
            source={{ uri: 'https://picsum.photos/200' }}
          />
        </View>

        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18 }}>Hello</Text>
        </View>
      </CommCardView>
    </Pressable>
  )
})
