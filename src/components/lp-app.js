import { HP_HOST } from './config';

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

import { menuIcon } from './lp-icons.js';
import './snack-bar.js';
import './search-imput-decorator';
import './speech-mic.js';
import './lp-home.js';

import { connect } from 'pwa-helpers/connect-mixin';
import { installRouter } from 'pwa-helpers/router';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { updateMetadata, setMetaTag } from 'pwa-helpers/metadata';

import { store } from '../store.js';

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';

import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout,
  updateLocationURL,
} from '../actions/app';

import { Theme } from './style-theme';
import { MenuStyles } from './style-menu';
import { ButtonStyle } from './style-button';
import { SearchIcon } from './lp-icons';

class App extends connect(store)(LitElement) {
  static get styles() {
    return [
      Theme,
      MenuStyles,
      ButtonStyle,
      SearchIcon,
      css`
        /*--------------------------------------------------------------
      # Accessibility
      --------------------------------------------------------------*/
        /* Text meant only for screen readers. */
        .screen-reader-text {
          clip: rect(1px, 1px, 1px, 1px);
          position: absolute !important;
          height: 1px;
          width: 1px;
          overflow: hidden;
          word-wrap: normal !important;
          /* Many screen reader and browser combinations announce broken words as they would appear visually. */
        }

        .screen-reader-text:focus {
          background-color: #f1f1f1;
          border-radius: 3px;
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
          clip: auto !important;
          color: #21759b;
          display: block;
          font-size: 14px;
          font-size: 0.875rem;
          font-weight: bold;
          height: auto;
          left: 5px;
          line-height: normal;
          padding: 15px 23px 14px;
          text-decoration: none;
          top: 5px;
          width: auto;
          z-index: 100000;
          /* Above WP toolbar. */
        }

        /* Do not show the outline on the skip link target. */
        #primary[tabindex='-1']:focus {
          outline: 0;
        }

        [hidden] {
          display: none !important;
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 200;
          width: 100%;
          text-align: left;
          background-color: var(--app-header-background-color);
          color: var(--app-header-text-color);
          border-bottom: 1px solid var(--app-primary-border-color);
        }

        nav {
          height: 46px;
        }

        .masthead {
          background-color: var(--app-primary-background-color);
          padding: 12px 8px;
          height: inherit;
          align-items: center;
        }

        .title {
          margin-left: 0px;
          font-weight: 300;
          color: var(--app-secondary-color);
        }

        .paper-font-body2 {
          font-size: 14px;
          transform: uppercase;
        }

        .cta-header {
          background: var(--app-secondary-background-color);
          font-size: 1.2rem;
          margin-right: 24px;
          padding: 0px 10px 0px 10px;
          border: solid 1px var(--app-form-border-color);
          -webkit-border-radius: 10em;
          -moz-border-radius: 10em;
          border-radius: 10em;
        }

        .cta-header:focus-within {
          background-color: var(--app-reverse-text-color);
          -webkit-box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
          -moz-box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
          box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
        }

        .search-btn {
          background: var(--app-reverse-text-color);
          border: 1px solid var(--app-primary-icon-color);
          fill: var(--app-primary-icon-color);
          cursor: pointer;
          width: 34px;
          height: 34px;
          position: absolute;
          top: 24px;
          padding: 5px;
        }

        .search-btn:hover {
          background: var(--app-primary-icon-color);
          fill: var(--app-reverse-text-color);
        }

        input[type='search'] {
          background: var(--app-secondary-background-color);
          padding: 8px 8px 8px 8px;
          width: 220px;
          margin-top: 14px;
          margin-bottom: 14px;
          border-top: 1px solid var(--app-form-border-color);
          border-right: 0px solid var(--app-form-border-color);
          border-left: 1px solid var(--app-form-border-color);
          border-bottom: 1px solid var(--app-form-border-color);
        }

        input[type='search']:focus {
          background-color: var(--app-reverse-text-color);
        }

        input:-moz-placeholder,
        input::-webkit-input-placeholder {
          color: var(--app-footer-secondary-background-color);
        }

        input:-moz-placeholder:focus,
        input::-webkit-input-placeholder:focus {
          color: var(--app-form-text-color);
        }

        .toolbar-top {
          background-color: var(--app-header-background-color);
        }

        [main-title] {
          font-family: 'Roboto';
          text-transform: lowercase;
          font-size: 24px;
          /* 
          In the narrow layout, the toolbar is offset by the width of the
          drawer button, and the text looks not centered. Add a padding to
          match that button 
        */
          padding-right: 44px;
        }

        .sub-tagline {
          margin-left: 5px;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 0px 18px;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        /* 
        We need to make sure when drawer is open
        it covers our app header. Otherwise there's
        menu button that is disabled 
      */
        #drawer {
          z-index: 200;
        }

        #drawer app-toolbar {
          border-bottom: 1px solid var(--app-primary-border-color);
          margin-bottom: 5px;
          background-color: var(--app-primary-color);
          color: var(--app-reverse-text-color);
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 10px 24px;
          background: var(--app-drawer-background-color);
          position: relative;
          text-align: left;
          overflow-y: auto;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          font: 400 16px/24px Roboto, sans-serif;
          color: var(--app-drawer-text-color);
          letter-spacing: 0.25px;
          padding: 0.6rem 8px 0.6rem 0px;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        .main-content {
          padding-top: 20px;
          min-height: 100vh;
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        .footer-linkboxes-all-backup,
        .footer-linkbox-cloud {
          background-color: var(--app-footer-primary-background-color);
        }

        .footer-linkboxes > nav::before {
          background: var(--app-footer-primary-background-color);
          border-bottom: solid 1px var(--app-form-border-color);
          color: var(--app-footer-primary-background-color);
          content: 'Logical Phase';
          display: block;
          height: 73px;
          padding: 24px;
        }

        *,
        *:before,
        *:after {
          -webkit-box-sizing: inherit;
          box-sizing: inherit;
        }
        .nav {
          font-size: 13px;
        }

        .site-name {
          display: none;
        }

        .utility-footer-nav {
          color: var(--app-reverse-text-color);
          overflow: auto;
          padding: 10px 24px;
        }

        .full-site-width,
        .toast-fill {
          margin: 0 auto;
          color: var(--app-footer-text-color);
        }

        .footer-linkboxes-all-backup,
        .footer-linkbox-cloud {
          background-color: var(--app-footer-primary-background-color);
        }

        .footer-linkboxes {
          background: #263238;
          font: 14px/16px Roboto, sans-serif;
        }

        .utility-footer {
          background: var(--app-footer-secondary-background-color);
          color: var(--app-footer-text-color);
          text-align: center;
        }

        .utility-footer-nav-left {
          display: inline-block;
          padding-right: 20px;
        }
        .utility-footer-nav-right {
          display: inline-block;
        }

        .utility-footer-link + .utility-footer-link::before {
          content: '|';
          padding-left: 6px;
          padding-right: 8px;
        }
        footer nav {
          height: inherit;
        }

        .utility-footer-link {
          color: var(--app-reverse-text-color);
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
        }

        .utility-footer-links,
        .utility-footer-newsletter-signup-text {
          font-weight: 500;
          margin-right: 16px;
        }

        .brand-site-logo {
          display: block;
          height: auto;
          width: 141px;
          text-align: left;
          margin-left: 12px;
        }

        img {
          border: 0;
          max-width: 100%;
        }

        /* 
        Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout. 
      */
        @media (min-width: 460px) {
          #dropdownMenuButton {
            margin-right: 3px;
          }

          .toolbar-list {
            display: block;
          }

          .cta-header {
            background: var(--app-secondary-background-color);
            font-size: 1.1rem;
            margin-right: 24px;
            border: solid 1px var(--app-form-border-color);
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
          }

          .cta-header:focus-within {
            border: none;
          }

          input[type='search']::placeholder {
            font-size: 14px;
          }

          input[type='search'] {
            background: var(--app-secondary-background-color);
            width: 170px;
            font-size: 1rem;
            padding: 0px 0px 0px 8px;
            margin-top: 0px;
            margin-bottom: 0px;
            border: none;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
          }

          input[type='search']:focus {
            width: 380px;
            background-color: var(--app-reverse-text-color);
          }

          lp-input-decorator {
            max-width: 460px;
            transform: translate3d(0, 0, 0);
          }
          lp-input-decorator[top] {
            transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
            transform: translate3d(0, 0, 0);
          }

          .masthead {
            padding: 5px 8px 5px 36px;
          }

          .brand-site-logo {
            display: block;
            height: auto;
            width: 168px;
            margin-left: 0px;
          }

          .menu-btn {
            display: none;
          }

          .toolbar-list > a {
            padding: 0px 18px;
          }

          ul.nav-right {
            width: 50%;
          }

          .main-content {
            padding-top: 55px;
          }

          nav.full-site-width {
            background-color: #212121 !important;
          }

          .utility-footer-nav-left {
            float: left;
          }

          .utility-footer-nav-right {
            float: right;
          }

          .footer-linkboxes > nav::before {
            background-color: var(--app-footer-primary-background-color) !important;
            color: var(--app-secondary-background-color);
            content: 'LitPress';
            display: block;
            min-height: 73px;
            padding: 24px;
          }

          /* The drawer button isn't shown in the wide layout, so we don't
          need to offset the title */
          [main-title] {
            padding-right: 0px;
          }

          html[dir='rtl'] .microphone-icon {
            left: 0;
            right: auto;
          }

          #realbox-input-wrapper > :-webkit-any(.google-g-icon, .microphone-icon, .search-icon) {
            z-index: 3;
          }
        }
      `,
    ];
  }

