import {
  CREATE_USER,
  UPDATE_USER,
} from '../action-types';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: {
      ...user
    },
  };
}

export function createUser() {
  return {
    type: CREATE_USER,
  };
}
