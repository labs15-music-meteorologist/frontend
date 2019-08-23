import {
  GET_TRACK_INFO_FETCHING,
  GET_TRACK_INFO_SUCCESS,
  GET_TRACK_INFO_FAILURE,
} from '../actions';

const initialState = {
  audio_features: [],
  fetchingAudioFeatures: false,
  fetchingAudioFeaturesError: '',
};

const getTrackInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACK_INFO_FETCHING:
      return {
        ...state,
        fetchingAudioFeatures: true,
        fetchingAudioFeaturesError: '',
      };
    case GET_TRACK_INFO_SUCCESS:
      return {
        ...state,
        audio_features: action.payload,
        fetchingAudioFeatures: false,
        fetchingAudioFeaturesError: '',
      };
    case GET_TRACK_INFO_FAILURE:
      return {
        ...state,
        fetchingAudioFeatures: false,
        fetchingAudioFeaturesError: action.payload,
      };
    default:
      return state;
  }
};

export default getTrackInfoReducer;
