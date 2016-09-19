import React from 'react';
import { Provider } from 'react-redux';
import './sentry';
import NavigationRootContainer from './containers/navigation-root';
import store from './store';

export default function dasy() {
  return (
    <Provider store={store}>
      <NavigationRootContainer />
    </Provider>
  );
}
