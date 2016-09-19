import {
  ADD_ALERT,
  DISMISS_ALERT,
  DISMISS_ALL_ALERTS,
} from '../action-types';

/**
 * Add alert.
 * @param {Object} alert
 * @param {String} alert.message
 * @param {String} alert.type
 */
export function addAlert(alert) {
  return {
    type: ADD_ALERT,
    payload: {
      ...alert,
      id: Math.floor(Math.random() * 100000),
    },
  };
}

export function dismissAlert(alertOrId) {
  const id = typeof alertOrId === 'object' ? alertOrId.id : alertOrId;
  return {
    type: DISMISS_ALERT,
    payload: {
      id,
    },
  };
}

export function dismissAllAlerts() {
  return {
    type: DISMISS_ALL_ALERTS,
  };
}
