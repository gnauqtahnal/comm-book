import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "category",
  initialState: {
    "Cơ bản": [],
  },
  reducers: {
    update: (state, action) => {
      const { section, index, data } = action.payload

      if (state[section]) {
        if (state[section][index]) {
          state[section][index] = {
            ...state[section][index],
            ...data,
          }
        } else {
          state[section].push({ ...data })
        }
      }
    },
  },
})

const { update } = slice.actions

export const categoryReducer = slice.reducer

export const categoryAction = {
  get: {
    array: (selector, section = "Cơ bản") => {
      const array = selector((state) => state.category[section])
      return array
    },
  },
  update: (dispatch, section, index, data) => {
    dispatch(update({ section, index, data }))
  },
}
