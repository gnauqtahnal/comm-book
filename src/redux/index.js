import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import loadingSlice from './loading'

export const useAction = (action, value) => {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(action(value)), [dispatch, action, value])
}

const reducer = combineReducers({
  loading: loadingSlice.reducer,
})

const store = configureStore({
  reducer,
})

export default store
