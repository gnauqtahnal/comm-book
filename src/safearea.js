import { StyledComponent } from 'nativewind';
import React from 'react';
import { View as RnView } from 'react-native';
import {
  SafeAreaProvider as RnSafeAreaProvider,
  SafeAreaView as RnSafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export function SafeAreaProvider({ children }) {
  return (
    <RnSafeAreaProvider initialMetrics={initialWindowMetrics}>
      {children}
    </RnSafeAreaProvider>
  );
}

export default function SafeAreaView({ children }) {
  return (
    <StyledComponent component={RnSafeAreaView} tw="flex-1 bg-black">
      <StyledComponent component={RnView} tw="flex-1 rounded-xl bg-white">
        {children}
      </StyledComponent>
    </StyledComponent>
  );
}
