import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar';
import validator from 'validator';
import InputField from './form/input-field';
import * as $ from '../styles/variables';
import navbar from '../styles/navbar';
import { grid } from '../styles';

export default class SendMessagePage extends Component {
  constructor(props) {
    super(props);
    this.formFields = {};
    this.focusOnNextField = this.focusOnNextField.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeField(ref) {
    return text => this.props.onChange(ref, text);
  }

  onSubmit() {
    this.props.onSubmit().then(() => {
      this.props.nextRoute();
    });
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
    } = this.props.submission;

    const nameIsValid = validator.isLength(name, { min: 1 });
    const emailIsValid = validator.isLength(email, { min: 1 }) && validator.isEmail(email);
    const telIsValid = !tel || validator.isMobilePhone(tel);
    const messageIsValid = validator.isLength(message, { min: 1, max: 10000 });

    if (nameIsValid && emailIsValid && telIsValid && messageIsValid) {
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
            label="Name"
            autoCorrect={false}
            returnKeyType="next"
            value={name}
          />
          <InputField
            inputRef={c => { this.formFields.email = c; }}
            onSubmitEditing={this.focusOnNextField('tel')}
            onChangeText={this.onChangeField('email')}
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
            label="Phone"
            placeholder="optional"
            keyboardType="phone-pad"
            returnKeyType="next"
            value={tel}
          />
          <InputField
            inputRef={c => { this.formFields.message = c; }}
            onChangeText={this.onChangeField('message')}
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
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
  }),
  submission: PropTypes.shape({
    message: PropTypes.string,
  }),
};
