import axiosWithEncode from '../../utils/axiosWithEncode';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER = 'UPDATE_USER';
export const CONFIRM_EMAIL = 'CONFIRM_EMAIL';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const handleLogin = (credentials) => async (dispatch) => {
  dispatch({
    type: FETCH_START,
  });
  axiosWithEncode(credentials)
    .post('/auth/login')
    .then((r) => {
      const { refresh_token, access_token } = r.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: r.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const handleRegister = (credentials) => async (dispatch) => {
  dispatch({
    type: FETCH_START,
  });
  axios
    .post(`${process.env.REACT_APP_API_URI}/auth/register`, credentials)
    .then((r) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: r.data,
      });
      const { refresh_token, access_token } = r.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    })
    .catch((err) => {
      dispatch({
        type: FETCH_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const updateUser = (userId, updatedFields) => async (dispatch) => {
  dispatch({
    type: FETCH_START,
  });

  axiosWithAuth(localStorage.getItem('access_token'))
    .put(`${process.env.REACT_APP_API_URI}/auth/users`, updatedFields)
    .then((r) =>
      dispatch({
        type: UPDATE_USER,
        payload: r.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: FETCH_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const getUser = () => async (dispatch) => {
  dispatch({
    type: FETCH_START,
  });
    axiosWithAuth(localStorage.getItem('access_token'))
        .get(`${process.env.REACT_APP_API_URI}/auth/users`)
        .then((r) =>
            dispatch({
                type: UPDATE_USER,
                payload: r.data,
            })
        )
        .catch((err) => {
            dispatch({
                type: FETCH_FAIL,
                payload: err.response.data.message,
            });
            console.log(err);
        });
};

export const confirmEmail = () => async (dispatch) => {
  dispatch({
    type: FETCH_START,
  });
  // TODO: Once this part of the backend is done complete this function
};

export const setLoggedIn = (loggedIn) => async (dispatch) => {
  dispatch({
    type: SET_LOGGED_IN,
    payload: loggedIn,
  });
};

export const handleLogout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
