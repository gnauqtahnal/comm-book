/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import NavigationProvider from './src/navigation/provider';
import store from './src/redux/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="dark" />
          <NavigationProvider />
        </PaperProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
