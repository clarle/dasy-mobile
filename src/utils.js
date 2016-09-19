import { Linking } from 'react-native';
import { captureException } from './sentry';
import store from './store';
import { addAlert } from './actions/alerts';

export function handleUrl(url) {
  return function boundHandleUrl() {
    return Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        }
        return store.dispatch(addAlert({
          message: `This device cannot handle the url ${url}`,
          type: 'warning',
        }));
      })
      .catch(err => {
        captureException(err);
      });
  };
}
