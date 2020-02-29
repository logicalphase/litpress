import { WP_REST_HOST, WP_REST_PATH } from '../components/config';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const FAIL_CATEGORIES = 'FAIL_CATEGORIES';

export const fetchCategories = categoryId => (dispatch, getState) => {
  //let categoryId = 1;
  // Check to see if the cached results are from the same category.
  // This is useful for avoiding a network request.
  if (shouldFetchCategories(getState(), categoryId)) {
    dispatch(requestCategories(categoryId));
    if (categoryId) {
      fetch(`${WP_REST_HOST}/${WP_REST_PATH}/posts?categories=${categoryId}`, {})
        .then(res => res.json())
        .then(data => dispatch(receiveCategories(categoryId, data)))
        .catch(() => dispatch(failCategories(categoryId)));
    } else {
      // category is empty, clear the results
      dispatch(receiveCategories(categoryId, []));
    }
  }
};

const shouldFetchCategories = (state, categoryId) => {
  return state.categories.failure || (state.categories.category !== categoryId && !state.categories.isFetching);
};

const requestCategories = categoryId => {
  return {
    type: REQUEST_CATEGORIES,
    categoryId,
  };
};

const receiveCategories = (categoryId, data) => {
  return {
    type: RECEIVE_CATEGORIES,
    categoryId,
    data,
  };
};

const failCategories = categoryId => {
  return {
    type: FAIL_CATEGORIES,
    categoryId,
  };
};

// Filters
