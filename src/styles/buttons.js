import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  base: {
    backgroundColor: $.WHITE,
    padding: $.SM + 2,
    borderRadius: $.BORDER_RADIUS,
  },
  transparent: {
    backgroundColor: null,
  },
  text: {
    fontWeight: $.FONT_WEIGHT_MEDIUM,
    textAlign: 'center',
  },
  textPrimary: {
    color: $.BRAND_PRIMARY,
  },
  textTransparent: {
    color: $.WHITE,
  },
});
