import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import currentSongReducer from './getCurrentSongReducer';
import queueReducer from './queueReducer';

export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer,
  queueReducer
});
