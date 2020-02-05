import SpotifyActionTypes from '../Spotify/spotify.types'
  
  const initialState = {
    status: ''
  };
  
  const removeTrackReducer = (state = initialState, action) => {
    switch (action.type) {
      case SpotifyActionTypes.REMOVE_TRACK_FETCHING:
        return {
          ...state,
        };
      case SpotifyActionTypes.REMOVE_TRACK_SUCCESS:
        return {
          ...state,
          status: action.payload,
        };
      case SpotifyActionTypes.REMOVE_TRACK_FAILURE:
        return {
          ...state,
          status: action.payload
        };
      default:
        return state;
    }
  };
  export default removeTrackReducer;
  