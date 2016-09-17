import {
  SELECT_SUBMISSION,
  SELECT_AGENCY,
} from '../action-types';

const initialState = {
  type: 'comment',
  agencyId: null,
};

export default function submissionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SUBMISSION:
      return {
        ...state,
        type: action.payload.type,
      };
    case SELECT_AGENCY:
      return {
        ...state,
        agencyId: action.payload.id,
      };
    default:
      return state;
  }
}
