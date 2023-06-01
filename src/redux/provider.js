import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import loadingReducer from './slices/loading'

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
})

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
