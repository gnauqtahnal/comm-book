import React from 'react';

import { FlatList, View } from '../../core';
import { useSelected } from '../../redux/slice/category';
import CardMemo, { CardMode } from './card';

function SelectedView({ viewStyle = '', section = 'default' }) {
  const selected = useSelected();

  return (
    <View tw={`w-full h-40 ${viewStyle}`}>
      {selected.length > 0 ? (
        <FlatList
          data={selected}
          renderItem={({ item, index }) => {
            return (
              <CardMemo
                index={index}
                section={section}
                title={item[0]}
                imageUri={item[1]}
                soundUri={item[2]}
                mode={CardMode.PlaySound}
                viewStyle={`mx-1`}
              />
            );
          }}
          horizontal
          nestedScrollEnabled
        />
      ) : undefined}
    </View>
  );
}

export default SelectedView;
