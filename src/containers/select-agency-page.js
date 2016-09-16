/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

class SelectAgencyPage extends Component {
  constructor(props) {
    /* eslint no-useless-constructor: 0 */
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar translucent barStyle="light-content" />
        <Text>Select Agency</Text>
      </View>
    );
  }
}

SelectAgencyPage.propTypes = {

};

export default connect()(SelectAgencyPage);
