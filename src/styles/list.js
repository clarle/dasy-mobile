import { StyleSheet } from 'react-native';
import * as $ from './variables';

const paddingY = 10;
const paddingX = 16;

const headerPaddingY = 4;
const headerPaddingX = paddingX;

export default StyleSheet.create({
  base: {
    backgroundColor: $.WHITE,
  },
  row: {
    backgroundColor: $.WHITE,
    paddingLeft: paddingX,
  },
  rowContent: {
    borderBottomColor: $.BORDER,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingRight: paddingX,
  },
  text: {
    fontSize: 17,
  },
  icon: {
    color: $.ICON_COLOR,
    fontSize: 19,
  },
  header: {
    backgroundColor: $.BG,
    borderBottomColor: $.BORDER,
    borderBottomWidth: 1,
    borderTopColor: $.BORDER,
    borderTopWidth: 1,
    paddingRight: headerPaddingX,
    paddingLeft: headerPaddingX,
    paddingTop: headerPaddingY,
    paddingBottom: headerPaddingY,
    position: 'relative',
    top: -1,
  },
  headerText: {
    color: $.BLACK,
  },
  fallbackText: {
    backgroundColor: $.WHITE,
    color: $.TEXT_MUTED,
    fontStyle: 'italic',
    paddingRight: paddingX,
    paddingLeft: paddingX,
    paddingTop: paddingY,
    paddingBottom: paddingY,
  },
});
