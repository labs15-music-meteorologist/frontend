import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import currentSongReducer from './getCurrentSongReducer';
export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer
});
