import { combineReducers } from 'redux';

import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import currentSongReducer from './getCurrentSongReducer';
import queueReducer from './queueReducer';
import createPlaylistReducer from './createPlaylistReducer';
import getPlaylistReducer from './getPlaylistReducer';
import getCurrentUserReducer from './getCurrentUserReducer';
import addToPlaylistReducer from './addToPlaylistReducer';
import removeTrackReducer from './removeTrackReducer';

export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer,
  queueReducer,
  createPlaylistReducer,
  getPlaylistReducer,
  getCurrentUserReducer,
  addToPlaylistReducer,
  removeTrackReducer,
});
