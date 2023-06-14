import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

const FirebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export function useFirebase() {
  const firebase = useSelector((state) => state.firebase)
  return React.useMemo(() => [firebase.loading], [firebase.loading])
}

export default FirebaseSlice
