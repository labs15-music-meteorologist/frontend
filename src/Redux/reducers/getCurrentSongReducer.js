import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  item: [],
  imageUrl: [],
  fetchingSongError: '',
};

const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_CURRENT_SONG_FETCHING:
      return {
        ...state,
        fetchingSongError: '',
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS:
      return {
        ...state,
        item: action.payload,
        // imageUrl: action.payload.album.images,
        fetchingSongError: '',
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_FAILURE:
      return {
        ...state,
        fetchingSongError: action.payload,
      };
    default:
      return state;
  }
};

export default currentSongReducer;
