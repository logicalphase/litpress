import { createSelector } from 'reselect';
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, FAIL_CATEGORIES } from '../actions/categories.js';

export const categories = (state = { categoryId: null }, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        categoryId: action.categoryId,
        data: null, // reset data
        failure: false,
        isFetching: true,
        loading: true,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        data: action.data.reduce((obj, data) => {
          obj[data.slug] = data;
          return obj;
        }, {}),
        failure: false,
        isFetching: false,
        loading: false,
      };
    case FAIL_CATEGORIES:
      return {
        ...state,
        data: null,
        failure: true,
        isFetching: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const itemsSelector = state => state.categories && state.categories.data;

export const itemListSelector = createSelector(itemsSelector, data => {
  return data ? Object.keys(data).map(key => data[key]) : [];
});
