import { createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

import CommCard from '../../components/button/comm-card'
import { useLoadingModal } from '../../components/modal/loading'
import StackScrollList from '../../components/scroll-list/stack/StackScrollList'
import { Center, Divider } from '../../core'
import { downloadCardDbAsync } from '../../firebase/db'
import CategorySlice from '../../redux/slice/category'
// import SafeAreaView from '../../safearea'
import CategoryView from './category-view'
import SelectedView from './selected-view'
import ToolBarView from './tool-bar-view'

const logo = require('../../assets/logo.jpg')

// export default function HomeScreen() {
//   const dispatch = useDispatch()
//   const { on: setModalOn, off: setModalOff } = useLoadingModal()

//   React.useLayoutEffect(() => {
//     setModalOn()
//     downloadCardDbAsync('default', 'default')
//       .then((data) => {
//         dispatch(
//           CategorySlice.actions.updateSec({ section: 'default', rawData: data })
//         )
//       })
//       .finally(() => {
//         setModalOff()
//       })
//   }, [])

//   return (
//     <SafeAreaView>
//       <Center tw="flex-1 w-full justify-start p-2 bg-gray-100">
//         <ToolBarView />
//         <Divider viewStyle="my-2" />
//         <SelectedView />
//         <Divider viewStyle="my-2" />
//         <CategoryView viewStyle="flex-1" />
//       </Center>
//     </SafeAreaView>
//   )
// }

// const Drawer = createDrawerNavigator()

const LogoView = () => {
  return (
    <View className="m-1 items-center">
      <Image className="mb-1 h-10 w-10" source={logo} contentFit="scale-down" />
      <Text className="text-[8px] font-bold">TRUNG TÂM NHÂN VĂN</Text>
    </View>
  )
}

const StackPushButton = () => {
  return (
    <TouchableOpacity>
      <View className="mx-2 h-10 justify-center rounded-md bg-green-500 px-4">
        <Text>HIT ME</Text>
      </View>
    </TouchableOpacity>
  )
}

const HeaderView = memo(() => {
  return (
    <>
      <View
        className="absolute"
        style={{
          backgroundColor: 'rgba(240,199,36,1)',
          height: 64,
          width: '100%',
          top: 0,
        }}
      />
      <View
        className="flex h-16 w-full flex-row items-center"
        style={{
          backgroundColor: 'rgba(240,199,36,1)',
        }}
      >
        <LogoView />
        <View className="flex-1" />
        <StackPushButton />
      </View>
    </>
  )
})

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <HeaderView />

      <View className="w-full flex-1" style={{ rowGap: 8 }}>
        <StackScrollList />
        <CommCard />
        {/* <CommCard /> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
