import React from 'react';
import { useDispatch } from 'react-redux';

import { Center, Divider } from '../../core';
import CategorySlice from '../../redux/slice/category';
import SafeAreaView from '../../safearea';
import CategoryView from './category-view';
import SelectedView from './selected-view';
import ToolBarView from './tool-bar-view';

export default function HomeScreen() {
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    dispatch(CategorySlice.actions.init());
  }, []);

  return (
    <SafeAreaView>
      <Center tw="flex-1 w-full justify-start p-2 bg-gray-100">
        <ToolBarView />
        <Divider viewStyle="my-2" />
        <SelectedView />
        <Divider viewStyle="my-2" />
        <CategoryView viewStyle="flex-1" />
      </Center>
    </SafeAreaView>
  );
}
