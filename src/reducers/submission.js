import {
  SELECT_SUBMISSION_TYPE,
  SELECT_SUBMISSION_AGENCY,
  UPDATE_SUBMISSION_MESSAGE,
  UPDATE_SUBMISSION_IMG_URL,
  RECEIVE_SUBMIT_SUBMISSION,
  RESET_SUBMISSION,
} from '../action-types';
import { SUBMISSION_TYPES } from '../constants';

const initialState = {
  type: SUBMISSION_TYPES[0].key,
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
    case UPDATE_SUBMISSION_IMG_URL:
      return {
        ...state,
        imgUrl: action.payload.imgUrl,
      };
    case RESET_SUBMISSION:
    case RECEIVE_SUBMIT_SUBMISSION:
      return initialState;
    default:
      return state;
  }
}
