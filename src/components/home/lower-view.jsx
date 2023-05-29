import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import uuid from 'react-native-uuid'

import { CommCard, IconAddCommCard } from '../comm-card'

const LowerView = () => {
  const [numColumns, setNumColumns] = useState(1)
  const route = useRoute()

  const data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    null,
  ]

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout
    setNumColumns(Math.floor(width / 136))
  }

  const renderItem = ({ item, index }) => {
    if (item === null) {
      return <IconAddCommCard viewTwStyle="mt-2" />
    }
    return <CommCard viewTwStyle="mt-2" />
  }

  return (
    <View className="flex h-full w-full" onLayout={onLayout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
        key={numColumns}
        keyExtractor={() => uuid.v4()}
        contentContainerStyle={{
          paddingBottom: 8,
        }}
        renderSectionHeader={undefined}
      />
    </View>
  )
}

export default LowerView
