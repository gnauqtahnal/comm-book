import { useContext, useReducer } from "react"

import { Context } from "./Context"

const initState = {
  loading: false,
  loadingProgress: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleLoading":
      return {
        ...state,
        loading: !state.loading,
      }

    case "setLoadingProgress":
      return {
        ...state,
        loadingProgress: action.loadingProgress,
      }

    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStoreState = () => {
  const { state } = useContext(Context)
  return state
}

export const useStoreDispatch = () => {
  const { dispatch } = useContext(Context)
  return dispatch
}
