import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import capitalize from 'lodash/capitalize';
import { buttons } from '../styles';
import styles from '../styles/submission-type';

export default function SubmissionType(props) {
  return (
    <View style={[styles.base, styles[props.type]]}>
      <Text style={styles.title}>{props.heading}</Text>
      <Text style={styles.subtitle}>{props.description}</Text>
      <TouchableOpacity onPress={props.onSelect} style={styles.actions}>
        <View style={buttons.base}>
          <Text style={[buttons.text, styles[`${props.type}Text`]]}>
            Select {capitalize(props.type)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

SubmissionType.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onSelect: PropTypes.func,
};
