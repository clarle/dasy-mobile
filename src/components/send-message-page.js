/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as $ from '../styles/variables';
import styles from '../styles/navbar';

export default class SendMessagePage extends Component {
  constructor(props) {
    /* eslint no-useless-constructor: 0 */
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar translucent barStyle="light-content" />
        <NavigationBar
          style={styles.base}
          statusBar={{
            tintColor: $.BRAND_PRIMARY,
          }}
          title={{
            title: 'Message',
            tintColor: $.WHITE,
          }}
          leftButton={{
            title: 'Back',
            tintColor: $.WHITE,
            handler: this.props.prevRoute,
          }}
        />
        <Text>Enter Message</Text>
      </View>
    );
  }
}

SendMessagePage.propTypes = {
  prevRoute: PropTypes.func,
};
