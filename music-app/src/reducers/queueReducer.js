import {
  POST_DS_SONGS_FETCHING,
  POST_DS_SONGS_SUCCESS,
  POST_DS_SONGS_FAILURE,
  GET_TRACK_ID_FETCHING,
  GET_TRACK_ID_SUCCESS,
  GET_TRACK_ID_FAILURE
} from '../actions';

const initialState = {
  ds_songs: [],
  postingingSongError: '',
  first_track: [],
  fetchingError: ''
};

export const postDSSong = (state = initialState, action) => {
  switch (action.type) {
    case POST_DS_SONGS_FETCHING:
      return {
        ...state,
        postingingSongError: ''
      };
    case POST_DS_SONGS_SUCCESS:
      return {
        ...state,
        ds_songs: action.payload,
        postingingSongError: ''
      };
    case POST_DS_SONGS_FAILURE:
      return {
        ...state,
        postingingSongError: action.payload
      };
    default:
      return state;
  }
};

export const getTrackByID = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACK_ID_FETCHING:
      return {
        ...state,
        fetchingError: ''
      };
    case GET_TRACK_ID_SUCCESS:
      return {
        ...state,
        first_track: action.payload,
        fetchingError: ''
      };
    case GET_TRACK_ID_FAILURE:
      return {
        ...state,
        fetchingError: action.payload
      };
    default:
      return state;
  }
};
