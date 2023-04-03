import React from 'react';

import { Center, Divider } from '../../core';
import SafeAreaView from '../../safearea';
import CategoryView from './category-view';
import SelectedView from './selected-view';
import ToolBarView from './tool-bar-view';

export default function HomeScreen() {
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
