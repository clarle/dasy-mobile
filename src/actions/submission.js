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
import { startLoading, endLoading } from './loading';
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
    dispatch(startLoading());
    dispatch(startSubmitSubmission());

    const { submission, user } = getState();
    const data = {
      submission,
      user,
    };

    if (!data.submission.imgUrl) {
      delete data.submission.imgUrl;
    }

    const body = JSON.stringify(data);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Length', body.length.toString());

    return fetch(`${HOST}/api/submissions/guest`, {
      method: 'POST',
      headers,
      body,
    })
      .then(() => {
        dispatch(endLoading());
        return dispatch(receiveSubmitSubmission());
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
