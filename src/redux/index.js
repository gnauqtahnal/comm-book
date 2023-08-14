import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import { categoryAction, categoryReducer } from "./category"
import { modalAction, modalReducer } from "./modal"
import { stackAction, stackReducer } from "./stack"

export const ReduxProvider = ({ children }) => {
  return (
    <Provider
      store={configureStore({
        reducer: combineReducers({
          modal: modalReducer,
          stack: stackReducer,
          category: categoryReducer,
        }),
      })}
    >
      {children}
    </Provider>
  )
}

export const reduxAction = {
  modal: modalAction,
  stack: stackAction,
  category: categoryAction,
}
