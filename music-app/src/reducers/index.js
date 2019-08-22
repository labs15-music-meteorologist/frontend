import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
  likedSongsReducer,
  playerReducer
});
