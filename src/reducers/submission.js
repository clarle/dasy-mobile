import {
  SELECT_SUBMISSION_TYPE,
  SELECT_SUBMISSION_AGENCY,
  UPDATE_SUBMISSION_MESSAGE,
  RESET_SUBMISSION,
} from '../action-types';

const initialState = {
  type: 'comment',
  agencyId: null,
  message: '',
  imgUrl: '',
};

export default function submissionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SUBMISSION_TYPE:
      return {
        ...state,
        type: action.payload.type,
      };
    case SELECT_SUBMISSION_AGENCY:
      return {
        ...state,
        agencyId: action.payload.id,
      };
    case UPDATE_SUBMISSION_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case RESET_SUBMISSION:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
