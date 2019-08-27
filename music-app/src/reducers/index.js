import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';

export default combineReducers({
  getUsersReducer,
  apiRunningReducer,
<<<<<<< HEAD
  likedSongsReducer
=======
  likedSongsReducer,
  getTrackInfoReducer,
>>>>>>> 5a438ec828dae0036d349d0e2bfdce60d8717a6e
});
