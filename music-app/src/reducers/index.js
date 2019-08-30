import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import getCurrentSongReducer from './getCurrentSongReducer'; 

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  getCurrentSongReducer
});
