import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { memo, useState } from "react"
import { Alert, FlatList, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux"

import { Card, LogoImageText } from "../../../components"
import { Constant } from "../../../constant"
import { imageResize } from "../../../features/image/resize"
import { reduxAction } from "../../../redux"

const ListStack = () => {
  const data = reduxAction.stack.get.array(useSelector)

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <Card.Comm source={item.image.uri} text={item.text} />
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={{
        width: "100%",
        height: Constant.card.comm.height + 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 4,
        }}
      />
    </View>
  )
}

const ListCategory = () => {
  const dispatch = useDispatch()
  const section = reduxAction.category.get.currSection(useSelector)
  const data = reduxAction.category.get.array(useSelector)
  const [numColumns, setNumColumns] = useState(1)
  const [editable, setEditable] = useState(false)

  const select = (index) => {
    reduxAction.stack.push(dispatch, data[index])
  }

  const add = async (index, item) => {
    try {
      reduxAction.modal.loading.open(dispatch)

      reduxAction.category.update(dispatch, section, index, {
        text: `item${index}`,
        image: {
          uri: await imageResize(
            `https://picsum.photos/512/512?random=${index}`,
          ),
        },
      })
      reduxAction.modal.loading.close(dispatch)
    } catch (error) {
      reduxAction.modal.loading.close(dispatch)
      Alert.alert("Error: Add new card", error)
    }
  }

  const renderItem = ({ item, index }) => {
    if (index == data.length) {
      return (
        <TouchableOpacity
          onPress={() => {
            add(index, item)
          }}
        >
          <Card.Add />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => {
          select(index)
        }}
      >
        <Card.Comm source={item?.image?.uri} text={item.text} />
      </TouchableOpacity>
    )
  }

  const onLayoutView = (event) => {
    const { width } = event.nativeEvent.layout
    setNumColumns(
      Math.floor(
        width / (Constant.card.comm.width + 2 * Constant.card.comm.margin),
      ),
    )
  }

  return (
    <View
      onLayout={onLayoutView}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <FlatList
        data={data.concat([{ empty: true }])}
        renderItem={renderItem}
        key={numColumns}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: "100%",
          padding: 4,
        }}
        columnWrapperStyle={
          numColumns != 1 && {
            width: "100%",
          }
        }
      />
    </View>
  )
}

const ButtonBackSpace = memo(() => {
  const dispatch = useDispatch()

  const deselect = () => {
    reduxAction.stack.pop(dispatch)
  }

  return (
    <TouchableOpacity
      onPress={() => {
        deselect()
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 1,
          paddingHorizontal: 8,
        }}
      >
        <MaterialCommunityIcons
          name="backspace-outline"
          size={30}
          color="black"
        />
      </View>
    </TouchableOpacity>
  )
})

const HomeHeader = () => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <LogoImageText />
      <View style={{ flex: 1 }} />
      <ButtonBackSpace />
    </View>
  )
}

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader />
      <ListStack />
      <ListCategory />
    </SafeAreaView>
  )
}
