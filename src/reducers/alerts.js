import find from 'lodash/find';
import without from 'lodash/without';
import {
  ADD_ALERT,
  DISMISS_ALERT,
  DISMISS_ALL_ALERTS,
} from '../action-types';

const initialState = {
  alerts: [],
};

export default function alertsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alerts: state.alerts.concat([action.payload]),
      };
    case DISMISS_ALERT:
      return {
        ...state,
        alerts: without(state.alerts, find(state.alerts, { id: action.payload.id })),
      };
    case DISMISS_ALL_ALERTS:
      return {
        ...state,
        alerts: [],
      };
    default:
      return state;
  }
}
