import {
  PUSH_ROUTE,
  POP_ROUTE,
  PREV_ROUTE,
  NEXT_ROUTE,
} from '../action-types';

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
