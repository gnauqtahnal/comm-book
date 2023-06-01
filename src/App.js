import LoadingModal from './components/modal/loading'
import Navigation from './navigation'
import ReduxProvider from './redux/provider'

export default function App() {
  return (
    <ReduxProvider>
      <LoadingModal />
      <Navigation />
    </ReduxProvider>
  )
}
