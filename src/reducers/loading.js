import {
  START_LOADING,
  END_LOADING,
} from '../action-types';

const initialState = {
  loading: false,
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
