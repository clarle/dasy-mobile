import React, { PropTypes } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import capitalize from 'lodash/capitalize';
import Icon from 'react-native-vector-icons/EvilIcons';

import alerts from '../styles/alerts';

export default function Alert(props) {
  const styleType = capitalize(props.type);
  return (
    <TouchableOpacity
      onPress={props.onDismiss}
      style={[alerts.body, alerts[`body${styleType}`]]}
    >
      <View style={alerts.inner}>
        <Text style={[alerts.message, alerts[`message${styleType}`]]}>
          {props.message}
          {props.children}
        </Text>
        <Icon
          style={alerts.icon}
          name="close"
        />
      </View>
    </TouchableOpacity>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  // id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
