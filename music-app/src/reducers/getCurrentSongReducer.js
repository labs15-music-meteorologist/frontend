import {
  GET_CURRENT_SONG_FETCHING,
  GET_CURRENT_SONG_SUCCESS,
  GET_CURRENT_SONG_FAILURE,
} from '../actions';

const initialState = {
  item: [],
  imageUrl: [],
  fetchingSongError: '',
};

const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_SONG_FETCHING:
      return {
        ...state,
        fetchingSongError: '',
      };
    case GET_CURRENT_SONG_SUCCESS:
      return {
        ...state,
        item: action.payload,
        // imageUrl: action.payload.album.images,
        fetchingSongError: '',
      };
    case GET_CURRENT_SONG_FAILURE:
      return {
        ...state,
        fetchingSongError: action.payload,
      };
    default:
      return state;
  }
};

export default currentSongReducer;
