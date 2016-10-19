/* eslint max-len: 0 */
import env from 'react-native-config';
import map from 'lodash/map';
import assign from 'lodash/assign';

if (!env.MIXPANEL_ID) {
  throw new Error('MIXPANEL_ID is required.');
}

export const SUBMISSION_TYPES_MAP = {
  compliment: {
    title: 'Compliment',
    description: 'Send a thank you and praise for what they’re doing right! Happier agencies lead to more responsive agencies.',
  },
  idea: {
    title: 'Idea',
    description: 'Want to have a new event in your area? Maybe you’re interested in adding to the new developments in downtown.',
  },
  question: {
    title: 'Question',
    description: 'Just visiting a city and want to find out local events? Or want to ask who to contact in the agency?',
  },
};

export const SUBMISSION_TYPES = map(SUBMISSION_TYPES_MAP, (value, key) => (assign(
  {},
  value,
  { key }
)));

export const PRODUCTION_HOST = 'https://www.dasy.io';

export const HOST = env.HOST || 'http://localhost:3000';

export const MIXPANEL_ID = env.MIXPANEL_ID;
export const SENTRY_DSN_PUBLIC = env.SENTRY_DSN_PUBLIC;

export const SUGGESTION_MAILTO_URL = 'mailto:suggest@dasylabs.com?Subject=Agency%20Suggestion&Body=Hi%2C%0A%0AI%20would%20love%20it%20if%20you%20added%20the%20following%20agency%3A%0A%0AAGENCY%20NAME%0A%0AThey%20can%20be%20contacted%20at%20the%20following%20email%3A%0A%0AAGENCY_EMAIL@AGENCYWEBSITE.COM%0A%0AThanks%21';
