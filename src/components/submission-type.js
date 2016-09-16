import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { buttons } from '../styles';
import styles from '../styles/submission-type';

export default function SubmissionType(props) {
  return (
    <View style={[styles.base, styles[props.type]]}>
      <Text style={styles.title}>{props.heading}</Text>
      <Text style={styles.subtitle}>{props.description}</Text>
      <TouchableHighlight style={styles.actions}>
        <Text style={[buttons.base, styles[`${props.type}Text`]]}>
          Select {props.type}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

SubmissionType.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};
