import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  currentUser: {},
  currentUserFetching: false,
  error: '',
};

const getCurrentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_LOGGED_IN_FETCHING:
      return {
        ...state,
        currentUserFetching: true,
      };
    case SpotifyActionTypes.GET_LOGGED_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        currentUserFetching: false,
      };
    case SpotifyActionTypes.GET_LOGGED_IN_FAILURE:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default getCurrentUserReducer;
