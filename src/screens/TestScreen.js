import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

import Card from '../components/core/Card';

export default function TestScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center p-4`}>
      <Card
        imageUri="https://picsum.photos/128"
        text="abc"
      />
    </SafeAreaView>
  );
}
