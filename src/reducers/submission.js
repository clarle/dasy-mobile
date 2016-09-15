import { SELECT_SUBMISSION } from '../action-types';

export default function submissionReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_SUBMISSION:
      return Object.assign({}, state, {
        type: action.type,
      });
    default:
      return state;
  }
}
