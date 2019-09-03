import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';

export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
});
