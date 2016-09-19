import React, { Component, PropTypes } from 'react';
import { Linking, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import * as $ from '../styles/variables';
import { buttons, welcome } from '../styles';
import submission from '../styles/submission-type';

export default class ThankYouPage extends Component {
  constructor(props) {
    super(props);
    this.handleUrl = this.handleUrl.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.nextScreen();
    }, 2000);
  }

  handleUrl(url) {
    return () => (
      Linking.canOpenURL(url)
        .then(supported => {
          if (supported) {
            return Linking.openURL(url);
          }
          return Promise.resolve();
        })
        .catch(err => {
          console.error(err);
        })
    );
  }

  render() {
    return (
      <View style={welcome.container}>
        <StatusBar translucent barStyle="light-content" />
        <Text style={welcome.title}>Thank you</Text>
        <Text style={welcome.subtitle}>Check your email.</Text>
        <View style={submission.actions}>
          <TouchableOpacity
            onPress={this.handleUrl('https://www.facebook.com/dasylabs')}
            style={{ marginBottom: $.MD }}
          >
            <View style={buttons.base}>
              <Text style={[buttons.text, buttons.textPrimary]}>
                Find us on Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleUrl('https://twitter.com/dasylabs')}
          >
            <View style={buttons.base}>
              <Text style={[buttons.text, buttons.textPrimary]}>
                Follow us on Twitter
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
