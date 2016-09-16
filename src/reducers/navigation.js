import {
  PUSH_ROUTE,
  POP_ROUTE,
  PREV_ROUTE,
  NEXT_ROUTE,
} from '../action-types';
import { home } from '../routes';

const initialState = {
  index: 0,
  routes: [
    home,
  ],
};

export default (state = initialState, action) => {
  const { index, routes } = state;

  switch (action.type) {
    case PUSH_ROUTE:
      return {
        ...state,
        routes: [
          ...routes,
          action.payload.route,
        ],
        index: index + 1,
      };
    case POP_ROUTE:
      return (
        index > 0
          ? {
            ...state,
            routes: routes.splice(0, routes.length - 1),
            index: index - 1,
          }
          : state
      );
    case PREV_ROUTE:
      return (
        index > 0
          ? {
            ...state,
            index: index - 1,
          }
          : state
      );
    case NEXT_ROUTE:
      return {
        ...state,
        index: index + 1,
      };
    default:
      return state;
  }
};
