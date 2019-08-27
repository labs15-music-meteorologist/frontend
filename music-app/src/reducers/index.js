import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
  likedSongsReducer,
  getTrackInfoReducer
});
