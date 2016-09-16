import { StyleSheet } from 'react-native';
import * as $ from './variables';

export default StyleSheet.create({
  container: {
    padding: $.MD,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    bottom: $.LG,
  },
  active: {
    backgroundColor: '#fff',
  },
  button: {
    color: '#fff',
    fontSize: $.FONT_SIZE_H1,
  },
});
