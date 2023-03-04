/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
  confirmPassword: {
    value: '',
    error: '',
  },
  userName: {
    value: '',
    error: '',
  },
  phone: {
    value: '',
    error: '',
  },
};

const reducers = {
  setEmail: (state, action) => {
    if (action.payload.value !== undefined)
      state.email.value = action.payload.value;
    if (action.payload.error !== undefined)
      state.email.error = action.payload.error;
  },
  setPassword: (state, action) => {
    if (action.payload.value !== undefined)
      state.password.value = action.payload.value;
    if (action.payload.error !== undefined)
      state.password.error = action.payload.error;
  },
  setConfirmPassword: (state, action) => {
    if (action.payload.value !== undefined)
      state.confirmPassword.value = action.payload.value;
    if (action.payload.error !== undefined)
      state.confirmPassword.error = action.payload.error;
  },
  setUserName: (state, action) => {
    if (action.payload.value !== undefined)
      state.userName.value = action.payload.value;
    if (action.payload.error !== undefined)
      state.userName.error = action.payload.error;
  },
  setPhone: (state, action) => {
    if (action.payload.value !== undefined)
      state.phone.value = action.payload.value;
    if (action.payload.error !== undefined)
      state.phone.error = action.payload.error;
  },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers,
});

export const {
  setEmail,
  setPassword,
  setConfirmPassword,
  setUserName,
  setPhone,
} = loginSlice.actions;

export default loginSlice.reducer;
