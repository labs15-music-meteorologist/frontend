import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';
import trackInfoReducer from './trackInfoReducer';

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
  likedSongsReducer,
  trackInfoReducer,
});
