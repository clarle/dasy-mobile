import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import omit from 'lodash/omit';
import form from '../../styles/form';

export default function InputField(props) {
  const { label } = props;

  const groupStyles = [form.group];
  const groupContainerStyles = [form.groupContainer];

  const inputProps = omit(props, [
    'label',
    'style',
    'groupStyle',
    'inputStyle',
    'labelStyle',
    'inputRef',
  ]);
  const inputStyles = [form.input];

  let labelText = null;
  const labelStyles = [form.label];

  if (props.style) {
    groupStyles.push(props.style);
  }

  if (props.groupStyle) {
    groupContainerStyles.push(props.groupStyle);
  }

  if (props.inputStyle) {
    inputStyles.push(props.inputStyle);
  }

  if (props.labelStyle) {
    labelStyles.push(props.labelStyle);
  }

  if (label) {
    labelText = <Text style={labelStyles}>{label}</Text>;
    inputStyles.push(form.inputRight);
  }

  if (props.inputRef) {
    inputProps.ref = props.inputRef;
  }

  return (
    <View style={groupStyles}>
      <View style={groupContainerStyles}>
        {labelText}
        <TextInput
          {...inputProps}
          style={inputStyles}
        />
      </View>
    </View>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  inputRef: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  groupStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  inputStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  labelStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
