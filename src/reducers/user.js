import {
  CREATE_USER,
  UPDATE_USER,
} from '../action-types';

const initialState = {
  name: '',
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  id: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
