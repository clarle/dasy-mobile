import React, { Component, PropTypes } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { handleUrl } from '../utils';
import * as $ from '../styles/variables';
import { buttons, welcome } from '../styles';
import submission from '../styles/submission-type';

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
        <Text style={welcome.title}>Dasy</Text>
        <Text style={welcome.subtitle}>
          Perform a Civic Service.
        </Text>
        <Text style={welcome.subtitle}>
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
