import {
  GET_LIKEDSONGS_FETCHING,
  GET_LIKEDSONGS_SUCCESS,
  GET_LIKEDSONGS_FAILURE,
  PUT_LIKEDSONG_START,
  PUT_LIKEDSONG__SUCCESS,
  PUT_LIKEDSONG__FAILURE
} from '../actions';

const initialState = {
  song_id: '',
  fetchingLikedSongs: false,
  fetchingLikedSongsError: '',
  savingLike: false,
  putLikeError: ''
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKEDSONGS_FETCHING:
      return {
        ...state,
        fetchingLikedSongs: true,
        fetchingLikedSongsError: ''
      };
    case GET_LIKEDSONGS_SUCCESS:
      return {
        ...state,
        song_id: action.payload,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: ''
      };
    case GET_LIKEDSONGS_FAILURE:
      return {
        ...state,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: action.payload
      };
    case PUT_LIKEDSONG_START:
      return {
        ...state,
        savingLike: true
      };
    case PUT_LIKEDSONG__SUCCESS:
      return {
        ...state,
        savingLike: false
      };
    case PUT_LIKEDSONG__FAILURE:
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
