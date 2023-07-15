import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { reducer as commCategoryModalReducer } from '../components/modal/comm-category'
import { reducer as loadingModalReducer } from '../components/modal/loading'
import { reducer as stackScrollListReducer } from '../components/scroll-list/stack'

// import CategorySlice from './slice/category'
// import FirebaseSlice from './slice/firebase'

export const store = configureStore({
  reducer: combineReducers({
    // category: CategorySlice.reducer,
    // firebase: FirebaseSlice.reducer,
    loadingModal: loadingModalReducer,
    stackScrollList: stackScrollListReducer,
    commCategoryModal: commCategoryModalReducer,
  }),
})

export const ReduxProvider = ({ children = null }) => {
  return <Provider store={store}>{children}</Provider>
}
