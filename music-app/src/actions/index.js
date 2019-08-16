import axios from 'axios';

export const GET_USERS_FETCHING = 'GET_USERS_FETCHING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const url = process.env.REACT_APP_BACKEND_BASE_URL;

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_FETCHING,
  });
  return axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res,
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err,
      });
    });
};

export const GET_WELCOME_FETCHING = 'GET_WELCOME_FETCHING'; 
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS'; 
export const GET_WELCOME_FAILURE = 'GET_WELCOME_FAILURE'; 

export const getWelcome = () => dispatch => {
  dispatch({
    type: GET_WELCOME_FETCHING,
  });
  return axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_WELCOME_SUCCESS,
        payload: res,
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: GET_WELCOME_FAILURE,
        payload: err,
      });
    });
};
