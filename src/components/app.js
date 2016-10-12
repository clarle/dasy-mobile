import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Alert from './alert';
import * as $ from '../styles/variables';
import alerts from '../styles/alerts';
import { HOST, PRODUCTION_HOST } from '../constants';

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    flexDirection: 'column',
  },
  testNotice: {
    backgroundColor: $.BRAND_WARNING,
    padding: $.XS,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 800,
  },
  testNoticeText: {
    color: $.WHITE,
    fontSize: 12,
    textAlign: 'center',
  },
});

function bindDismissAlert(dismiss, alert) {
  return function boundDismissAlert() {
    dismiss(alert);
  };
}

export default function App(props) {
  let testNotice = null;

  if (HOST !== PRODUCTION_HOST) {
    testNotice = (
      <View style={styles.testNotice}>
        <Text style={styles.testNoticeText}>HOST: {HOST}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.fullscreen, styles.status]}>
      <View style={alerts.container}>
        {props.alerts.map(alert => (
          <Alert
            key={alert.id}
            {...alert}
            onDismiss={bindDismissAlert(props.dismissAlert, alert)}
          />
        ))}
      </View>
      {testNotice}
      {props.children}
    </View>
  );
}

App.propTypes = {
  children: PropTypes.node,
  alerts: PropTypes.array,
  dismissAlert: PropTypes.func,
};
