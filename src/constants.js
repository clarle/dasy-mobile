/* eslint max-len: 0 */

export const SUBMISSION_TYPES = [
  'comment',
  'request',
  'question',
];

export const HOST = process.env.HOST || (process.env.NODE_ENV === 'production' ? 'https://dasy-labs.herokuapp.com' : 'http://localhost:3000');

export const SUGGESTION_MAILTO_URL = 'mailto:suggest@dasylabs.com?Subject=Agency%20Suggestion&Body=Hi%2C%0A%0AI%20would%20love%20it%20if%20you%20added%20the%20following%20agency%3A%0A%0AAGENCY%20NAME%0A%0AThey%20can%20be%20contacted%20at%20the%20following%20email%3A%0A%0AAGENCY_EMAIL@AGENCYWEBSITE.COM%0A%0AThanks%21';
