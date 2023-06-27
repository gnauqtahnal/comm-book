import React, { memo } from 'react'
import { FlatList, View } from 'react-native'

import CommCard from '../../button/comm-card'
import { useStackScrollList } from './useStackScrollList'

const SeparatatorView = memo(() => {
  return <View className="w-2" />
})

const StackScrollList = () => {
  const { array } = useStackScrollList()

  return (
    <View className="flex h-[154] w-full pb-1 pt-2">
      <FlatList
        data={array}
        renderItem={({ item, index }) => {
          return <CommCard />
        }}
        horizontal
        initialNumToRender={5}
        ItemSeparatorComponent={SeparatatorView}
        ListHeaderComponent={SeparatatorView}
        ListFooterComponent={SeparatatorView}
      />
    </View>
  )
}

export default StackScrollList
