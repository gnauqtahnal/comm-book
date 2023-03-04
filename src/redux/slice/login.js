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
  registerStatus: false,
};

const reducers = {
  clearInfo: (state) => {
    state.email.value = '';
    state.email.error = '';
    state.password.value = '';
    state.password.error = '';
    state.confirmPassword.value = '';
    state.confirmPassword.error = '';
    state.userName.value = '';
    state.userName.error = '';
    state.phone.value = '';
    state.phone.error = '';
  },
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
  setRegisterStatus: (state, action) => {
    state.registerStatus = action.payload;
  },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers,
});

export const {
  clearInfo,
  setEmail,
  setPassword,
  setConfirmPassword,
  setUserName,
  setPhone,
  setRegisterStatus,
} = loginSlice.actions;

export default loginSlice.reducer;
