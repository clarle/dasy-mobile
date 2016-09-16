import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import swiper from '../styles/swiper';
import { SUBMISSION_TYPES } from '../constants';
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

/* eslint "react/prefer-stateless-function": 0 */
class SelectTypePage extends Component {
  constructor(props) {
    /* eslint no-useless-constructor: 0 */
    super(props);
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
          />
          <SubmissionType
            heading="Service Request"
            description="Have a problem? Is something broken? Let your city or local agency know!"
            type="request"
          />
          <SubmissionType
            heading="Question"
            description="New to a city? Have feedback for your local tranportation agency? This is the place to go."
            type="question"
          />
        </Swiper>
      </View>
    );
  }
}

SelectTypePage.propTypes = {
  index: PropTypes.number,
};

const mapStateToProps = (state) => ({
  index: SUBMISSION_TYPES.indexOf(state.submission.type) || 0,
});

export default connect(mapStateToProps)(SelectTypePage);
