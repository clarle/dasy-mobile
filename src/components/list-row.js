import React, { PropTypes } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import list from '../styles/list';
import * as $ from '../styles/variables';

export default function ListRow(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={$.GRAY}
    >
      <View style={list.row}>
        <View style={list.rowContent}>
          <Text style={list.text}>{props.text}</Text>
          <Icon style={list.icon} name="chevron-right" />
        </View>
      </View>
    </TouchableHighlight>
  );
}

ListRow.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
