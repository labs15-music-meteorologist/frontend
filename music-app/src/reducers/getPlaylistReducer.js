import {
  GET_PLAYLIST_FETCHING,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAILURE,
} from '../actions';

const initialState = {
  playlistId: '',
  error: ''
};

const getPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLIST_FETCHING:
      return {
        ...state,
      };
    case GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlist: action.payload,
      };
    case GET_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default getPlaylistReducer;
