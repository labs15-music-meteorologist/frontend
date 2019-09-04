import axios from 'axios';

export const GET_USERS_FETCHING = 'GET_USERS_FETCHING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const url = process.env.REACT_APP_BACKEND_BASE_URL;

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_FETCHING
  });
  axios
    .get(`${url}v1/users`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      });
      console.log('ACTION', res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err
      });
    });
};

export const GET_LIKEDSONGS_FETCHING = 'GET_LIKEDSONGS_FETCHING';
export const GET_LIKEDSONGS_SUCCESS = 'GET_LIKEDSONGS_SUCCESS';
export const GET_LIKEDSONGS_FAILURE = 'GET_LIKEDSONGS_FAILURE';

export const getlikedSongs = () => dispatch => {
  dispatch({
    type: GET_LIKEDSONGS_FETCHING
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  };

  axios
    .get('https://api.spotify.com/v1/me/tracks', config)
    .then(res => {
      dispatch({
        type: GET_LIKEDSONGS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LIKEDSONGS_FAILURE,
        payload: err
      });
    });
};

export const GET_TRACK_INFO_FETCHING = 'GET_TRACK_INFO_FETCHING';
export const GET_TRACK_INFO_SUCCESS = 'GET_TRACK_INFO_SUCCESS';
export const GET_TRACK_INFO_FAILURE = 'GET_TRACK_INFO_FAILURE';

export const getTrackInfo = id => dispatch => {
  dispatch({
    type: GET_TRACK_INFO_FETCHING
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  };

  axios
    .get(`https://api.spotify.com/v1/audio-features/${id}`, config)
    .then(res => {
      dispatch({
        type: GET_TRACK_INFO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TRACK_INFO_FAILURE,
        payload: err.data
      });
    });
};

export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING';
export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS';
export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE';

export const getSpotifyAccountDetails = () => dispatch => {
  dispatch({
    type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  };

  axios
    .get(`https://api.spotify.com/v1/me`, config)
    .then(res => {
      if (!('product' in res.data)) {
        res.data.product = 'unprovided';
      }
      dispatch({
        type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE,
        payload: err
      });
    });
};

export const GET_CURRENT_SONG_FETCHING = 'GET_CURRENT_SONG_FETCHING';
export const GET_CURRENT_SONG_SUCCESS = 'GET_CURRENT_SONG_SUCCESS';
export const GET_CURRENT_SONG_FAILURE = 'GET_CURRENT_SONG_FAILURE';

export const getCurrentSong = () => dispatch => {
  dispatch({
    type: GET_CURRENT_SONG_FETCHING
  });
  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  };
  axios
    .get('https://api.spotify.com/v1/me/player/currently-playing', config)
    .then(res => {
      dispatch({
        type: GET_CURRENT_SONG_SUCCESS,
        payload: res.data.item
      });
      console.log('RESPONSE', res)
    })
    .catch(err => {
      dispatch({
        type: GET_CURRENT_SONG_FAILURE,
        payload: err.data
      });
    });
};
