import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggle } from './redux'

export const useCommCategoryModal = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state) => {
    return state.commCategoryModal.visible
  })

  const toggleCallback = useCallback(
    (args) => {
      dispatch(toggle(args))
    },
    [toggle]
  )

  return useMemo(() => {
    return {
      visible,
      toggle: toggleCallback,
    }
  }, [visible, toggleCallback])
}
