import React from 'react';

import { AppNavigator } from './app/navigators/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
}
