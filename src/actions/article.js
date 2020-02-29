import { WP_REST_HOST, WP_REST_PATH } from '../components/config';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const FAIL_ARTICLE = 'FAIL_ARTICLE';

export const fetchArticle = slug => (dispatch, getState) => {
  dispatch(requestArticle(slug));
  const state = getState();
  const article = state.articles && state.articles.data && state.articles.data[slug];
  if (article) {
    // article found in state.articles.items or state.favorites.items
    dispatch(receiveArticle(slug));
    // let the calling code know there's nothing to wait for.
    return Promise.resolve();
  } else {
    // fetch article data given the article id.
    // also return a promise to wait for.
    return fetch(`${WP_REST_HOST}/${WP_REST_PATH}/posts?slug=${slug}`, {
      //mode: "no-cors" // no-cors, cors, *same-origin
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(failArticle(slug));
        } else {
          dispatch(receiveArticle(slug, data[0]));
        }
      })
      .catch(e => dispatch(failArticle(slug)));
  }
};

const requestArticle = slug => {
  return {
    type: REQUEST_ARTICLE,
    slug,
  };
};

const receiveArticle = (slug, data) => {
  return {
    type: RECEIVE_ARTICLE,
    slug,
    data,
  };
};

const failArticle = slug => {
  return {
    type: FAIL_ARTICLE,
    slug,
  };
};
