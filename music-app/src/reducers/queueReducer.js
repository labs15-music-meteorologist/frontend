import {
  POST_DS_SONGS_FETCHING,
  POST_DS_SONGS_SUCCESS,
  POST_DS_SONGS_FAILURE,
  GET_SEVERAL_TRACKS_FETCHING,
  GET_SEVERAL_TRACKS_SUCCESS,
  GET_SEVERAL_TRACKS_FAILURE,
} from '../actions';

const initialState = {
  ds_songs: [],
  postingingSongError: '',
  several_tracks: [],
  fetchingError: '',
};

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DS_SONGS_FETCHING:
      return {
        ...state,
        postingingSongError: '',
      };
    case POST_DS_SONGS_SUCCESS:
      return {
        ...state,
        ds_songs: action.payload,
        postingingSongError: '',
      };
    case POST_DS_SONGS_FAILURE:
      return {
        ...state,
        postingingSongError: action.payload,
      };

    case GET_SEVERAL_TRACKS_FETCHING:
      return {
        ...state,
        fetchingError: '',
      };
    case GET_SEVERAL_TRACKS_SUCCESS:
      return {
        ...state,
        several_tracks: action.payload,
        fetchingError: '',
      };
    case GET_SEVERAL_TRACKS_FAILURE:
      return {
        ...state,
        fetchingError: action.payload,
      };

    default:
      return state;
  }
};

export default queueReducer;
