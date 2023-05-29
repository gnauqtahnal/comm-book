import { createSlice } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const slice = createSlice({
  name: 'category',
  initialState: {},
  reducers: {},
})

export const useLoading = () => {
  const state = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  const set = (state) => {
    return useCallback(
      () => dispatch(slice.actions.set(state)),
      [dispatch, slice.actions.set, state]
    )
  }

  return useMemo(() => {
    return [state, set]
  }, [state, set])
}

export default slice
