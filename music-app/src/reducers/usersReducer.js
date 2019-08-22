import {
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../actions';

const initialState = {
  users: [],
  fetchingUsers: false,
  fetchingUsersError: '',
};

const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: '',
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        fetchingUsers: false,
        fetchingUsersError: '',
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      };
    default:
      return state;
  }
};

export default getUsersReducer;
