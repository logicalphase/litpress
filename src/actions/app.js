export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';
export const SET_ANNOUNCER_LABEL = 'SET_ANNOUNCER_LABEL';
export const CLEAR_ANNOUNCER_LABEL = 'CLEAR_ANNOUNCER_LABEL';

export const navigate = location => dispatch => {
  // Extract the page name from path.
  // Any other info you might want to extract from the path (like page type),
  // you can do here.
  const pathname = location.pathname;
  const parts = pathname.slice(1).split('/');
  const page = parts[0] || 'home';
  // post id is in the path: /article/{articleSlug}
  const articleSlug = parts[1];
  const categoryId = parts[1];
  const searchTerms = parts[1];

  //let query = 'Article';
  let query = 'posts';

  dispatch(loadPage(page, query, articleSlug, categoryId, searchTerms));
  dispatch(updateDrawerState(false));
};

const loadPage = (page, query, articleSlug, categoryId, searchTerms) => async (dispatch, getState) => {
  let module;
  switch (page) {
    case 'home':
      break;
    case 'blog':
      module = await import('../components/lp-blog');
      dispatch(module.fetchArticles(query));
      break;
    case 'category':
      module = await import('../components/lp-category');
      dispatch(module.fetchCategories(categoryId));
      break;
    case 'search':
      module = await import('../components/lp-search');
      dispatch(module.fetchSearchResults(searchTerms));
      break;
    case 'article':
      module = await import('../components/lp-article');
      await dispatch(module.fetchArticle(articleSlug));
      if (isFetchArticleFailed(getState().article)) {
        page = '404';
      }
      break;
    case 'about':
      await import('../components/lp-about');
      break;
    case 'design':
      await import('../components/lp-design');
      break;
    case 'pagespeed':
      await import('../components/lp-pagespeed');
      break;
    case 'terms':
      await import('../components/lp-site-terms');
      break;
    default:
      page = '404';
  }

  if (page === '404') {
    await import('../components/lp-view404');
  }

  dispatch(updatePage(page));
};

export const refreshPage = () => (dispatch, getState) => {
  const state = getState();
  // load page using the current state
  dispatch(
    loadPage(
      state.app.page,
      state.articles && state.articles.query,
      state.article && state.article.slug,
      state.categories && state.categories.categoryId,
      state.search_results && state.search_results.searchTerms
    ),
  );
};

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page,
  };
};

const isFetchArticleFailed = article => {
  return !article.isFetching && article.failure;
};

let snackbarTimer;

export const showSnackbar = () => dispatch => {
  dispatch({
    type: OPEN_SNACKBAR,
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(
    () =>
      dispatch({
        type: CLOSE_SNACKBAR,
      }),
    3000,
  );
};

export const updateOffline = offline => (dispatch, getState) => {
  const prev = getState().app.offline;
  dispatch({
    type: UPDATE_OFFLINE,
    offline,
  });
  if (prev !== undefined) {
    dispatch(showSnackbar());
  }
  //  automatically refresh when you come back online (offline was true and now is false)
  if (prev === true && offline === false) {
    dispatch(refreshPage());
  }
};

export const updateDrawerState = opened => (dispatch, getState) => {
  if (getState().app.drawerOpened !== opened) {
    dispatch({
      type: UPDATE_DRAWER_STATE,
      opened,
    });
  }
};

export const updateLayout = wide => (dispatch, getState) => {
  if (getState().app.drawerOpened) {
    dispatch(updateDrawerState(false));
  }
};

export const updateSubTitle = subTitle => {
  return {
    type: UPDATE_SUBTITLE,
    subTitle,
  };
};

export const updateLocationURL = url => dispatch => {
  window.history.pushState({}, '', url);
  dispatch(navigate(window.location));
};

const setAnnouncerLabel = label => {
  return {
    type: SET_ANNOUNCER_LABEL,
    label,
  };
};

const clearAnnouncerLabel = () => {
  return {
    type: CLEAR_ANNOUNCER_LABEL,
  };
};

const announcerTimer = 0;

export const announceLabel = label => dispatch => {
  dispatch(clearAnnouncerLabel());
  // Debounce announcements.
  clearTimeout(announcerTimer);
  announcerTimer = setTimeout(() => {
    dispatch(setAnnouncerLabel(label));
  }, 300);
};
