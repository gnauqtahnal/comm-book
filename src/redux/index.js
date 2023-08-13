import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit"
import { Alert } from "react-native"
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
  initialState: {
    stack: [],
  },
  reducers: {
    listSelectedPush: (state, action) => {
      state.stack.push(action.payload)
    },
    listSelectedPop: (state) => {
      state.stack.pop()
    },
  },
})

export const { listSelectedPush, listSelectedPop } = listSelected.actions

const imageStorage = createSlice({
  name: "imageStorage",
  initialState: {},
  reducers: {
    // imageStorageAdd: (state, action) => {
    //   const { id, uri } = action.payload
    //   Alert.alert("Lỗi bên trong", "Không thể thêm ảnh vào kho redux")
    // },
    imageStorageUpdate: (state, action) => {
      const { id, uri } = action.payload
      let ng = true

      if (id) {
        if (state[id]) {
          state[id] = uri
          ng = false
        }
      }

      if (ng) {
        Alert.alert("Lỗi bên trong", "Không thể cập nhật ảnh vào kho redux")
      }
    },
    imageStorageRemove: (state, action) => {
      const { id } = action.payload
      let ng = true

      if (id) {
        if (state[id]) {
          delete state[id]
          ng = false
        }
      }

      if (ng) {
        Alert.alert("Lỗi bên trong", "Không thể xóa ảnh trong kho redux")
      }
    },
  },
})

export const { imageStorageUpdate, imageStorageRemove } = imageStorage.actions

export const store = configureStore({
  reducer: combineReducers({
    modal: modalSlice.reducer,
    listSelected: listSelected.reducer,
    imageStorage: imageStorage.reducer,
  }),
})

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
