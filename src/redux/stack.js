import { createSlice } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import { useSelector } from "react-redux"

const slice = createSlice({
  name: "stack",
  initialState: {
    array: [],
  },
  reducers: {
    push: (state, action) => {
      try {
        state.array.push(action.payload)
      } catch (error) {
        Alert.alert("redux.stack.reducer.push", error)
      }
    },
    pop: (state) => {
      try {
        state.array.pop()
      } catch (error) {
        Alert.alert("redux.stack.reducer.pop", error)
      }
    },
  },
})

const { push, pop } = slice.actions

export const stackReducer = slice.reducer

export const stackAction = {
  get: {
    array: (selector) => {
      return selector((state) => state.stack.array)
    },
  },
  push: (dispatch, data) => {
    dispatch(push(data))
  },
  pop: (dispatch) => {
    dispatch(pop())
  },
}
