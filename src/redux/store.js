import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import loginReducer from './slice/login';

const combinedReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
