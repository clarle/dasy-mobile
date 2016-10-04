import { combineReducers } from 'redux';
import navigation from './navigation';
import submission from './submission';
import agencies from './agencies';
import user from './user';
import alerts from './alerts';
import loading from './loading';

export default combineReducers({
  navigation,
  submission,
  agencies,
  user,
  alerts,
  loading,
});
