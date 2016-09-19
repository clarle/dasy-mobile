import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import Alert from './alert';
import alerts from '../styles/alerts';

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    flexDirection: 'column',
  },
});

function bindDismissAlert(dismiss, alert) {
  return function boundDismissAlert() {
    dismiss(alert);
  };
}

export default function App(props) {
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
      {props.children}
    </View>
  );
}

App.propTypes = {
  children: PropTypes.node,
  alerts: PropTypes.array,
  dismissAlert: PropTypes.func,
};
