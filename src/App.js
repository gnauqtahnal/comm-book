import { StatusBar } from 'expo-status-bar'

import LoadingModal from './components/modal/loading'
import Navigation from './navigation'
import ReduxProvider from './redux/provider'

export default function App() {
  return (
    <ReduxProvider>
      <StatusBar style="dark" />
      <LoadingModal />
      <Navigation />
    </ReduxProvider>
  )
}
