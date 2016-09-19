import {
  SELECT_SUBMISSION_TYPE,
  SELECT_SUBMISSION_AGENCY,
  UPDATE_SUBMISSION_MESSAGE,
  START_SUBMIT_SUBMISSION,
  RECEIVE_SUBMIT_SUBMISSION,
  RESET_SUBMISSION,
} from '../action-types';
import { HOST } from '../constants';
import { addAlert } from './alerts';
import { captureException } from '../sentry';

export function selectSubmissionType(type) {
  return {
    type: SELECT_SUBMISSION_TYPE,
    payload: {
      type,
    },
  };
}

export function selectSubmissionAgency(id) {
  return {
    type: SELECT_SUBMISSION_AGENCY,
    payload: {
      id,
    },
  };
}

export function updateSubmissionMessage(message) {
  return {
    type: UPDATE_SUBMISSION_MESSAGE,
    payload: {
      message,
    },
  };
}

/* export */function startSubmitSubmission() {
  return {
    type: START_SUBMIT_SUBMISSION,
  };
}

/* export */function receiveSubmitSubmission(response) {
  return {
    type: RECEIVE_SUBMIT_SUBMISSION,
    payload: response,
  };
}

export function resetSubmission() {
  return {
    type: RESET_SUBMISSION,
  };
}

export function submitSubmission() {
  return (dispatch, getState) => {
    dispatch(startSubmitSubmission());

    const { submission, user } = getState();
    const data = submission;
    data.user = user;

    return fetch(`${HOST}/api/submissions`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        dispatch(receiveSubmitSubmission(res));
        return res;
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
