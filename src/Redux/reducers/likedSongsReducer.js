import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  song_id: '',
  fetchingLikedSongs: false,
  fetchingLikedSongsError: '',
  savingLike: false,
  putLikeError: ''
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_LIKEDSONGS_FETCHING:
      return {
        ...state,
        fetchingLikedSongs: true,
        fetchingLikedSongsError: ''
      };
    case SpotifyActionTypes.GET_LIKEDSONGS_SUCCESS:
      return {
        ...state,
        song_id: action.payload,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: ''
      };
    case SpotifyActionTypes.GET_LIKEDSONGS_FAILURE:
      return {
        ...state,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: action.payload
      };
    case SpotifyActionTypes.PUT_LIKEDSONG_START:
      return {
        ...state,
        savingLike: true
      };
    case SpotifyActionTypes.PUT_LIKEDSONG__SUCCESS:
      return {
        ...state,
        savingLike: false
      };
    case SpotifyActionTypes.PUT_LIKEDSONG__FAILURE:
      return {
        ...state,
        savingLike: false,
        putLikeError: action.payload
      };
    default:
      return state;
  }
};
export default likedSongsReducer;
