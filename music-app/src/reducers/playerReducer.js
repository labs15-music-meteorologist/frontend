import {
  GET_CURRENTSONG_FETCHING,
  GET_CURRENTSONG_SUCCESS,
  GET_CURRENTSONG_FAILURE
} from '../actions';

const initialState = {
  token: '',
  deviceId: '',
  loggedIn: false,
  error: '',
  trackName: 'Track Name',
  artistName: 'Artist Name',
  albumName: 'Album Name',
  playing: false,
  position: 0,
  duration: 0
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
        item: action.payload.item,
        is_playing: action.payload.is_playing,
        progress_ms: action.payload.progress_ms,
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
