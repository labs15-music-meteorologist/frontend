import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  addedTo: false,
  isFetching: false,
  error: '',
};

const addToPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.ADD_TO_PLAYLIST_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case SpotifyActionTypes.ADD_TO_PLAYLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addedTo: true,
      };
    case SpotifyActionTypes.ADD_TO_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addToPlaylistReducer;
