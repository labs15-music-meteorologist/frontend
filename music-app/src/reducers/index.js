import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import currentSongReducer from './getCurrentSongReducer';
import queueReducer from './queueReducer';
import createPlaylistReducer from './createPlaylistReducer';
import getPlaylistReducer from './getPlaylistReducer';
import removeTrackReducer from './removeTrackReducer'; 

export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer,
  queueReducer,
  createPlaylistReducer,
  getPlaylistReducer,
  removeTrackReducer
});
