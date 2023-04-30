import {
  CONFIRM_EMAIL,
  FETCH_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  SET_LOGGED_IN,
} from '../actions/userActions';

const initialState = {
  fetching: false,
  loggedIn: false,
  confirmed: false,
  user: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        testimonials: action.payload,
        fetching: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          roles: action.payload.roles,
        },
        loggedIn: true,
      };
    case CONFIRM_EMAIL:
      return {
        ...state,
        confirmed: true,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
