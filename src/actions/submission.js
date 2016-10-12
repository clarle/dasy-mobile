import {
  SELECT_SUBMISSION_TYPE,
  SELECT_SUBMISSION_AGENCY,
  UPDATE_SUBMISSION_MESSAGE,
  UPDATE_SUBMISSION_IMG_URL,
  START_SUBMIT_SUBMISSION,
  RECEIVE_SUBMIT_SUBMISSION,
  RESET_SUBMISSION,
} from '../action-types';
import { HOST } from '../constants';
import { addAlert } from './alerts';
import { startLoading, endLoading, startUploadingImg, endUploadingImg } from './loading';
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

export function updateSubmissionImgUrl(imgUrl) {
  return {
    type: UPDATE_SUBMISSION_IMG_URL,
    payload: {
      imgUrl,
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

export function uploadSubmissionImg(img) {
  return dispatch => {
    dispatch(startLoading());
    dispatch(startUploadingImg());

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const form = new FormData();
    form.append('photos', {
      uri: img.uri,
      type: 'image/jpeg',
      name: `${new Date().getTime()}.jpg`,
    });

    return fetch(`${HOST}/api/uploads`, {
      method: 'POST',
      headers,
      body: form,
    })
      .then(res => res.json())
      .then(res => {
        dispatch(endLoading());
        dispatch(endUploadingImg());
        return dispatch(updateSubmissionImgUrl(res.imgUrl));
      })
      .catch(err => {
        captureException(err);
        dispatch(endLoading());
        dispatch(endUploadingImg());
        dispatch(addAlert({
          message: err.message,
          type: 'error',
        }));
      });
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

    if (!data.user.id) {
      delete data.user.id;
    }

    if (!data.user.tel) {
      delete data.user.tel;
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
      .then(res => {
        dispatch(endLoading());
        if (res.ok) {
          return dispatch(receiveSubmitSubmission());
        }
        return res.json()
          .then(response => {
            let msg;

            try {
              msg = response.error.message;
            } catch (e) {
              msg = res.statusText || 'Unknown Error';
            }

            throw new Error(msg);
          });
      })
      .catch(err => {
        captureException(err);
        dispatch(addAlert({
          message: err.message,
          type: 'error',
        }));
        throw err;
      });
  };
}
