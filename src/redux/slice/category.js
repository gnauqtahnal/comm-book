import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const isObjAvail = (sections, index, section) => {
  if (sections[section]) {
    if (index < sections[section].length) {
      if (index >= 0) {
        return true
      }
    }
  }
  return false
}

const getObj = (sections, index, section) => {
  if (isObjAvail(sections, index, section)) {
    return sections[section][index]
  }
  return ['', '', '']
}

const name = 'category'

const initialState = {
  sections: {
    default: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
  },
  selected: [],
}

const reducers = {
  select: (state, action) => {
    const { index, section } = action.payload
    const obj = getObj(state.sections, index, section)

    state.selected.push(obj)
  },
  drop: (state) => {
    state.selected.pop()
  },
  update: (state, action) => {
    const { index, section, title, imageUri, soundUri } = action.payload
    if (isObjAvail(state.sections, index, section)) {
      state.sections[section][index] = [
        title || '',
        imageUri || '',
        soundUri || '',
      ]
    }
  },
  updateSec: (state, action) => {
    const { section, rawData } = action.payload
    const keys = Object.keys(rawData)

    keys.forEach((key) => {
      const { title, imageUri, soundUri } = rawData[key]
      state.sections[section][key] = [title, imageUri, soundUri]
    })
  },
  add: (state) => {
    state.sections['default'].push(['', '', ''])
  },
}

const CategorySlice = createSlice({
  name,
  initialState,
  reducers,
})

export function useSelected() {
  const selected = useSelector((state) => state.category.selected)

  return selected
}

export function useCategory(section) {
  const sections = useSelector((state) => state.category.sections)

  if (sections[section]) {
    return sections[section]
  }
  return []
}

export default CategorySlice
