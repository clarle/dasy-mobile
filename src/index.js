import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import './sentry';
import NavigationRootContainer from './containers/navigation-root';

import reducer from './reducers';

const middleware = [
  thunk,
  createLogger(),
];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default function dasy() {
  return (
    <Provider store={store}>
      <NavigationRootContainer />
    </Provider>
  );
}
