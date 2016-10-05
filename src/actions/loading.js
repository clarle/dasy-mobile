import {
  START_LOADING,
  END_LOADING,
  START_UPLOADING_IMG,
  END_UPLOADING_IMG,
} from '../action-types';

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function endLoading() {
  return {
    type: END_LOADING,
  };
}

export function startUploadingImg() {
  return {
    type: START_UPLOADING_IMG,
  };
}

export function endUploadingImg() {
  return {
    type: END_UPLOADING_IMG,
  };
}
