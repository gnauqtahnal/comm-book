import { createSlice } from '@reduxjs/toolkit'

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
