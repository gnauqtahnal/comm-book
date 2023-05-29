import { createSlice } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const slice = createSlice({
  name: 'cardSelected',
  initialState: {
    array: [],
    popResult: null,
  },
  reducers: {
    push: (state, action) => {
      state.array.push(action.payload)
    },
    pop: (state) => {
      state.popResult = state.array.pop()
    },
  },
})

export const useCardSelected = () => {
  const state = useSelector((state) => state.cardSelected)
  const dispatch = useDispatch()

  const push = (state) => {
    return useCallback(
      () => dispatch(slice.actions.push(state)),
      [dispatch, slice.actions.push, state]
    )
  }

  const pop = () => {
    return useCallback(
      () => dispatch(slice.actions.pop()),
      [dispatch, slice.actions.pop]
    )
  }

  return useMemo(() => {
    return [state, push, pop]
  }, [state, push, pop])
}

export default slice
