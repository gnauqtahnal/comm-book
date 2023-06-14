import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { reducer as loadingModalReducer } from '../components/modal/loading'
import CategorySlice from './slice/category'
import FirebaseSlice from './slice/firebase'

export const store = configureStore({
  reducer: combineReducers({
    category: CategorySlice.reducer,
    firebase: FirebaseSlice.reducer,
    loadingModal: loadingModalReducer,
  }),
})

export const ReduxProvider = ({ children = null }) => {
  return <Provider store={store}>{children}</Provider>
}
