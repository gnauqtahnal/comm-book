import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "category",
  initialState: {
    currSection: "Cơ bản",
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
    remove: (state, action) => {
      const { section, index } = action.payload

      if (state[section]) {
        state[section].splice(index, 1)
      }
    },
  },
})

const { update, remove } = slice.actions

export const categoryReducer = slice.reducer

export const categoryAction = {
  get: {
    currSection: (selector) => {
      return selector((state) => state.category.currSection)
    },
    array: (selector, section = "Cơ bản") => {
      const array = selector((state) => state.category[section])
      return array
    },
  },
  update: (dispatch, section, index, data) => {
    dispatch(update({ section, index, data }))
  },
  remove: (dispatch, section, index) => {
    dispatch(remove({ section, index }))
  },
}
