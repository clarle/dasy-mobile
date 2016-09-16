import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { BRAND_PRIMARY } from '../styles/variables';

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    flexDirection: 'column',
  },
  status: {
    backgroundColor: BRAND_PRIMARY,
  },
});

export default function App(props) {
  return (
    <View style={[styles.fullscreen, styles.status]}>
      {props.children}
    </View>
  );
}

App.propTypes = {
  children: PropTypes.node,
};
