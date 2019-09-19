import {
  CREATE_PLAYLIST_FETCHING,
  CREATE_PLAYLIST_SUCCESS,
  CREATE_PLAYLIST_FAILURE,
} from '../actions';

const initialState = {
  playlistId: null,
  fetchingPlaylist: false,
  playlistCreated: false,
  error: '',
};

const createPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST_FETCHING:
      return {
        ...state,
        fetchingPlaylist: true,
      };
    case CREATE_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlistId: action.payload.id,
        fetchingPlaylist: false,
        playlistCreated: true,
      };
    case CREATE_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingPlaylist: false,
      };
    default:
      return state;
  }
};
export default createPlaylistReducer;
