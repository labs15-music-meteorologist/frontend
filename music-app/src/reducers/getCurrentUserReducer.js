import {
  GET_LOGGED_IN_FETCHING,
  GET_LOGGED_IN_SUCCESS,
  GET_LOGGED_IN_FAILURE,
} from '../actions';

const initialState = {
  currentUser: [],
  currentUserFetching: false,
  error: '',
};

const getCurrentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGED_IN_FETCHING:
      return {
        ...state,
        currentUserFetching: true,
      };
    case GET_LOGGED_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        currentUserFetching: false,
      };
    case GET_LOGGED_IN_FAILURE:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default getCurrentUserReducer;
