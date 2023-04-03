import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';
import store from './src/redux/store';
import { SafeAreaProvider } from './src/safearea';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
