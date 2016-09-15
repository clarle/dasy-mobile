import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  container: {
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
    fontSize: $.FONT_SIZE_H4,
    fontWeight: $.FONT_WEIGHT_LIGHT,
    lineHeight: $.FONT_SIZE_H4 * $.LINE_HEIGHT_HEADINGS,
    marginTop: $.XS,
    textAlign: 'center',
  },
});
