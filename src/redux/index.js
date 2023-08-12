import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

const modalSlice = createSlice({
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
    openModalLoading: (state, action) => {
      state.loading.visible = true
      if (typeof action.payload === "number") {
        state.loading.progressBar.enable = true
        state.loading.progressBar.value = action.payload
      }
    },
    closeModalLoading: (state) => {
      state.loading.visible = false
      state.loading.progressBar.enable = false
    },
  },
})

export const { openModalLoading, closeModalLoading } = modalSlice.actions

const listSelected = createSlice({
  name: "listSelected",
  initialState: {},
})

export const store = configureStore({
  reducer: combineReducers({
    modal: modalSlice.reducer,
  }),
})

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
