import { combineReducers } from 'redux';
import navigation from './navigation';
import submission from './submission';
import agencies from './agencies';

export default combineReducers({
  navigation,
  submission,
  agencies,
});
