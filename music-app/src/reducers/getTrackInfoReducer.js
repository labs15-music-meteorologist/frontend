import {
  GET_TRACK_INFO_FETCHING,
  GET_TRACK_INFO_SUCCESS,
  GET_TRACK_INFO_FAILURE
} from '../actions';

const initialState = {};

const getTrackInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACK_INFO_FETCHING:
      return {
        ...state,
        ...action.payload
      };
    case GET_TRACK_INFO_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_TRACK_INFO_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getTrackInfoReducer;
