import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: $.XS,
    left: $.XS,
    right: $.XS,
    zIndex: 900,
  },
  body: {
    backgroundColor: $.BRAND_PRIMARY,
    borderRadius: $.BORDER_RADIUS,
    paddingTop: $.SM,
    paddingBottom: $.SM,
    paddingRight: $.MD,
    paddingLeft: $.MD,
    marginTop: $.XS,
    opacity: 0.9,
  },
  bodyError: {
    backgroundColor: $.BRAND_ERROR,
  },
  bodyWarning: {
    backgroundColor: $.BRAND_WARNING,
  },
  bodySuccess: {
    backgroundColor: $.BRAND_SUCCESS,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: $.WHITE,
  },
  icon: {
    color: $.WHITE,
    fontSize: 18,
  },
});
