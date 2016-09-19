import { StyleSheet } from 'react-native';
import * as $ from './variables';

const $PADDING_Y = 6;
const $PADDING_X = 8;

export default StyleSheet.create({
  base: {
    backgroundColor: $.SEARCH_BAR_BG,
    paddingTop: $PADDING_Y,
    paddingBottom: $PADDING_Y,
    paddingRight: $PADDING_X,
    paddingLeft: $PADDING_X,
  },
  input: {
    backgroundColor: $.WHITE,
    borderColor: $.BORDER,
    borderWidth: 1,
    borderRadius: $.BORDER_RADIUS,
    fontSize: $.FONT_SIZE_SM,
    paddingTop: $.XS,
    paddingBottom: $.XS,
    paddingRight: $.MD,
    paddingLeft: $.MD,
    height: 30,
    textAlign: 'center',
  },
});
