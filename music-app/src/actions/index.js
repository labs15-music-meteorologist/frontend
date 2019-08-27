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
<<<<<<< HEAD
        payload: res
=======
        payload: res.data,
>>>>>>> 5a438ec828dae0036d349d0e2bfdce60d8717a6e
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

export const getlikedSongs = () => dispatch => {
  dispatch({
    type: GET_LIKEDSONGS_FETCHING
  });

  var config = {
<<<<<<< HEAD
    headers: { Authorization: 'Bearer ' + token }
=======
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
>>>>>>> 5a438ec828dae0036d349d0e2bfdce60d8717a6e
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
    type: GET_TRACK_INFO_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  axios
    .get(`https://api.spotify.com/v1/audio-features/${id}`, config)
    .then(res => {
      dispatch({
        type: GET_TRACK_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TRACK_INFO_FAILURE,
        payload: err,
      });
    });
};
