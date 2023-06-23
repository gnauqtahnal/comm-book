/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
}

const reducers = {
  clear: (state) => {
    state.array = []
  },
  push: (state, action) => {
    state.array.push(action.payload)
  },
  pop: (state) => {
    state.array.pop()
  },
}

export const slice = createSlice({
  name: 'stackScrollList',
  initialState,
  reducers,
})

export const { reducer } = slice
export const { clear, push, pop } = slice.actions
