import { StatusBar } from "expo-status-bar"
import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"

import { ModalLoading } from "./src/components"
import { NavigationProvider } from "./src/navigation"
import { ReduxProvider } from "./src/redux"

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

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// const OpenLoadingModal = () => {
//   const dispatch = useDispatch()

//   const openModal = async () => {
//     dispatch(openModalLoading(0))
//     for (let progress = 0; progress <= 100; progress = progress + 10) {
//       dispatch(openModalLoading(progress))
//       await sleep(100)
//     }
//     dispatch(closeModalLoading())
//   }

//   return (
//     <TouchableOpacity onPress={openModal}>
//       <View
//         style={{
//           alignItems: "center",
//           justifyContent: "center",
//           borderWidth: 1,
//           padding: 8,
//           borderRadius: 5,
//         }}
//       >
//         <Text>Open Modal</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

export default function App() {
  return (
    <ReduxProvider>
      <StatusBar style="auto" />
      <NavigationProvider />
      <ModalLoading />
      {/* <View style={styles.container}>
            <ModalLoading />
            <PickImage />
            <OpenLoadingModal />
          </View> */}
    </ReduxProvider>
  )
}
