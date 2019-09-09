import {
  GET_LIKEDSONGS_FETCHING,
  GET_LIKEDSONGS_SUCCESS,
  GET_LIKEDSONGS_FAILURE,
} from '../actions';

const initialState = {
  songs: [],
  fetchingLikedSongs: false,
  fetchingLikedSongsError: '',
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKEDSONGS_FETCHING:
      return {
        ...state,
        fetchingLikedSongs: true,
        fetchingLikedSongsError: '',
      };
    case GET_LIKEDSONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload.items,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: '',
      };
    case GET_LIKEDSONGS_FAILURE:
      return {
        ...state,
        fetchingLikedSongs: false,
        fetchingLikedSongsError: action.payload,
      };
    default:
      return state;
  }
};
export default likedSongsReducer;
