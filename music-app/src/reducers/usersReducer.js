import {
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING,
  GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS,
  GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE
} from '../actions';

const initialState = {
  users: [],
  fetchingUsers: false,
  fetchingUsersError: '',
  spotifyUser: [],
  fetchingSpotifyUser: false,
  fetchingSpotifyUserError: '',
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
    case GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING:
      return {
        ...state,
        fetchingSpotifyUser: true,
        fetchingSpotifyUserError: '',
      };
    case GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        spotifyUser: action.payload,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: '',
      };
    case GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: action.payload,
      };
    default:
      return state;
  }
};

export default getUsersReducer;
