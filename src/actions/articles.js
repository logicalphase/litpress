import { WP_REST_HOST, WP_REST_PATH } from '../components/config';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = query => (dispatch, getState) => {
  // Check to see if the cached results are from the same query.
  // This is useful for avoiding a network request.
  if (shouldFetchArticles(getState(), query)) {
    dispatch(requestArticles(query));
    if (query) {
      fetch(`${WP_REST_HOST}/${WP_REST_PATH}/${query}/?per_page=5`, {})
        .then(res => res.json())
        .then(data => dispatch(receiveArticles(query, data)))
        .catch(() => dispatch(failArticles(query)));
    } else {
      // query is empty, clear the results
      dispatch(receiveArticles(query, []));
    }
  }
};

const shouldFetchArticles = (state, query) => {
  return state.articles.failure || (state.articles.query !== query && !state.articles.isFetching);
};

const requestArticles = query => {
  return {
    type: REQUEST_ARTICLES,
    query,
  };
};

const receiveArticles = (query, data) => {
  return {
    type: RECEIVE_ARTICLES,
    query,
    data,
  };
};

const failArticles = query => {
  return {
    type: FAIL_ARTICLES,
    query,
  };
};

// Filters
