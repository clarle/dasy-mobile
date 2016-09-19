import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';
import loadingIndicator from '../styles/loading-indicator';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default function LoadingIndicator() {
  return (
    <View style={loadingIndicator.base}>
      <AnimatedIcon
        name="spinner"
        animation="rotate"
        iterationCount="infinite"
        style={loadingIndicator.icon}
      />
    </View>
  );
}
