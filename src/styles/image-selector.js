import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  body: {
    backgroundColor: $.WHITE,
    paddingRight: $.MD,
    paddingLeft: $.MD,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: $.BORDER,
    height: 40,
    borderBottomWidth: 1,
  },
  label: {
    color: $.TEXT_MUTED,
    marginRight: $.MD,
  },
  icon: {
    color: $.TEXT_MUTED,
    fontSize: 24,
  },
  value: {
    color: $.BRAND_PRIMARY,
    flexGrow: 1,
    textAlign: 'right',
  },
});
