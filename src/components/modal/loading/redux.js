/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
}

const reducers = {
  toggle: (state) => {
    state.visible = !state
  },
  on: (state) => {
    if (state.visible === false) {
      state.visible = true
    }
  },
  off: (state) => {
    if (state.visible === true) {
      state.visible = false
    }
  },
}

export const slice = createSlice({
  name: 'loadingModal',
  initialState,
  reducers,
})

export const { reducer } = slice
export const { toggle, on, off } = slice.actions
