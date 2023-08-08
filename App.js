import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native"

import { Card, Center } from "./src/components"
import { ImageAction } from "./src/features"
import { StoreProvider, useStoreDispatch } from "./src/store"

// const PickImage = () => {
//   const [uri, setUri] = useState('')

//   const pickImageFromLibrary = () => {
//     ImageAction.Pick.Library().then((result) => {
//       console.log(JSON.stringify(result, null, 2))
//       setUri(result.uri)
//     })
//   }

//   const createBlob = async (uri) => {
//     try {
//       const blob = await fetch(uri).then((response) => response.blob())
//       return blob
//     } catch (error) {
//       Alert.alert('CreateBlob', 'Failure')
//       return undefined
//     }
//   }

//   const uploadFile = async () => {
//     try {
//       const blob = await createBlob(uri)
//       const ref = firebase.storage.getRef('image')

//       await firebase.storage.upload(blob, ref)
//     } catch (error) {
//       Alert.alert('UploadButton', 'Failure')
//     }
//   }

//   return (
//     <Center>
//       <Button onPress={uploadFile}>
//         <Card>
//           <Card.Text>Hello</Card.Text>
//         </Card>
//       </Button>

//       <Button onPress={pickImageFromLibrary}>
//         <Center style={{ height: 128, width: 128 }}>
//           <Image source={uri} />
//         </Center>
//       </Button>
//     </Center>
//   )
// }

const CardList = () => {
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
  console.log(JSON.stringify(data, null, 2))

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
        height: 160 + 24,
      }}
    >
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  )
}

// const OpenLoadingModal = () => {
//   const dispatch = useStoreDispatch()

//   const openModal = () => {
//     dispatch({ type: "toggleLoading" })
//   }

//   return (
//     <Button onPress={openModal}>
//       <Center>
//         <Text>Open Modal</Text>
//       </Center>
//     </Button>
//   )
// }

export default function App() {
  return (
    // <StoreProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoadingModal /> */}

      {/* <PickImage /> */}

      <CardList />

      {/* <OpenLoadingModal /> */}
    </View>
    // </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
