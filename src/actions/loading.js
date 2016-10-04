import {
  START_LOADING,
  END_LOADING,
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
