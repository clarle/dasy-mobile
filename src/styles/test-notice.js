import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  testNotice: {
    backgroundColor: $.BRAND_WARNING,
    padding: $.XS,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 800,
  },
  testNoticeText: {
    color: $.WHITE,
    fontSize: 12,
    textAlign: 'center',
  },
});
