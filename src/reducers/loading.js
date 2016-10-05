import {
  START_LOADING,
  END_LOADING,
  START_UPLOADING_IMG,
  END_UPLOADING_IMG,
} from '../action-types';

const initialState = {
  loading: false,
  uploadingImg: false,
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
    case START_UPLOADING_IMG:
      return {
        ...state,
        uploadingImg: true,
      };
    case END_UPLOADING_IMG:
      return {
        ...state,
        uploadingImg: false,
      };
    default:
      return state;
  }
}
