import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, createMemoryHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducers';
import routes from './routes';

const history = createMemoryHistory({});

const middleware = [
  thunk,
  routerMiddleware(history),
];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default function dasy() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}
