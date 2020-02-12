import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  playlistTracks: {},
  error: '',
};

const getPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_PLAYLIST_FETCHING:
      return {
        ...state,
      };
    case SpotifyActionTypes.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlistTracks: action.payload,
      };
    case SpotifyActionTypes.GET_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getPlaylistReducer;
