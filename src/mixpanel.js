import mixpanel from 'react-native-mixpanel';
import throttle from 'lodash/throttle';
import { MIXPANEL_ID } from './constants';

mixpanel.sharedInstanceWithToken(MIXPANEL_ID);
// mixpanel.identify(MIXPANEL_DISTINCT_ID);

function track(eventName, eventData) {
  return mixpanel.trackWithProperties(
    eventName,
    eventData
  );
}

/*
  Submissions
 */
export function trackSubmissionType(type) {
  return track('Selected Submission Type', {
    type,
  });
}

export function trackSubmissionAgency(id) {
  return track('Selected Submission Agency', {
    id,
  });
}

export function trackSubmissionMessage(message) {
  return track('Updated Submission Message', {
    message,
  });
}

export const trackSubmissionMessageThrottled = throttle(trackSubmissionMessage, 250);

/*
 * User
 */
export function trackUserName(name) {
  return track('Updated User Name', {
    name,
  });
}

export function trackUserEmail(email) {
  return track('Updated User Email', {
    email,
  });
}

export function trackUserTel(tel) {
  return track('Updated User Phone', {
    tel,
  });
}

export const trackUserNameThrottled = throttle(trackUserName, 250);
export const trackUserEmailThrottled = throttle(trackUserEmail, 250);
export const trackUserTelThrottled = throttle(trackUserTel, 250);

/*
  Navigation
 */
export function trackNavigateTo(key) {
  return track('User Navigated', {
    route: key,
  });
}

export default mixpanel;
