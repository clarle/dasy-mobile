import { StyleSheet } from 'react-native';
import * as $ from './variables';

const paddingX = $.XL + $.MD;

export default StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
    paddingRight: paddingX,
    paddingLeft: paddingX,
  },
  title: {
    color: $.TEXT_COLOR,
    fontSize: $.FONT_SIZE_H2,
    fontWeight: $.FONT_WEIGHT_LIGHT,
    marginBottom: $.LG,
    textAlign: 'center',
  },
  subtitle: {
    color: $.TEXT_COLOR,
    fontSize: $.FONT_SIZE_H5,
    fontWeight: $.FONT_WEIGHT_LIGHT,
    lineHeight: $.FONT_SIZE_H5 * $.LINE_HEIGHT,
    textAlign: 'center',
  },
  actions: {
    position: 'absolute',
    bottom: ($.XL * 2) + $.MD,
    left: paddingX,
    right: paddingX,
  },
  comment: {
    backgroundColor: $.COMMENT,
  },
  idea: {
    backgroundColor: $.IDEA,
  },
  question: {
    backgroundColor: $.QUESTION,
  },
  commentText: {
    color: $.COMMENT_TEXT,
  },
  ideaText: {
    color: $.IDEA_TEXT,
  },
  questionText: {
    color: $.QUESTION_TEXT,
  },
});
