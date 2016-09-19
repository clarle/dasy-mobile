import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  base: {
    backgroundColor: $.WHITE,
    paddingTop: $.SM,
    paddingBottom: $.SM,
  },
  icon: {
    backgroundColor: 'transparent',
    color: $.GRAY,
    fontSize: 28,
    lineHeight: 24,
    textAlign: 'center',
  },
});
