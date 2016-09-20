/* eslint max-len: 0 */
import env from 'react-native-config';
import map from 'lodash/map';
import assign from 'lodash/assign';

if (!env.MIXPANEL_ID) {
  throw new Error('MIXPANEL_ID is required.');
}

export const SUBMISSION_TYPES_MAP = {
  comment: {
    title: 'Positive Comment',
    description: 'Praise agencies for the things they are doing right, so they can continue to do so!',
  },
  idea: {
    title: 'Idea',
    description: 'Have a recommendation? Improve the public agency\'s service with an idea.',
  },
  question: {
    title: 'Question',
    description: 'New to a city? Have feedback for your local tranportation agency? This is the place to go.',
  },
};

export const SUBMISSION_TYPES = map(SUBMISSION_TYPES_MAP, (value, key) => (assign(
  {},
  value,
  { key }
)));

export const HOST = env.HOST || (process.env.NODE_ENV === 'production'
                                  ? 'https://dasy-labs.herokuapp.com'
                                  : 'http://localhost:3000');

export const MIXPANEL_ID = env.MIXPANEL_ID;
export const SENTRY_DSN_PUBLIC = env.SENTRY_DSN_PUBLIC;

export const SUGGESTION_MAILTO_URL = 'mailto:suggest@dasylabs.com?Subject=Agency%20Suggestion&Body=Hi%2C%0A%0AI%20would%20love%20it%20if%20you%20added%20the%20following%20agency%3A%0A%0AAGENCY%20NAME%0A%0AThey%20can%20be%20contacted%20at%20the%20following%20email%3A%0A%0AAGENCY_EMAIL@AGENCYWEBSITE.COM%0A%0AThanks%21';
