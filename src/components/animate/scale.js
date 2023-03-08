import { Animated } from 'react-native';

export default class ScaleAnimate {
  constructor(
    initValue = 1,
    toValue = 1.3,
    duration = 120
  ) {
    this.initValue = initValue;
    this.toValue = toValue;

    this.duration = duration;

    this.scale = new Animated.Value(initValue);

    this.style = { transform: [{ scale: this.scale }] };
  }

  start() {
    Animated.timing(this.scale, {
      toValue: this.toValue,
      duration: this.duration,
      useNativeDriver: true,
    }).start();
  }

  reset() {
    Animated.timing(this.scale, {
      toValue: this.initValue,
      duration: this.duration,
      useNativeDriver: true,
    }).start();
  }
}
