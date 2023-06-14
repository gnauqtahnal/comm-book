import React from 'react'
import { useDispatch } from 'react-redux'

import { useLoadingModal } from '../../components/modal/loading'
import { Center, Divider } from '../../core'
import { downloadCardDbAsync } from '../../firebase/db'
import CategorySlice from '../../redux/slice/category'
import SafeAreaView from '../../safearea'
import CategoryView from './category-view'
import SelectedView from './selected-view'
import ToolBarView from './tool-bar-view'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const { on: setModalOn, off: setModalOff } = useLoadingModal()

  React.useLayoutEffect(() => {
    setModalOn()
    downloadCardDbAsync('default', 'default')
      .then((data) => {
        dispatch(
          CategorySlice.actions.updateSec({ section: 'default', rawData: data })
        )
      })
      .finally(() => {
        setModalOff()
      })
  }, [])

  return (
    <SafeAreaView>
      <Center tw="flex-1 w-full justify-start p-2 bg-gray-100">
        <ToolBarView />
        <Divider viewStyle="my-2" />
        <SelectedView />
        <Divider viewStyle="my-2" />
        <CategoryView viewStyle="flex-1" />
      </Center>
    </SafeAreaView>
  )
}
