import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { addData, getData } from '../../firebase';

const isObjAvail = (sections, index, section) => {
  if (sections[section]) {
    if (index < sections[section].length) {
      if (index >= 0) {
        return true;
      }
    }
  }
  return false;
};

const getObj = (sections, index, section) => {
  if (isObjAvail(sections, index, section)) {
    return sections[section][index];
  }
  return ['', '', ''];
};

const name = 'category';

const initialState = {
  sections: {
    main: [
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
};

const reducers = {
  select: (state, action) => {
    const { index, section } = action.payload;
    const obj = getObj(state.sections, index, section);

    state.selected.push(obj);
  },
  drop: (state) => {
    state.selected.pop();
  },
  update: (state, action) => {
    const { index, section, title, imageUri, soundUri } = action.payload;
    if (isObjAvail(state.sections, index, section)) {
      state.sections[section][index] = [
        title || '',
        imageUri || '',
        soundUri || '',
      ];

      const obj = {
        title: title,
        image: {
          uri: imageUri,
          path: '',
        },
        sound: {
          uri: soundUri,
          path: '',
        },
      };
      addData('test', section, obj);
    }
  },
  init: (state, action) => {
    getData('test');
  },
};

const CategorySlice = createSlice({
  name,
  initialState,
  reducers,
});

export function useSelected() {
  const selected = useSelector((state) => state.category.selected);

  return selected;
}

export function useCategory(section) {
  const sections = useSelector((state) => state.category.sections);

  if (sections[section]) {
    return sections[section];
  }
  return [];
}

export default CategorySlice;
