import React, { PropTypes } from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';
import Alert from './alert';
import { fullscreen } from '../styles';
import alerts from '../styles/alerts';
import testNoticeStyles from '../styles/test-notice';
import { HOST, PRODUCTION_HOST } from '../constants';

function bindDismissAlert(dismiss, alert) {
  return function boundDismissAlert() {
    dismiss(alert);
  };
}

export default function App(props) {
  let testNotice = null;

  if (HOST !== PRODUCTION_HOST) {
    testNotice = (
      <View style={testNoticeStyles.testNotice}>
        <Text style={testNoticeStyles.testNoticeText}>HOST: {HOST}</Text>
      </View>
    );
  }

  return (
    <View style={fullscreen.fullscreen}>
      <StatusBar hidden={Platform.OS === 'android'} />
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
