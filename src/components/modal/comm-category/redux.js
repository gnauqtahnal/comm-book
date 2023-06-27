/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
}

const reducers = {}

export const slice = createSlice({
  name: 'commCategoryModal',
  initialState,
  reducers,
})

export const { reducer } = slice
export const {} = slice.actions
