import React from 'react';

import { FlatList, View } from '../../core';
import { useCategory } from '../../redux/slice/category';
import CardMemo, { CardMode } from './card';

function CategoryView({ viewStyle = '', section = 'default' }) {
  const category = useCategory(section);

  function getCardMode(title, imageUri, soundUri) {
    if (!title) {
      return CardMode.Update;
    }
    if (!imageUri) {
      return CardMode.Update;
    }
    if (!soundUri) {
      return CardMode.Update;
    }
    return CardMode.Select;
  }

  return (
    <View tw={`w-full h-44 ${viewStyle}`}>
      {category.length > 0 ? (
        <FlatList
          data={category}
          renderItem={({ item, index }) => {
            return (
              <CardMemo
                index={index}
                section={section}
                title={item[0]}
                imageUri={item[1]}
                soundUrj={item[2]}
                mode={getCardMode(item[0], item[1], item[2])}
                viewStyle={`mx-1 mb-2`}
              />
            );
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          nestedScrollEnabled
        />
      ) : undefined}
    </View>
  );
}

export default CategoryView;
