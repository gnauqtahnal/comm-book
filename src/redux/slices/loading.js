import { createSlice } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const slice = createSlice({
  name: 'loading',
  initialState: { isLoading: false },
  reducers: {
    on: (state) => {
      state.isLoading = true
    },
    off: (state) => {
      state.isLoading = false
    },
  },
})

export const { on, off } = slice.actions
export default slice.reducer

export function useLoadingModal() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.loading.isLoading)

  const setOn = useCallback(() => {
    dispatch(on())
  }, [dispatch, on])

  const setOff = useCallback(() => {
    dispatch(off())
  }, [dispatch, off])

  return useMemo(
    () => ({
      isLoading,
      setOn,
      setOff,
    }),
    [isLoading, setOn, setOff]
  )
}
