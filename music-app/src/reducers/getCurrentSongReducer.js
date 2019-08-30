import {
    GET_CURRENT_SONG_FETCHING,
    GET_CURRENT_SONG_SUCCESS,
    GET_CURRENT_SONG_FAILURE,
  } from '../actions';
  
  const initialState = {
    id: '',
    fetchingSongError: ''
  };
  
  const getCurrentSongReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WELCOME_FETCHING:
        return {
          ...state,
        };
      case GET_WELCOME_SUCCESS:
        return {
          ...state,
          id: action.payload,
          fetchingSongError: '',
        };
      case GET_WELCOME_FAILURE:
        return {
          ...state,
          fetchingSongError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getCurrentSongReducer;
  