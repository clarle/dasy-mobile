import React, { Component, PropTypes } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { welcome } from '../styles';

export default class HomePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.nextScreen();
    }, 500);
  }

  render() {
    return (
      <View style={welcome.container}>
        <StatusBar translucent barStyle="light-content" />
        <Text style={welcome.title}>Dasy</Text>
        <Text style={welcome.subtitle}>Close the loop.</Text>
      </View>
    );
  }
}

HomePage.propTypes = {
  nextScreen: PropTypes.func,
};
