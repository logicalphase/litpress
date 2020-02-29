import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  CLOSE_MODAL,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_DRAWER_STATE,
  CLEAR_ANNOUNCER_LABEL,
  SET_ANNOUNCER_LABEL,
} from '../actions/app.js';

const app = (state = { drawerOpened: false }, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      const p = action.page;
      return {
        ...state,
        page: p,
        lastVisitedListPage: p === 'blog' || p === 'category' ? p : state.lastVisitedListPage,
      };
    case CLEAR_ANNOUNCER_LABEL:
      return {
        ...state,
        announcerLabel: '',
      };
    case SET_ANNOUNCER_LABEL:
      return {
        ...state,
        announcerLabel: action.label,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        cartModalOpened: false,
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline,
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened,
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false,
      };
    default:
      return state;
  }
};

export default app;
