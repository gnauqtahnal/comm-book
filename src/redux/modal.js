import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "modal",
  initialState: {
    loading: {
      visible: false,
      progressBar: {
        enable: false,
        value: 0,
      },
    },
  },
  reducers: {
    openLoading: (state, action) => {
      state.loading.visible = true
      if (typeof action.payload === "number") {
        state.loading.progressBar.enable = true
        state.loading.progressBar.value = action.payload
      }
    },
    closeLoading: (state) => {
      state.loading.visible = false
      state.loading.progressBar.enable = false
    },
  },
})

const { openLoading, closeLoading } = slice.actions

export const modalReducer = slice.reducer

export const modalAction = {
  loading: {
    get: {
      visible: (selector) => {
        return selector((state) => state.modal.loading.visible)
      },
      progressBar: (selector) => {
        return selector((state) => state.modal.loading.progressBar)
      },
    },
    open: (dispatch, value) => {
      dispatch(openLoading(value))
    },
    close: (dispatch) => {
      dispatch(closeLoading())
    },
  },
}
