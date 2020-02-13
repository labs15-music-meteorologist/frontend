import SpotifyActionTypes from '../Spotify/spotify.types'

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
    case SpotifyActionTypes.GET_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: '',
      };
    case SpotifyActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        fetchingUsers: false,
        fetchingUsersError: '',
      };
    case SpotifyActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING:
      return {
        ...state,
        fetchingSpotifyUser: true,
        fetchingSpotifyUserError: '',
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        spotifyUser: action.payload,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: '',
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: action.payload,
      };
    case SpotifyActionTypes.PERSIST_USER_FETCHING:
      return {
        ...state,
      };
    case SpotifyActionTypes.PERSIST_USER_SUCCESS:
      return {
        ...state,
      };
    case SpotifyActionTypes.PERSIST_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default getUsersReducer;
