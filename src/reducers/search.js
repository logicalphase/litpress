import { createSelector } from 'reselect';
import { REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS, FAIL_SEARCH_RESULTS } from '../actions/search.js';

export const search_results = (state = { searchTerms: null }, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
      return {
        ...state,
        searchTerms: action.searchTerms,
        data: null, // reset data
        failure: false,
        isFetching: true,
        loading: true,
      };
    case RECEIVE_SEARCH_RESULTS:
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
    case FAIL_SEARCH_RESULTS:
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

export const itemsSelector = state => state.search_results && state.search_results.data;

export const itemListSelector = createSelector(itemsSelector, data => {
  return data ? Object.keys(data).map(key => data[key]) : [];
});
