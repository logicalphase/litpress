import { createSelector } from 'reselect';
import { REQUEST_ARTICLES, RECEIVE_ARTICLES, FAIL_ARTICLES } from '../actions/articles.js';

export const articles = (state = { query: null }, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        query: action.query,
        data: null, // reset data
        failure: false,
        isFetching: true,
        loading: true,
      };
    case RECEIVE_ARTICLES:
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
    case FAIL_ARTICLES:
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

export const itemsSelector = state => state.articles && state.articles.data;

export const itemListSelector = createSelector(itemsSelector, data => {
  return data ? Object.keys(data).map(key => data[key]) : [];
});
