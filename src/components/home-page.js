import React, { Component, PropTypes } from 'react';
import { Image, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import * as $ from '../styles/variables';
import { buttons, welcome } from '../styles';
import submission from '../styles/submission-type';
import logo from '../assets/logo/logo-light-1.5x.png';

export default class ThankYouPage extends Component {
  constructor(props) {
    super(props);
    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen() {
    return this.props.nextScreen();
  }

  render() {
    /* eslint class-methods-use-this: 0 */
    return (
      <View style={welcome.container}>
        <StatusBar translucent barStyle="light-content" />
        <Image style={welcome.logo} source={logo} />
        <Text style={welcome.subtitle}>
          Perform a Civic Service.
        </Text>
        <Text style={[welcome.subtitle, welcome.subtitle2]}>
          Message public agencies.
        </Text>
        <View style={submission.actions}>
          <TouchableOpacity
            onPress={this.nextScreen}
          >
            <View style={[buttons.base]}>
              <Text style={[buttons.text, buttons.textPrimary]}>
                Start
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ThankYouPage.propTypes = {
  nextScreen: PropTypes.func,
};
