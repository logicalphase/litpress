import { CDN_HOST_URL, HP_HOST } from './config';
import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { until } from 'lit-html/directives/until.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './lp-item.js';
import './lp-offline.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { fetchCategories } from '../actions/categories.js';
import { refreshPage } from '../actions/app.js';
import { categories, itemListSelector } from '../reducers/categories.js';

// We are lazy loading its reducer.
store.addReducers({
  categories,
});

import { SharedStyles } from './style-shared';
import { ButtonStyle } from './style-button';
import { ElevationStyle } from './style-elevation';
import { TypographyStyle } from './style-typography';
import { GridStyle } from './style-grid';
import { LayoutStyle } from './style-layout';
import { Theme } from './style-theme';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Categories extends connect(store)(PageViewElement) {
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

        .category-list-item {
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

        .category-list-item .flex-hover-card:nth-child(0) {
          animation-delay: 0s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .category-list-item .flex-hover-card:nth-child(1) {
          animation-delay: 1.6s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .category-list-item .flex-hover-card:nth-child(3) {
          animation-delay: 1.8s;
        }
        .category-list-item .flex-hover-card:nth-child(4) {
          animation-delay: 2.6s;
        }

        @media (min-width: 460px) {
          .hero {
            background: var(--app-reverse-text-color) url('/images/header/placeholder-opt.svg')
              no-repeat;
            background-size: 280px;
            background-position: 90% 60px;
          }
          .content-wrapper {
            padding: 0;
            background: var(--app-primary-section-background-color);
          }
          .sidebar {
            display: block;
            width: 270px;
            margin-left: 34px;
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
        }
      `,
    ];
  }

  render() {
    const { _categoryId, _data, _showOffline } = this;
    
    // Don't render if there is no item.
    if (_data) {
      until(
        _data,
        html`
          <p class="loader" style="padding-left: 34px;">Loading. . .</p>
        `,
      );
    } else {
      return html`
        <p class="loader" style="padding-left: 34px;">
          An error occurred while retrieving category list. Please reload.
        </p>
      `;
    }
    updateMetadata({
      title: `Logical Phase Blog Categories`,
      description: `WordPress How to's, tutorials, and pro tips to get the most from your site`,
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="category">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">Resources for WordPress by Category</h1>
                    <h2 class="display3">
                      Blog Category: ${this._data.map(item => html`<span>${item.categories_names}</a></span>`)}
                    </h2>
                    <p class="headline4 why-google__intro-text">
                      Test blog articles from WordPress.
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
                  <div class="content-grid-box" ?hidden="${!_categoryId}">
                    ${until(repeat(
                      _data,
                      item => html`
                        <div class="category-list-item">
                          <div class="flex-hover-card mdc-elevation--z3">
                            <lp-item .item="${item}"></lp-item>
                          </div>
                        </div>
                      `,
                    ), html`<p class="loader" style="padding-left: 34px;">Loading. . .</p>`)}
                  </div>
                </main>
                <aside class="sidebar mdc-elevation--z3">
                  <div class="nav">
                    <div class="sticky">
                      <ul class="fade-in right-side-nav l-space-bottom-5">
                        <li>
                          <h3
                            class="l-pad-right-2 l-pad-left-2 text-uppercase"
                            id="more-about-serverless"
                          >
                            Blog Category
                          </h3>
                        </li>
                        ${until(repeat(
                          _data,
                          item => html`
                            <li>
                              <a
                                id="${item.id}"
                                track-type="category${item.categories_names}"
                                track-name="category-page"
                                track-metadata-position="body"
                                href="/category/${item.categories}"
                                >${item.categories_names}</a
                              >
                            </li>
                          `,
                        ), html`<p class="loader" style="padding-left: 34px;">Loading. . .</p>`)}
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
      _categoryId: { type: String },
      _data: { type: Array },
      _showOffline: { type: Boolean },
      _categories_names: { type: String }
    };
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._categoryId = state.categories.categoryId;
    this._data = itemListSelector(state);
    this._showOffline = state.app.offline && state.categories.failure;
  }
}
window.customElements.define('lp-category', Categories);

export { fetchCategories, refreshPage };
