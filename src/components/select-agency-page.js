/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as $ from '../styles/variables';
import styles from '../styles/navbar';

export default class SelectAgencyPage extends Component {
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
            title: 'Select Agency',
            tintColor: $.WHITE,
          }}
          leftButton={{
            title: 'Back',
            tintColor: $.WHITE,
            handler: this.props.prevRoute,
          }}
        />
        <Text onPress={this.props.nextRoute}>Select Agency</Text>
      </View>
    );
  }
}

SelectAgencyPage.propTypes = {
  nextRoute: PropTypes.func,
  prevRoute: PropTypes.func,
};
