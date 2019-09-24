import {
    REMOVE_TRACK_FETCHING,
    REMOVE_TRACK_SUCCESS,
    REMOVE_TRACK_FAILURE,
  } from '../actions';
  
  const initialState = {
    status: ''
  };
  
  const removeTrackReducer = (state = initialState, action) => {
    switch (action.type) {
      case REMOVE_TRACK_FETCHING:
        return {
          ...state,
        };
      case REMOVE_TRACK_SUCCESS:
        return {
          ...state,
          status: action.payload,
        };
      case REMOVE_TRACK_FAILURE:
        return {
          ...state,
          status: action.payload
        };
      default:
        return state;
    }
  };
  export default removeTrackReducer;
  