import {
  PUSH_ROUTE,
  POP_ROUTE,
  PREV_ROUTE,
  NEXT_ROUTE,
} from '../action-types';

/**
 * Add new route.
 * @param  {Object} route
 * @param  {String} route.key
 * @param  {Object} route.component
 * @param  {String} route.title
 */
export function push(route) {
  return {
    type: PUSH_ROUTE,
    payload: {
      route,
    },
  };
}

export function pop() {
  return {
    type: POP_ROUTE,
  };
}

export function prev() {
  return {
    type: PREV_ROUTE,
  };
}

export function next() {
  return {
    type: NEXT_ROUTE,
  };
}
