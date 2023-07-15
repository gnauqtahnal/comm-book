import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Modal, TouchableOpacity, View } from 'react-native'

import CommCard from '../../button/comm-card'
import { useCommCategoryModal } from './useCommCategoryModal'

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const CommCategoryModal = () => {
  const [numColumns, setNumColumns] = useState(2)
  const navigation = useNavigation()

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout
    setNumColumns(Math.floor(width / (112 + 8)))
  }

  return (
    // <Modal visible={visible} transparent animationType="silde">
    <View className="flex-1 items-end justify-end">
      <View className="h-[70%] w-full rounded-md bg-white" onLayout={onLayout}>
        <View className="m-2 flex-row justify-end">
          <TouchableOpacity
            className=""
            onPress={() => {
              navigation.goBack()
            }}
          >
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={36}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          className="rounded-md"
          data={dummyData}
          renderItem={({ item, index }) => {
            return <CommCard />
          }}
          key={numColumns}
          numColumns={numColumns}
          columnWrapperStyle={{
            columnGap: 8,
            justifyContent: 'flex-start',
            marginBottom: 8,
            backgroundColor: 'red',
          }}
        />
      </View>
    </View>
    // </Modal>
  )
}
