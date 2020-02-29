import { CDN_HOST_URL } from './config';
import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { until } from 'lit-html/directives/until.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { repeat } from 'lit-html/directives/repeat.js';

import './lp-item.js';
import './lp-offline.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { fetchArticles } from '../actions/articles.js';
import { refreshPage } from '../actions/app.js';
import { articles, itemListSelector } from '../reducers/articles.js';

// We are lazy loading its reducer.
store.addReducers({
  articles,
});

import { SharedStyles } from './style-shared';
import { ButtonStyle } from './style-button';
import { ElevationStyle } from './style-elevation';
import { TypographyStyle } from './style-typography';
import { GridStyle } from './style-grid';
import { LayoutStyle } from './style-layout';
import { Theme } from './style-theme';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Blog extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      ButtonStyle,
      GridStyle,
      TypographyStyle,
      LayoutStyle,
      Theme,
      ElevationStyle,
      SharedStyles,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        [hidden] {
          display: none !important;
        }

        /* Smaller than 460 */

        .hero {
          background: none;
        }

        .content-wrapper {
          padding: 0px;
          background: var(--app-reverse-text-color);
        }

        .columns {
          max-width: 1024px;
          margin: 0 auto;
          padding-top: 34px;
          background: var(--app-reverse-text-color);
        }

        .sticky {
          display: none;
        }

        .content-grid-box {
          max-width: 100%;
        }

        .content-grid-box p {
          max-width: 580px;
        }

        .grid-wrapper-auto-fill {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          justify-items: left;
        }

        .blog-list-item {
          margin-bottom: 24px;
        }

        .flex-hover-card {
          min-width: 100%;
        }

        .flex-hover-card .inner > p {
          padding-top: 0px;
        }

        #resource_loader {
          margin-top: -80px;
        }

        .loader-wrapper {
          text-align: center;
        }

        .headline4 {
          font-size: 18px;
          font-weight: 400;
        }

        .sidebar {
          display: none;
        }

        .nav li h3 {
          color: var(--app-primary-text-color);
          font-size: 18px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px 0px 5px;
          padding: 20px 0 20px 20px;
        }

        .nav li {
          margin-right: 0px;
        }

        ul.right-side-nav {
          list-style: none;
          padding-left: 0px;
          margin-top: 0;
        }

        .nav li a {
          padding-left: 20px;
        }

        #resource_loader {
          margin-top: -80px;
        }

        .loader-wrapper {
          text-align: center;
        }

        @keyframes FadeIn {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }

          85% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .blog-list-item .flex-hover-card:nth-child(0) {
          animation-delay: 0s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .blog-list-item .flex-hover-card:nth-child(1) {
          animation-delay: 1.6s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .blog-list-item .flex-hover-card:nth-child(3) {
          animation-delay: 1.8s;
        }
        .blog-list-item .flex-hover-card:nth-child(4) {
          animation-delay: 2.6s;
        }

        @media (min-width: 460px) {
          .hero {
            background: var(--app-reverse-text-color) url('/images/header/placeholder-opt.svg')
              no-repeat;
            background-size: 240px;
            background-position: 90% 30px;
          }
          .hero .content-set {
            margin: 50px 0 20px 0;
            padding-bottom: 36px;
          }
          .content-wrapper {
            padding: 0;
            background: var(--app-primary-section-background-color);
          }
          section {
            margin: 0;
          }
          .sidebar {
            display: block;
            width: 270px;
            margin-left: 64px;
            margin-top: 0;
          }
          .background-grey {
            background: white;
          }
          .text-uppercase {
            border-top: 0px;
          }
          .pad-bottom-12 {
            padding-bottom: 96px;
            border-top: 1px solid var(--app-primary-hover-color);
          }
          .headline4 {
            padding-right: 0;
            font-size: 22px;
            font-weight: 400;
          }
          .sticky {
            display: block;
          }
          .loading {
            position:absolute;
            top:450px;
            left: 400px;
            color: blueviolet;
          }
        }
      `,
    ];
  }

  render() {
    const { _query, _data, _showOffline } = this;

    // Don't render if there is no item.

    updateMetadata({
      title: `Logical Articles`,
      description: `WordPress How to's, tutorials, and pro tips to get the most from your site`,
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="blog">
        <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">Resources for WordPress</h1>
                    <h2 class="display3">Example WordPress Blog Posts</h2>
                    <p class="headline5 why-hyperpress__intro-text">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <div class="content-wrapper">
          <section
            class="content background-grey full-bleed-section pad-top-6 pad-bottom-12 home"
          >
            <div class="columns">
              <main class="main">
                <div class="content-grid-box" ?hidden="${!_data}">
                  ${until(repeat(
                    _data,
                    item => html`
                      <div class="blog-list-item">
                        <div class="flex-hover-card mdc-elevation--z3">
                          <lp-item .item="${item}"></lp-item>
                        </div>
                      </div>
                    `,
                  ), html`<p class="loading">Loading. . .</p>` )}
                </div>
              </main>
              <aside class="sidebar mdc-elevation--z3">
                <div class="nav">
                  <div class="sticky">
                    <ul class="fade-in right-side-nav l-space-bottom-5" ?hidden="${!_data}">
                      <li>
                        <h3
                          class="l-pad-right-2 l-pad-left-2 text-uppercase"
                          id="blog-categories"
                        >
                          Blog Categories
                        </h3>
                      </li>
                      ${repeat(
                        _data, 
                        item => html`
                          <li>
                            <a
                              id="${item.id}"
                              track-type="category${item.categories_names}"
                              track-name="blog-page"
                              track-metadata-position="body"
                              href="/category/${item.categories}"
                              >${item.categories_names}</a
                            >
                          </li>
                        `,
                      )}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <lp-offline
            ?hidden="${!_showOffline}"
            @refresh="${() => store.dispatch(refreshPage())}"
          ></lp-offline>
        </div>
      </article>
    </div>
  `;
  }
  static get properties() {
    return {
      _query: { type: String },
      _data: { type: Array },
      _showOffline: { type: Boolean },
    };
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._query = state.articles.query;
    this._data = itemListSelector(state);
    this._showOffline = state.app.offline && state.articles.failure;
  }
}
window.customElements.define('lp-blog', Blog);

export { fetchArticles, refreshPage };
