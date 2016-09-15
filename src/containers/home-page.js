import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { welcome } from '../styles';

export default function HomePage() {
  return (
    <View style={welcome.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={welcome.title}>Dasy</Text>
      <Text style={welcome.subtitle}>Close the loop.</Text>
    </View>
  );
}
