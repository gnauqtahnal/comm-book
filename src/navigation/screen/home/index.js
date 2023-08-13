import React, { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Card } from "../../../components"
import { Constant } from "../../../constant"

const ListPicked = () => {
  const [data, setData] = useState([
    {
      text: "one",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "two",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "three",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "four",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
  ])

  const handlerOfChange = (index) => {
    setData((arg) => {
      const data = Array.from(arg)

      data[index].width = data[index].width === 512 ? 1024 : 512
      data[
        index
      ].imageUri = `https://picsum.photos/${data[index].width}/${data[index].width}`

      return data
    })
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handlerOfChange(index)
        }}
      >
        <Card.Comm source={item.imageUri} text={item.text} />
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={{
        backgroundColor: "#ffffcc",
        padding: 4,
        width: "100%",
        height: Constant.card.comm.height + 24,
      }}
    >
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  )
}

const ListSelectable = () => {
  const [numColumns, setNumColumns] = useState(1)
  const [data, setData] = useState([
    {
      text: "one",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "two",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "three",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
    {
      text: "four",
      imageUri: "https://picsum.photos/512/512",
      width: 512,
    },
  ])

  const handlerOfChange = (index) => {
    setData((arg) => {
      const data = Array.from(arg)

      data[index].width = data[index].width === 512 ? 1024 : 512
      data[
        index
      ].imageUri = `https://picsum.photos/${data[index].width}/${data[index].width}`

      return data
    })
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handlerOfChange(index)
        }}
      >
        <Card.Comm source={item.imageUri} text={item.text} />
      </TouchableOpacity>
    )
  }

  const onLayoutView = (event) => {
    const { width, height } = event.nativeEvent.layout
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
        backgroundColor: "#ccffcc",
        padding: 4,
        width: "100%",
        height: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={{
          width: "100%",
        }}
        columnWrapperStyle={
          numColumns != 1 && {
            width: "100%",
            justifyContent: "space-between",
            flex: 1 / numColumns,
          }
        }
      />
    </View>
  )
}

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ListPicked />
      <ListSelectable />
    </SafeAreaView>
  )
}
