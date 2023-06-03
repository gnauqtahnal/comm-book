import { createSlice } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const slice = createSlice({
  name: 'stack',
  initialState: {
    cardPlayable: [],
    popValue: undefined,
  },
  reducers: {
    push: (state, action) => {
      const { key, value } = action.payload

      if (Array.isArray(state[key])) {
        state[key].push(value)
      } else {
        state[key] = [value]
      }
    },
    pop: (state, action) => {
      const { key } = action.payload

      if (Array.isArray(state[key])) {
        state.popValue = state[key].pop()
      }
    },
  },
})

export const { push, pop } = slice.actions
export default slice.reducer

export function useCardPlayableStack() {
  const dispatch = useDispatch()
  const { cardPlayable, popValue } = useSelector((state) => state.stack)

  const pushCard = useCallback(
    (value) => {
      dispatch(push({ key: 'cardPlayable', value: value }))
    },
    [dispatch, cardPlayable]
  )

  const popCard = useCallback(() => {
    dispatch(pop({ key: 'cardPlayable' }))
    return popValue
  }, [dispatch, cardPlayable])

  return useMemo(
    () => ({ cardPlayable, popValue, pushCard, popCard }),
    [cardPlayable, popValue, pushCard, popCard]
  )
}
