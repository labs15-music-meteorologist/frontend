import { combineReducers } from 'redux';
import getUsersReducer from './usersReducer';
import likedSongsReducer from './likedSongsReducer';
import getTrackInfoReducer from './getTrackInfoReducer';
import currentSongReducer from './getCurrentSongReducer';
import queueReducer from './queueReducer';
import createPlaylistReducer from './createPlaylistReducer';
import getPlaylistReducer from './getPlaylistReducer';
<<<<<<< HEAD
import addToPlaylistReducer from './addToPlaylistReducer';
=======
import removeTrackReducer from './removeTrackReducer'; 
>>>>>>> 7789d01915597e0ac4a0ce964ced89a842203ec2

export default combineReducers({
  getUsersReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer,
  queueReducer,
  createPlaylistReducer,
  getPlaylistReducer,
<<<<<<< HEAD
  addToPlaylistReducer,
=======
  removeTrackReducer
>>>>>>> 7789d01915597e0ac4a0ce964ced89a842203ec2
});
