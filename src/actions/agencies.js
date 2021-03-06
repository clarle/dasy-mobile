import qs from 'qs';
import {
  REQUEST_AGENCIES,
  RECEIVE_AGENCIES,
  RESET_AGENCIES,
  SEARCH_AGENCIES,
} from '../action-types';
import { HOST } from '../constants';
import { addAlert } from './alerts';
import { captureException } from '../sentry';

export function requestAgencies() {
  return {
    type: REQUEST_AGENCIES,
  };
}

export function receiveAgencies(res) {
  return {
    type: RECEIVE_AGENCIES,
    payload: {
      more: res.more,
      data: res.data,
    },
  };
}

export function resetAgencies() {
  return {
    type: RESET_AGENCIES,
  };
}

export function fetchAgencies(req = {}) {
  return dispatch => {
    dispatch(requestAgencies());

    fetch(`${HOST}/api/agencies?${qs.stringify(req.query)}`)
      .then(res => res.json())
      .then(res => {
        dispatch(receiveAgencies(res));
      })
      .catch(err => {
        captureException(err);
        dispatch(addAlert({
          message: err.message,
          type: 'error',
        }));
      });
  };
}

export function searchAgencies(str) {
  return {
    type: SEARCH_AGENCIES,
    payload: {
      search: str,
    },
  };
}
