import { LOAD_USER_ERROR, LOAD_USER_SUCCESS, LOAD_USER_LOADING } from './../actions/user';

// intitia State for data
const initialState = {
  data: {},
  loading: true,
  error: '',
};

// reducer with actions and pay load, to , to set state
export default function signReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case LOAD_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
