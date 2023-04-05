import { combineReducers, configureStore } from '@reduxjs/toolkit';

import CategorySlice from './slice/category';
import FirebaseSlice from './slice/firebase';

const reducer = combineReducers({
  category: CategorySlice.reducer,
  firebase: FirebaseSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
