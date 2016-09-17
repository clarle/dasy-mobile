/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import React, { Component, PropTypes } from 'react';
import { View, Text, ListView, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as $ from '../styles/variables';
import styles from '../styles/navbar';

export default class SelectAgencyPage extends Component {
  constructor(props) {
    /* eslint no-useless-constructor: 0 */
    super(props);
  }

  componentDidMount() {
    this.props.requestAgencies();
  }

  selectAgency(agency) {
    return function boundSelectAgency() {
      return this.props.selectAgency(agency);
    };
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
        {this.props.agencies.map(agency => (
          <Text key={agency.id} onPress={this.props.selectAgency.bind(this, agency)}>
            {agency.name}
          </Text>
        ))}
      </View>
    );
  }
}

SelectAgencyPage.propTypes = {
  nextRoute: PropTypes.func,
  prevRoute: PropTypes.func,
  requestAgencies: PropTypes.func,
  selectAgency: PropTypes.func,
  agencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  loading: PropTypes.bool,
  more: PropTypes.bool,
};
