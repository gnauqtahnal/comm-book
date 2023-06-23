import React from 'react'
import { FlatList, View } from 'react-native'

import { useStackScrollList } from './useStackScrollList'

const StackScrollList = () => {
  const { array } = useStackScrollList()

  return (
    <View>
      <FlatList data={array} renderItem={({ item, index }) => {}} horizontal />
    </View>
  )
}

export default StackScrollList
