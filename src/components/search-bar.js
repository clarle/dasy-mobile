import React, { PropTypes } from 'react';
import { TextInput, View } from 'react-native';
import searchBar from '../styles/search-bar';

export default function SearchBar(props) {
  return (
    <View style={searchBar.base}>
      <TextInput
        {...props}
        style={searchBar.input}
        placeholder="Search"
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
