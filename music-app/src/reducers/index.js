import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
  likedSongsReducer
});
