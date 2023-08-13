import { createSlice } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"

const slice = createSlice({
  name: "home",
  initialState: {
    list: {
      selected: [],
      selectable: [],
    },
  },
  reducers: {
    pushListSelected: (state, action) => {
      try {
        const data = action.payload
        state.list.selected.push(data)
      } catch (error) {
        Alert.alert("redux:home:reducers:pushListSelected", error)
      }
    },
    popListSelected: (state) => {
      try {
        state.list.selectable.pop()
      } catch (error) {
        Alert.alert("redux:home:reducers:popListSelected", error)
      }
    },
  },
})

export const HomeReducer = slice.reducer

const { pushListSelected, popListSelected } = slice.actions

export const HomeContext = {
  getListSelected: () => {
    return useSelector((state) => state.home.list.selected)
  },
  getListSelectable: () => {
    return useSelector((state) => state.home.list.selectable)
  },
  pushListSelected: (data) => {
    const dispatch = useDispatch()
    dispatch(pushListSelected(data))
  },
  popListSelected: () => {
    const dispatch = useDispatch()
    dispatch(popListSelected())
  },
}
