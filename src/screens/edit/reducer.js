import React from 'react'

const EditContext = React.createContext()

export const EditAction = {
  SetIndex: 0,
  SetSection: 1,
  SetTitle: 2,
  SetImageUri: 3,
  SetSoundUri: 4,
  Update: 5,
}

const reducer = (state, action) => {
  switch (action.type) {
    case EditAction.SetIndex:
      return { ...state, index: action.index }

    case EditAction.SetSection:
      return { ...state, section: action.section }

    case EditAction.SetTitle:
      return { ...state, title: action.title }

    case EditAction.SetImageUri:
      return { ...state, imageUri: action.imageUri }

    case EditAction.SetSoundUri:
      return { ...state, soundUri: action.soundUri }

    case EditAction.Update:
      return {
        ...state,
        index: action.index,
        section: action.section,
        title: action.title,
        imageUri: action.imageUri,
        soundUri: action.soundUri,
      }

    default:
      return state
  }
}

const initEdit = {
  index: -1,
  section: 'default',
  title: '',
  imageUri: '',
  soundUri: '',
}

export function EditProvider({ children }) {
  const [edit, dispatch] = React.useReducer(reducer, initEdit)
  const value = React.useMemo(() => ({ edit, dispatch }), [edit])

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}

export function useEdit() {
  return React.useContext(EditContext)
}
