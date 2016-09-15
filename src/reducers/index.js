import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import submission from './submission';

export default combineReducers({
  submission,
  routing: routerReducer,
});
