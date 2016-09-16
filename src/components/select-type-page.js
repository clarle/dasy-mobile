import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import swiper from '../styles/swiper';
import SubmissionType from '../components/submission-type';

const activeDot = (
  <View
    style={[swiper.dot, swiper.active]}
  />
);

const dot = (
  <View
    style={swiper.dot}
  />
);

const nextButton = (
  <Text style={swiper.button}>›</Text>
);

const prevButton = (
  <Text style={swiper.button}>‹</Text>
);

export default class SelectTypePage extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onSelectComment = this.onSelectComment.bind(this);
    this.onSelectRequest = this.onSelectRequest.bind(this);
    this.onSelectQuestion = this.onSelectQuestion.bind(this);
  }

  onSelect(type) {
    this.props.selectSubmissionType(type);
    this.props.nextScreen();
  }

  onSelectComment() {
    this.onSelect('comment');
  }

  onSelectRequest() {
    this.onSelect('request');
  }

  onSelectQuestion() {
    this.onSelect('question');
  }

  render() {
    /* eslint max-len: 0 */
    return (
      <View>
        <StatusBar translucent barStyle="light-content" />
        <Swiper
          index={this.props.index}
          // showsButtons // TODO: update redux
          loop={false}
          dot={dot}
          activeDot={activeDot}
          prevButton={prevButton}
          nextButton={nextButton}
        >
          <SubmissionType
            heading="Positive Comment"
            description="Praise agencies for the things they are doing right, so they can continue to do so!"
            type="comment"
            onSelect={this.onSelectComment}
          />
          <SubmissionType
            heading="Service Request"
            description="Have a problem? Is something broken? Let your city or local agency know!"
            type="request"
            onSelect={this.onSelectRequest}
          />
          <SubmissionType
            heading="Question"
            description="New to a city? Have feedback for your local tranportation agency? This is the place to go."
            type="question"
            onSelect={this.onSelectQuestion}
          />
        </Swiper>
      </View>
    );
  }
}

SelectTypePage.propTypes = {
  index: PropTypes.number,
  selectSubmissionType: PropTypes.func,
  nextScreen: PropTypes.func,
};
