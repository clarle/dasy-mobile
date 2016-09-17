import {
  SELECT_SUBMISSION,
  SELECT_AGENCY,
} from '../action-types';

export function selectSubmissionType(type) {
  return {
    type: SELECT_SUBMISSION,
    payload: {
      type,
    },
  };
}

export function selectAgency(id) {
  return {
    type: SELECT_AGENCY,
    payload: {
      id,
    },
  };
}
