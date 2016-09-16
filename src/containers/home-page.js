import React, { Component, PropTypes } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { welcome } from '../styles';

class HomePage extends Component {
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

const mapDispatchToProps = (dispatch) => ({
  nextScreen: () => {
    dispatch(push('/select-type'));
  },
});

export default connect(null, mapDispatchToProps)(HomePage);
