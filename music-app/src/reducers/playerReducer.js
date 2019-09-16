import {
  PUT_PLAYER_START,
  PUT_PLAYER_SUCCESS,
  PUT_PLAYER__FAILURE,
  LAUNCH_QUEUE_START,
  LAUNCH_QUEUE_SUCCESS,
  LAUNCH_QUEUE__FAILURE
} from '../actions';

const initialState = {
  playerReady: false,
  error: '',
  songsReady: false
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_PLAYER_START:
      return {
        ...state,
        error: ''
      };
    case PUT_PLAYER_SUCCESS:
      return {
        ...state,
        playerReady: true,
        error: ''
      };
    case PUT_PLAYER__FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case LAUNCH_QUEUE_START:
      return {
        ...state,
        error: ''
      };
    case LAUNCH_QUEUE_SUCCESS:
      return {
        ...state,
        songsReady: true,
        error: ''
      };
    case LAUNCH_QUEUE__FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
