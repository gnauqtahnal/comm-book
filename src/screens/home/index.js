import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

import CommCard from '../../components/button/comm-card'
import { useLoadingModal } from '../../components/modal/loading'
import StackScrollList from '../../components/scroll-list/stack/StackScrollList'
import { useStackScrollList } from '../../components/scroll-list/stack/useStackScrollList'
import { Center, Divider } from '../../core'
import { downloadCardDbAsync } from '../../firebase/db'
import CategorySlice from '../../redux/slice/category'

// import SafeAreaView from '../../safearea'
// import CategoryView from './category-view'
// import SelectedView from './selected-view'
// import ToolBarView from './tool-bar-view'

const logo = require('../../assets/logo.jpg')
const peopleIcon = require('../../assets/people.png')

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

const Drawer = createDrawerNavigator()

const LogoView = () => {
  return (
    <View className="m-1 flex flex-row items-center justify-center">
      <Image className="aspect-square h-8" source={logo} contentFit="fill" />
      <View className="mx-1 flex items-center justify-center">
        <Text className="text-[12px] font-bold">TRUNG TÂM</Text>
        <Text className="text-[12px] font-bold">NHÂN VĂN</Text>
      </View>
    </View>
  )
}

const StackPushButton = () => {
  const { push } = useStackScrollList()

  return (
    <TouchableOpacity
      onPress={() => {
        push(1)
      }}
    >
      <View className="mr-2 h-10 justify-center rounded-md bg-green-500 px-4">
        <Text>PUSH</Text>
      </View>
    </TouchableOpacity>
  )
}

const StackPopButton = () => {
  const { pop } = useStackScrollList()

  return (
    <TouchableOpacity
      onPress={() => {
        pop(1)
      }}
    >
      <View className="mr-2 h-10 justify-center rounded-md bg-green-500 px-4">
        <Text>POP</Text>
      </View>
    </TouchableOpacity>
  )
}

// const HeaderView = memo(() => {
//   return (
//     <>
//       <View
//         className="absolute"
//         style={{
//           backgroundColor: 'rgba(240,199,36,1)',
//           height: 64,
//           width: '100%',
//           top: 0,
//         }}
//       />
//       <View
//         className="flex h-16 w-full flex-row items-center"
//         style={{
//           backgroundColor: 'rgba(240,199,36,1)',
//         }}
//       >
//         <LogoView />
//         <View className="flex-1" />
//         <StackPushButton />
//         <StackPopButton />
//       </View>
//     </>
//   )
// })

const PeopleImage = memo(() => {
  return <Image className="h-24 w-24" source={peopleIcon} />
})

const ContentView = () => {
  return (
    <View>
      <View className="w-full flex-1" style={{ rowGap: 8 }}>
        <StackScrollList />
      </View>
    </View>
  )
}

const FooView = () => {
  return (
    <View>
      <Text>Foo</Text>
    </View>
  )
}

const BarView = () => {
  return (
    <View>
      <Text>Bar</Text>
    </View>
  )
}

const HeaderLeftView = () => {
  return <LogoView />
}

const HeaderRightView = () => {
  return (
    <View className="flex-row">
      <StackPushButton />
      <StackPopButton />
    </View>
  )
}

const HomeScreen = () => {
  return (
    // <SafeAreaView className="flex flex-1">
    //   <HeaderView />

    //   <View className="w-full flex-1" style={{ rowGap: 8 }}>
    //     <StackScrollList />
    //   </View>

    // </SafeAreaView>
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'rgba(240,199,36,1)',
        },
        headerLeft: HeaderLeftView,
        headerRight: HeaderRightView,
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={ContentView}
        options={{
          drawerLabel: '',
          drawerIcon: PeopleImage,
        }}
      />
    </Drawer.Navigator>
  )
}

export default HomeScreen
