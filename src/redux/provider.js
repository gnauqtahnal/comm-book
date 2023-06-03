import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import loadingReducer from './slices/loading'
import stackReducer from './slices/stack'

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    stack: stackReducer,
  },
})

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
