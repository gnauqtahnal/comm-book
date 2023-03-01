import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationProvider from './src/navigation/provider';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="dark" />
        <NavigationProvider />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
