import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  container: {
    backgroundColor: $.BRAND_PRIMARY,
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    color: $.TEXT_COLOR,
    fontSize: $.FONT_SIZE_H1,
    fontWeight: $.FONT_WEIGHT_LIGHT,
    lineHeight: $.FONT_SIZE_H1 * $.LINE_HEIGHT_HEADINGS,
    textAlign: 'center',
  },
  subtitle: {
    color: $.TEXT_COLOR,
    fontSize: $.FONT_SIZE_H5,
    fontWeight: $.FONT_WEIGHT_LIGHT,
    lineHeight: $.FONT_SIZE_H4 * $.LINE_HEIGHT_HEADINGS,
    marginTop: $.XS,
    textAlign: 'center',
  },
  subtitle2: {
    fontSize: $.FONT_SIZE_H6,
  },
  logo: {
    height: 60,
    width: 201,
    marginBottom: $.LG,
  },
});
