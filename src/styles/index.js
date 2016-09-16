import { StyleSheet } from 'react-native';
import * as $ from './variables';

export const colors = StyleSheet.create({
  text: { color: $.TEXT_COLOR },
  primary: { color: $.BRAND_PRIMARY },
});

export const headings = StyleSheet.create({
  h1: { fontSize: $.FONT_SIZE_H1 },
  h2: { fontSize: $.FONT_SIZE_H2 },
  h3: { fontSize: $.FONT_SIZE_H3 },
  h4: { fontSize: $.FONT_SIZE_H4 },
  h5: { fontSize: $.FONT_SIZE_H5 },
  h6: { fontSize: $.FONT_SIZE_H6 },
});

export const buttons = StyleSheet.create({
  base: {
    backgroundColor: $.WHITE,
    padding: $.SM,
    borderRadius: $.BORDER_RADIUS,
    textAlign: 'center',
  },
});

exports.welcome = require('./welcome').default;
