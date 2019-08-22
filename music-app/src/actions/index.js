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
    .get(url)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err
      });
    });
};

export const GET_WELCOME_FETCHING = 'GET_WELCOME_FETCHING';
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS';
export const GET_WELCOME_FAILURE = 'GET_WELCOME_FAILURE';

export const getWelcome = () => dispatch => {
  dispatch({
    type: GET_WELCOME_FETCHING
  });
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_WELCOME_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_WELCOME_FAILURE,
        payload: err
      });
    });
};

export const GET_LIKEDSONGS_FETCHING = 'GET_LIKEDSONGS_FETCHING';
export const GET_LIKEDSONGS_SUCCESS = 'GET_LIKEDSONGS_SUCCESS';
export const GET_LIKEDSONGS_FAILURE = 'GET_LIKEDSONGS_FAILURE';

export const getlikedSongs = token => dispatch => {
  dispatch({
    type: GET_LIKEDSONGS_FETCHING
  });

  var config = {
    headers: { Authorization: 'Bearer ' + token }
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

export const GET_CURRENTSONG_FETCHING = 'GET_CURRENTSONG_FETCHING';
export const GET_CURRENTSONG_SUCCESS = 'GET_CURRENTSONG_SUCCESS';
export const GET_CURRENTSONG_FAILURE = 'GET_CURRENTSONG_FAILURE';

export const getCurrentSong = token => dispatch => {
  dispatch({
    type: GET_CURRENTSONG_FETCHING
  });

  var config = {
    headers: { Authorization: 'Bearer ' + token }
  };

  axios
    .get('https://api.spotify.com/v1/me/player/currently-playing', config)
    .then(res => {
      dispatch({
        type: GET_CURRENTSONG_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CURRENTSONG_FAILURE,
        payload: err
      });
    });
};
