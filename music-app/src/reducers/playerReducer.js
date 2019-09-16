import {
  PUT_PLAYER_START,
  PUT_PLAYER_SUCCESS,
  PUT_PLAYER__FAILURE
} from '../actions';

const initialState = {
  playerReady: false
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
    default:
      return state;
  }
};

export default playerReducer;
