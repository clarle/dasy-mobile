import React from 'react';
import { View, StatusBar, Text } from 'react-native';

export default function HomePage() {
  return (
    <View>
      <StatusBar translucent barStyle="light-content" />
      <Text>Home page</Text>
    </View>
  );
}
