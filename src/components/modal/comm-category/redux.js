/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
  section: 'default',
  data: {},
  label: {},
  image: {},
  sound: {},
}

const reducers = {
  toggle: (state, action) => {
    if (action.payload?.section) {
      state.section = action.payload.section
    }
    state.visible = !state.visible
  },
}

export const slice = createSlice({
  name: 'commCategoryModal',
  initialState,
  reducers,
})

export const { reducer } = slice
export const { toggle } = slice.actions
