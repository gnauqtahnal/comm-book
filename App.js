/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'

import { LoadingModal } from './src/components/modal/loading'
import Navigation from './src/navigation'
import { ReduxProvider } from './src/redux'

// import { SafeAreaProvider } from './src/safearea'

export default function App() {
  return (
    <ReduxProvider>
      {/* <SafeAreaProvider> */}
      <StatusBar style="dark" />
      <LoadingModal />
      <Navigation />
      {/* </SafeAreaProvider> */}
    </ReduxProvider>
  )
}
