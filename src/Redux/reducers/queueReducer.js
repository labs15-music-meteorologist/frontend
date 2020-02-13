import SpotifyActionTypes from "../Spotify/spotify.types";
import DSActionTypes from "../DS/ds.types";

const initialState = {
  ds_songs: [],
  postingingSongError: "",
  several_tracks: [],
  fetchingError: "",
  isFetchingDSSongs: "",
  isFetchingSuccessful: ""
};

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case DSActionTypes.POST_DS_SONGS_FETCHING:
      return {
        ...state,
        isFetchingDSSongs: true,
        isFetchingSuccessful: false,
        postingingSongError: ""
      };
    case DSActionTypes.POST_DS_SONGS_SUCCESS:
      return {
        ...state,
        ds_songs: action.payload,
        isFetchingDSSongs: false,
        isFetchingSuccessful: true,
        postingingSongError: ""
      };
    case DSActionTypes.POST_DS_SONGS_FAILURE:
      return {
        ...state,
        isFetchingDSSongs: false,
        isFetchingSuccessful: false,
        postingingSongError: action.payload
      };

    case SpotifyActionTypes.GET_SEVERAL_TRACKS_FETCHING:
      return {
        ...state,
        fetchingError: ""
      };
    case SpotifyActionTypes.GET_SEVERAL_TRACKS_SUCCESS:
      return {
        ...state,
        several_tracks: action.payload,
        fetchingError: ""
      };
    case SpotifyActionTypes.GET_SEVERAL_TRACKS_FAILURE:
      return {
        ...state,
        fetchingError: action.payload
      };

    default:
      return state;
  }
};

export default queueReducer;
