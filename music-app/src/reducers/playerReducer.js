import {
  GET_CURRENTSONG_FETCHING,
  GET_CURRENTSONG_SUCCESS,
  GET_CURRENTSONG_FAILURE
} from '../actions';

const initialState = {
  song: [],
  fetchingCurrentSong: false,
  error: ''
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENTSONG_FETCHING:
      return {
        ...state,
        fetchingCurrentSong: true,
        error: ''
      };
    case GET_CURRENTSONG_SUCCESS:
      return {
        ...state,
        song: action.payload,
        fetchingCurrentSong: false,
        fetchingCurrentSongError: ''
      };
    case GET_CURRENTSONG_FAILURE:
      return {
        ...state,
        fetchingCurrentSong: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default playerReducer;