  render() {
    const {
      appTitle,
      _page,
      _offline,
      _drawerOpened,
      _snackbarOpened,
      _searchTerms,
    } = this;

    const hideInput = !_page;
    // True to make the search input aligns at the top inside the header instead of inside the main content.
    const inputAtTop = 'ontouchstart' in window || !_page;
    const searchTerms = _page ? '' : _searchTerms;

    updateMetadata({
      title: `LitPress`,
      description: `Keep you ahead of the competition`,
      image: ``,
    });

    setMetaTag('name', 'twitter:card', 'photo');
    setMetaTag('name', 'twitter:url', 'https://logicalphase.com/');

    return html`
      <!-- Header -->
      <app-header-layout id="appheaderlayout" has-scrolling-region>
        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar class="masthead">
            <a href="/" alt="${appTitle} home">
              <img
                rel="dns-prefetch"
                class="brand-site-logo"
                src="/images/logicalphase-logo-204x36.svg"
                alt="${appTitle} logo"
              />
            </a>
            <div class="title" main-title>
              <span class="site-name">${appTitle}</span>
            </div>
            <div class="cta-header toolbar-list">
              <lp-input-decorator ?top="${inputAtTop}" ?hidden="${hideInput}">
                <input
                  slot="input"
                  id="input"
                  aria-label="Search Content"
                  type="search"
                  placeholder="Enter search term"
                  value="${decodeURI(searchTerms)}"
                  @change="${e => store.dispatch(updateLocationURL(`/search/${e.target.value}`))}"
                />
                <speech-mic
                  slot="button"
                  continuous
                  interimResults
                  @result="${e => this._micResult(e)}"
                ></speech-mic>
              </lp-input-decorator>
            </div>
            <button
              class="menu-btn"
              title="Menu"
              @click="${() => store.dispatch(updateDrawerState(true))}"
            >
              ${menuIcon}
            </button>
          </app-toolbar>
          <app-toolbar class="desktop-menu toolbar-list" sticky>
            <nav role="navigation" aria-label="Header Navigation Menu">
              <div class="main-navigation">
                <a ?selected="${_page === 'home'}" href="/">Home</a>
                <a ?selected="${_page === 'about'}" href="/about">About</a>
                <a
                  id="dropdownMenuButton"
                  class="toolbar-platform-chooser__button"
                  tabIndex="0"
                  @click="${this._toggleDropdownMenu}"
                >
                  <span class="toolbar-platform-chooser__label">Solutions</span>
                  <svg
                    class="triangle dropdown__arrow closed"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <title>Open drop down menu</title>
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                </a>
                <a ?selected="${_page === 'blog'}" href="/blog">Blog</a>
                <a ?selected="${_page === 'contact'}" href="/">Contact</a>
              </div>
              <div
                id="dropdownListElement"
                class="main-navigation dropdown-menu hide"
                data-target="slide-content"
                aria-hidden="true"
                tabindex="-1"
              >
                <a
                  class="dropdown-item submenu"
                  ?selected="${_page === 'pagespeed'}"
                  href="/pagespeed"
                  tabindex="-1"
                  >Site Performance</a
                >
                <a 
                  class="submenu" 
                  ?selected="${_page === 'design'}" 
                  tabindex="-1"
                  href="/design">Web Design</a
                >
              </div>
            </nav>
          </app-toolbar>
        </app-header>
      </app-header-layout>

      <!-- Drawer content -->
      <app-drawer
        id="drawer"
        .opened="${_drawerOpened}"
        @opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}"
        swipe-open
      >
        <app-toolbar>
          ${appTitle}
        </app-toolbar>
        <nav class="drawer-list">
          <div class="search-wrapper">
            <form
              class="header-search-drawer"
              name="toolbar-search-drawer"
              action="/search/wordpress"
            >
              <input
                class="search-field-drawer"
                type="search"
                aria-label="Search box"
                placeholder="Search..."
                value="" 
                tabindex="-1"
              />
              <button
                class="search-btn"
                title="Search"
                tabindex="-1"
                @click="${() => this._getValueFromSearchFieldDrawer()}"
              >
                ${SearchIcon}
              </button>
            </form>
          </div>
          <a ?selected="${_page === 'home'}" href="/">Home</a>
          <a ?selected="${_page === 'about'}" href="/about">About</a>
          <a class="submenu" ?selected="${_page === 'pagespeed'}" href="/pagespeed">Performance</a>
           <a class="submenu" ?selected="${_page === 'design'}" href="/design">Design</a>
          <a ?selected="${_page === 'blog'}" href="/blog">Blog</a>
        </nav>
      </app-drawer>
      <!-- Main content -->
      <main class="main-content">
        <lp-home class="page" ?active="${_page === 'home'}"></lp-home>
        <lp-article class="page" ?active="${_page === 'article'}"></lp-article>
        <lp-about class="page" ?active="${_page === 'about'}"></lp-about>
        <lp-blog class="page" ?active="${_page === 'blog'}"></lp-blog>
        <lp-category class="page" ?active="${_page === 'category'}"></lp-category>
        <lp-design class="page" ?active="${_page === 'design'}"></lp-design>
        <lp-pagespeed class="page" ?active="${_page === 'pagespeed'}"></lp-pagespeed>
        <lp-search class="page" ?active="${_page === 'search'}"></lp-search>
        <lp-view404 class="page" ?active="${_page === '404'}"></lp-view404>
      </main>

      <!-- Footer content -->
      <footer title="footer-links" class="footer-linkboxes nocontent footer-linkboxes-all-backup">
        <nav aria-label="Footer Links" class="full-site-width"></nav>
      </footer>
      <footer title="footer-navigation" class="utility-footer">
        <nav aria-label="Policy Links" class="utility-footer-nav nav full-site-width">
          <div class="utility-footer-nav-left">
            <span class="footer-links">
              <a class="utility-footer-link gc-analytics-event" href="/">Site Terms</a>
              <a class="utility-footer-link gc-analytics-event" href="/">Privacy</a>
            </span>
          </div>
          <div class="utility-footer-nav-right">
            <span class="footer-links">
              <span class="utility-footer-link gc-analytics-event">LitElement Web Components</span>
            </span>
          </div>
        </nav>
      </footer>

      <snack-bar ?active="${_snackbarOpened}">
        You are currently ${_offline ? 'offline' : 'online'}.</snack-bar
      >
    `;
  }

