import {
  CREATE_PLAYLIST_FETCHING,
  CREATE_PLAYLIST_SUCCESS,
  CREATE_PLAYLIST_FAILURE,
} from '../actions';

const initialState = {
  playlistId: '',
  error: '',
};

const createPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST_FETCHING:
      return {
        ...state,
      };
    case CREATE_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlistId: action.payload.id,
      };
    case CREATE_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createPlaylistReducer;
