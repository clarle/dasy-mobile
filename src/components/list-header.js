import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import startCase from 'lodash/startCase';
import list from '../styles/list';

export default function ListHeader(props) {
  return (
    <View style={list.header}>
      <Text style={list.headerText}>{startCase(props.text)}</Text>
    </View>
  );
}

ListHeader.propTypes = {
  text: PropTypes.string,
};
