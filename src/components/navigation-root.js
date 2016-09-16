import React, { Component, PropTypes } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  Text,
} from 'react-native';
import App from './app';

const { CardStack: NavigationCardStack } = NavigationExperimental;

export default class NavigationRoot extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
  }

  handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.payload);
        return true;
      case 'back':
      case 'pop':
        return this.handleBackAction();
      default:
        return false;
    }
  }

  renderScene({ scene }) {
    const { route } = scene;
    return (
      <App>
        <route.component />
      </App>
    );
  }

  render() {
    return (
      <NavigationCardStack
        direction="horizontal"
        navigationState={this.props.navigation}
        onNavigateBack={this.handleBackAction}
        onNavigateNext={this.handleNextAction}
        onNavigate={this.handleNavigate}
        renderScene={this.renderScene}
      />
    );
  }
}

NavigationRoot.propTypes = {
  navigation: PropTypes.shape({
    index: PropTypes.number,
  }),
  popRoute: PropTypes.func,
  pushRoute: PropTypes.func,
};
