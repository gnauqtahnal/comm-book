/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'

import { LoadingModal } from './src/components/modal/loading'
import Navigation from './src/navigation'
import { ReduxProvider } from './src/redux'

export default function App() {
  return (
    <ReduxProvider>
      <StatusBar style="dark" />
      <LoadingModal />
      <Navigation />
    </ReduxProvider>
  )
}
