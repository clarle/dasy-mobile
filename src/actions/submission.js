import {
  SELECT_SUBMISSION,
} from '../action-types';

export function selectSubmissionType(type) {
  return {
    type: SELECT_SUBMISSION,
    payload: {
      type,
    },
  };
}
