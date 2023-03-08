import React from 'react';
import {
  Animated,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

import ScaleAnimate from '../animate/scale';

export default function Card({
  style = {},
  text = undefined,
  imageUri = undefined,
}) {
  const scaleAnimate = new ScaleAnimate();

  return (
    <TouchableOpacity
      onPressIn={() => scaleAnimate.start()}
      onPressOut={() => scaleAnimate.reset()}
    >
      <Animated.View
        style={[
          style,
          scaleAnimate.style,
          tw`border rounded-md`,
        ]}
      >
        <Image
          style={[
            tw`w-30 h-30`,
            tw`rounded-md rounded-b-none`,
          ]}
          source={{ uri: imageUri }}
        />

        <View
          style={[
            tw`items-center justify-center`,
            tw`rounded-md rounded-t-none border-t`,
          ]}
        >
          <Text style={tw`text-center text-xl`}>
            {text || ' '}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
