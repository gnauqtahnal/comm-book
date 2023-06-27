import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './redux'

export const useLoadingModal = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state) => {
    return state.loadingModal.visible
  })

  const toggleCallback = useCallback(() => {
    dispatch(toggle())
  }, [toggle])

  const onCallback = useCallback(() => {
    dispatch(on())
  }, [on])

  const offCallback = useCallback(() => {
    dispatch(off())
  }, [off])

  return useMemo(() => {
    return {
      visible,
      toggle: toggleCallback,
      on: onCallback,
      off: offCallback,
    }
  }, [visible, toggleCallback, onCallback, offCallback])
}
