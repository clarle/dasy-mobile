import { SELECT_SUBMISSION } from '../action-types';

const initialState = {
  type: 'comment',
};

export default function submissionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SUBMISSION:
      return Object.assign({}, state, {
        type: action.payload.type,
      });
    default:
      return state;
  }
}
