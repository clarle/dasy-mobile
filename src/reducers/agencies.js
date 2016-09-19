import uniqBy from 'lodash/uniqBy';
import {
  REQUEST_AGENCIES,
  RECEIVE_AGENCIES,
  RESET_AGENCIES,
  SEARCH_AGENCIES,
} from '../action-types';

const initialState = {
  loading: false,
  more: false,
  data: [],
  search: '',
};

export default function agenciesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AGENCIES:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_AGENCIES:
      return {
        ...state,
        loading: false,
        more: action.payload.more,
        data: uniqBy(state.data.concat(action.payload.data), 'id'),
      };
    case SEARCH_AGENCIES:
      return {
        ...state,
        search: action.payload.search,
      };
    case RESET_AGENCIES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
