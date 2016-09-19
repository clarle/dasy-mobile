import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  group: {
    backgroundColor: $.WHITE,
    paddingRight: $.MD,
    paddingLeft: $.MD,
  },
  groupContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: $.BORDER,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
    height: 40,
    flex: 1,
  },
  inputRight: {
    textAlign: 'right',
  },
  label: {
    color: $.TEXT_MUTED,
    marginRight: $.MD,
  },
});
