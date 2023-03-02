import React from 'react';
import { Animated } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import tw from 'twrnc';

export default function Button({
  bounce = false,
  buttonStyle = {},
  icon = '',
  label = '',
  loading = false,
  mode = 'outlined',
  onPress = undefined,
  textStyle = {},
  viewStyle = {},
}) {
  const scaleAnimation = React.useRef(
    new Animated.Value(1)
  ).current;
  const scaleStyle = { scale: scaleAnimation };

  const onPressInternal = () => {
    if (onPress) {
      onPress();
    }
  };

  const onPressInInternal = () => {
    if (bounce) {
      Animated.timing(scaleAnimation, {
        toValue: 1.3,
        duration: 120,
        useNativeDriver: true,
      }).start();
    }
  };

  const onPressOutInternal = () => {
    if (bounce) {
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View
      style={[viewStyle, { transform: [scaleStyle] }]}
    >
      <PaperButton
        compact
        contentStyle={tw`px-3`}
        icon={icon}
        labelStyle={textStyle}
        loading={loading}
        mode={mode}
        onPress={onPressInternal}
        onPressIn={onPressInInternal}
        onPressOut={onPressOutInternal}
        style={buttonStyle}
      >
        {label}
      </PaperButton>
    </Animated.View>
  );
}
