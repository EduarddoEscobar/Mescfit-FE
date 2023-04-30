import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../actions/testimonialActions';

import { testimonials } from '../../data/Testimonials';

const initialState = {
  testimonials: [...testimonials],
  spotlightTestimonial: testimonials[0],
  fetching: false,
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
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
