import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import swiper from '../styles/swiper';
import SubmissionType from '../components/submission-type';
import { trackSubmissionType } from '../mixpanel';
import { SUBMISSION_TYPES } from '../constants';

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
  }

  onSelect(type) {
    trackSubmissionType(type);
    this.props.selectSubmissionType(type);
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
          {SUBMISSION_TYPES.map(submissionType => (
            <SubmissionType
              key={submissionType.key}
              heading={submissionType.title}
              description={submissionType.description}
              type={submissionType.key}
              onSelect={() => (this.onSelect(submissionType.key))}
            />
          ))}
        </Swiper>
      </View>
    );
  }
}

SelectTypePage.propTypes = {
  index: PropTypes.number,
  selectSubmissionType: PropTypes.func,
};
