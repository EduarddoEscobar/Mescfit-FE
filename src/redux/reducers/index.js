import { combineReducers } from 'redux';
import testimonialReducer from './testimonialReducer';
import headerReducer from './headerReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  testimonials: testimonialReducer,
  header: headerReducer,
  user: userReducer
});

export default rootReducer;
