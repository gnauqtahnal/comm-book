import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useDispatch } from "react-redux"

import { Card, ModalLoading } from "./src/components"
import { ImageAction } from "./src/features"
import { ReduxProvider, closeModalLoading, openModalLoading } from "./src/redux"

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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const OpenLoadingModal = () => {
  const dispatch = useDispatch()

  const openModal = async () => {
    dispatch(openModalLoading(0))
    for (let progress = 0; progress <= 100; progress = progress + 10) {
      dispatch(openModalLoading(progress))
      await sleep(100)
    }
    dispatch(closeModalLoading())
  }

  return (
    <TouchableOpacity onPress={openModal}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          padding: 8,
          borderRadius: 5,
        }}
      >
        <Text>Open Modal</Text>
      </View>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <ReduxProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ModalLoading />

          {/* <PickImage /> */}

          <CardList />

          <OpenLoadingModal />
        </View>
      </SafeAreaView>
    </ReduxProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
})
