import { combineReducers, configureStore } from '@reduxjs/toolkit';

import CategorySlice from './slice/category';

const reducer = combineReducers({
  category: CategorySlice.reducer,
});

const store = configureStore({ reducer });

export default store;
