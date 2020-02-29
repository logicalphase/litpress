import { WP_REST_HOST, WP_REST_PATH } from '../components/config';

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const FAIL_SEARCH_RESULTS = 'FAIL_SEARCH_RESULTS';

export const fetchSearchResults = searchTerms => (dispatch, getState) => {
  // Check to see if the cached results are from the same query.
  // This is useful for avoiding a network request.
  if (shouldFetchSearchResults(getState(), searchTerms)) {
    dispatch(requestSearchResults(searchTerms));
    
    if (searchTerms) {
      fetch(`${WP_REST_HOST}/${WP_REST_PATH}/posts?search=${searchTerms}`, {})
        .then(res => res.json())
        .then(data => dispatch(receiveSearchResults(searchTerms, data)))
        .catch(() => dispatch(failSearchResults(searchTerms)));
    } else {
      // query is empty, clear the results
      dispatch(receiveSearchResults(searchTerms, []));
    }
  }
};

const shouldFetchSearchResults = (state, searchTerms) => {
  return state.search_results.failure || (state.search_results.searchTerms !== searchTerms && !state.search_results.isFetching);
};

const requestSearchResults = searchTerms => {
  return {
    type: REQUEST_SEARCH_RESULTS,
    searchTerms,
  };
};

const receiveSearchResults = (searchTerms, data) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchTerms,
    data,
  };
};

const failSearchResults = searchTerms => {
  return {
    type: FAIL_SEARCH_RESULTS,
    searchTerms,
  };
};

// Filters
