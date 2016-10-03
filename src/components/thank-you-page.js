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

  componentDidMount() {
    setTimeout(() => {
      this.nextScreen();
    }, 6000);
  }

  nextScreen() {
    return this.props.nextScreen();
  }

  render() {
    /* eslint class-methods-use-this: 0 */
    return (
      <View style={welcome.container}>
        <StatusBar translucent barStyle="light-content" />
        <Text style={welcome.title}>Awesome!</Text>
        <Text style={welcome.subtitle}>
          Thanks for your public service. Check for a confirmation email.
        </Text>
        <View style={submission.actions}>
          <TouchableOpacity
            onPress={handleUrl('https://www.facebook.com/dasylabs')}
            style={{ marginBottom: $.MD }}
          >
            <View style={buttons.base}>
              <Text style={[buttons.text, buttons.textPrimary]}>
                Find us on Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleUrl('https://twitter.com/dasylabs')}
            style={{ marginBottom: $.MD }}
          >
            <View style={buttons.base}>
              <Text style={[buttons.text, buttons.textPrimary]}>
                Follow us on Twitter
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.nextScreen}
          >
            <View style={[buttons.base, buttons.transparent]}>
              <Text style={[buttons.text, buttons.textTransparent]}>
                Send Another
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
