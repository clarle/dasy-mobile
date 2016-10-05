import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar';
import validator from 'validator';
import InputField from './form/input-field';
import ImageSelector from './image-selector';
import * as $ from '../styles/variables';
import navbar from '../styles/navbar';
import { grid } from '../styles';
import { formatTel } from '../utils';
import {
  trackSubmissionMessage,
  trackUserName,
  trackUserTel,
  trackUserEmail,
} from '../mixpanel';

export default class SendMessagePage extends Component {
  constructor(props) {
    super(props);
    this.formFields = {};
    this.focusOnNextField = this.focusOnNextField.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlurName = this.onBlurName.bind(this);
    this.onBlurEmail = this.onBlurEmail.bind(this);
    this.onBlurTel = this.onBlurTel.bind(this);
    this.onBlurMessage = this.onBlurMessage.bind(this);
  }

  onChangeField(ref) {
    return text => {
      if (ref === 'tel') {
        /* eslint no-param-reassign: 0 */
        text = text.replace(/\D/g, '');
      }
      return this.props.onChange(ref, text);
    };
  }

  onSubmit() {
    this.props.onSubmit().then(() => {
      this.props.nextRoute();
    });
  }

  onBlurName() {
    return trackUserName(this.props.user.name);
  }

  onBlurEmail() {
    return trackUserEmail(this.props.user.email);
  }

  onBlurTel() {
    return trackUserTel(this.props.user.tel);
  }

  onBlurMessage() {
    return trackSubmissionMessage(this.props.submission.message);
  }

  focusOnNextField(ref) {
    return () => this.formFields[ref].focus();
  }

  render() {
    let rightButton = null;

    const {
      name,
      email,
      tel,
    } = this.props.user;

    const {
      message,
      imgUrl,
    } = this.props.submission;

    const nameIsValid = validator.isLength(name, { min: 1 });
    const emailIsValid = validator.isLength(email, { min: 1 }) && validator.isEmail(email);
    const telIsValid = !tel || validator.isLength(tel, { min: 10 });
    const messageIsValid = validator.isLength(message, { min: 1, max: 10000 });

    if (nameIsValid && emailIsValid && telIsValid && messageIsValid && !this.props.loading) {
      rightButton = {
        rightButton: {
          title: 'Send',
          tintColor: $.WHITE,
          handler: this.onSubmit,
        },
      };
    }

    return (
      <View style={grid.container}>
        <StatusBar translucent barStyle="light-content" />
        <NavigationBar
          style={navbar.base}
          statusBar={{
            tintColor: $.BRAND_PRIMARY,
          }}
          title={{
            title: 'Message',
            tintColor: $.WHITE,
          }}
          leftButton={{
            title: 'Back',
            tintColor: $.WHITE,
            handler: this.props.prevRoute,
          }}
          {...rightButton}
        />
        <View style={{ flex: 1 }}>
          <InputField
            inputRef={c => { this.formFields.name = c; }}
            onSubmitEditing={this.focusOnNextField('email')}
            onChangeText={this.onChangeField('name')}
            onBlur={this.onBlurName}
            label="Name"
            autoCorrect={false}
            returnKeyType="next"
            value={name}
          />
          <InputField
            inputRef={c => { this.formFields.email = c; }}
            onSubmitEditing={this.focusOnNextField('tel')}
            onChangeText={this.onChangeField('email')}
            onBlur={this.onBlurEmail}
            label="Email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={email}
          />
          <InputField
            inputRef={c => { this.formFields.tel = c; }}
            onSubmitEditing={this.focusOnNextField('message')}
            onChangeText={this.onChangeField('tel')}
            onBlur={this.onBlurTel}
            label="Phone"
            placeholder="optional"
            keyboardType="phone-pad"
            returnKeyType="next"
            value={formatTel(tel)}
          />
          <ImageSelector
            value={imgUrl}
            uploading={this.props.uploadingImg}
            onError={this.props.onImageError}
            onReset={this.props.onImageReset}
            onSelect={this.props.onImageSelect}
          />
          <InputField
            inputRef={c => { this.formFields.message = c; }}
            onChangeText={this.onChangeField('message')}
            onBlur={this.onBlurMessage}
            placeholder="Message"
            multiline
            style={{ flex: 1, paddingTop: $.XS }}
            groupStyle={{ flex: 1 }}
            inputStyle={{ flex: 1, height: null }}
            value={message}
          />
        </View>
      </View>
    );
  }
}

SendMessagePage.propTypes = {
  prevRoute: PropTypes.func.isRequired,
  nextRoute: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onImageError: PropTypes.func.isRequired,
  onImageReset: PropTypes.func.isRequired,
  onImageSelect: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
  }),
  submission: PropTypes.shape({
    message: PropTypes.string,
    imgUrl: PropTypes.string,
  }),
  loading: PropTypes.bool,
  uploadingImg: PropTypes.bool,
};
