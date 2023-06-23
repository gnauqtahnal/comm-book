import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clear, pop, push } from './redux'

export const useStackScrollList = () => {
  const dispatch = useDispatch()
  const array = useSelector((state) => {
    return state.stackScrollList.array
  })

  const clearCallback = useCallback(() => {
    dispatch(clear())
  }, [clear])

  const pushCallback = useCallback(
    (args) => {
      dispatch(push(args))
    },
    [push]
  )

  const popCallback = useCallback(() => {
    dispatch(pop())
  }, [pop])

  return useMemo(() => {
    return {
      array,
      clear: clearCallback,
      push: pushCallback,
      pop: popCallback,
    }
  }, [array])
}