  static get properties() {
    return {
      appTitle: {
        type: String,
      },
      _query: {
        type: String,
      },
      _categoryId: {
        type: String,
      },
      _page: {
        type: String,
      },
      _lazyResourcesLoaded: {
        type: Boolean,
      },
      _lastVisitedListPage: {
        type: Boolean,
      },
      _offline: {
        type: Boolean,
      },
      _drawerOpened: {
        type: Boolean,
      },
      _snackbarOpened: {
        type: Boolean,
      },
      _updateOffline: {
        type: Boolean,
      },
      _data: {
        type: Object,
      },
      _item: {
        type: Object,
      },
      _articleSlug: {
        type: String,
      },
      dropdownList: {
        type: String,
      },
      searchFieldValue: {
        type: String,
      },
      searchTerms: {
        type: Object,
      },
      _searchAction: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter(location => store.dispatch(navigate(location)));
    installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 648px) and (min-height: 648px)`, matches =>
      store.dispatch(updateLayout(matches)),
    );

    this.removeAttribute('unresolved');
    this._input = this.shadowRoot.getElementById('input');
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle,
        // This object also takes an image property, that points to an img src.
      });
      // Maybe move this into a store, but for now I need a quick and dirty way
      // to make sure the dropdown menu element closes after a menu selection
      // and to properly update aria attributes.
      this._hideDropdownButtonBlur();

      window.scrollTo(0, 0);
    }
  }

  _toggleDropdownMenu(e) {
    const dropdownButton = this.shadowRoot.getElementById('dropdownMenuButton');
    const dropdownList = this.shadowRoot.getElementById('dropdownListElement');
    const dropdownArrow = this.shadowRoot.querySelector('.dropdown__arrow');
    if (dropdownList.classList.contains('hide')) {
      dropdownList.classList.replace('hide', 'show');
      dropdownArrow.classList.replace('closed', 'open');
      dropdownButton.setAttribute('aria-expanded', 'true');
      dropdownList.setAttribute('aria-hidden', 'false');
      console.log(dropdownList.classList);
    } else {
      dropdownList.classList.replace('show', 'hide');
      dropdownArrow.classList.replace('open', 'closed');
      dropdownButton.setAttribute('aria-expanded', 'false');
      dropdownList.setAttribute('aria-hidden', 'true');
      console.log(dropdownList.classList);
    }
  }

  _hideDropdownButtonBlur(e) {
    const dropdownButton = this.shadowRoot.getElementById('dropdownMenuButton');
    const dropdownList = this.shadowRoot.getElementById('dropdownListElement');
    const dropdownArrow = this.shadowRoot.querySelector('.dropdown__arrow');
    dropdownList.classList.replace('show', 'hide');
    dropdownArrow.classList.replace('open', 'closed');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownList.setAttribute('aria-hidden', 'true');
  }

  // To get our drawer search to work we need to get the value of the search field
  // and set the action attribute of our form action. We should add a condition
  // so if the search form is empty, return a message we need an actual search term.

  _getValueFromSearchFieldDrawer(e) {
    const searchTermsDrawer = this.shadowRoot.querySelector('.search-field-drawer').value;
    const searchActionDrawer = (this.shadowRoot.querySelector('.header-search-drawer').action =
      '/search/' + searchTermsDrawer);
  }

  stateChanged(state) {
    this.appTitle = state.app.appTitle;
    this._page = state.app.page;
    this._lastVisitedListPage = state.app.lastVisitedListPage;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
    this._data = state.article && state.article.data;
    this._item = state.article && state.article.item;
    this._query = state.articles && state.articles.query;
    this._categoryId = state.categories && state.categories.categoryId;
    this._articleSlug = state.article && state.article.slug;
    this._searchTerms = state.search_results && state.search_results.searchTerms;
    this._searchAction = state.search_results && state.search_results._searchAction;
  }

  _micResult(e) {
    const d = e.detail;
    const value = d.completeTranscript;
    this._input.value = value;
    if (d.isFinal) {
      store.dispatch(updateLocationURL(`/search/${value}`));
    }
  }
}
window.customElements.define('lp-app', App);
