import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata, setMetaTag } from 'pwa-helpers/metadata';

import { repeat } from 'lit-html/directives/repeat';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { connect } from 'pwa-helpers/connect-mixin';

import { formatDistance } from 'date-fns/esm';

import { SubTitleIcon } from './lp-icons.js';

import { SharedStyles } from './style-shared';
import { GridStyle } from './style-grid';
import { ElevationStyle } from './style-elevation';
import { TypographyStyle } from './style-typography';
import { LayoutStyle } from './style-layout';
import { TableStyles } from './style-table';
import { WordPressStyles } from './style-wp';

import './lp-offline.js';
import './lp-image.js';
import './lp-social';

// This element is connected to the redux store.
import { store } from '../store.js';

import { refreshPage } from '../actions/app.js';
import { fetchArticle } from '../actions/article.js';
import { article, articleSelector } from '../reducers/article.js';

// We are lazy loading its reducer.
store.addReducers({
  article,
});

class Detail extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      GridStyle,
      TableStyles,
      ElevationStyle,
      TypographyStyle,
      LayoutStyle,
      SharedStyles,
      WordPressStyles,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        .display2 {
          line-height: 1.17857143;
          font-size: 44px;
          letter-spacing: -1.9px;
          padding-bottom: 24px;
        }

        ol {
          margin-left: 0px;
          padding-left: 0px;
        }
        ul {
          margin-left: 0px;
          padding-left: 24px;
        }

        ol li,
        ul li {
          margin-right: 10px;
          font-weight: 300;
          font-size: 17px;
        }

        li ul {
          margin-left: 0px;
        }

        table {
          margin: 0px;
        }

        blockquote {
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 40px;
          margin-inline-end: 40px;
          font-size: 1.5rem;
          quotes: '“' '”';
        }

        blockquote p {
          font-size: 32px !important;
          line-height: 39px !important;
          font-weight: 300;
          color: var(--app-primary-color);
        }

        blockquote p::before {
          content: open-quote;
          font-family: 'Times New Roman', Times, serif;
          font-size: 62px;
          color: var(--app-primary-color);
          margin-left: -28px;
          margin-bottom: -20px;
        }
        cite {
          font-size: 14px;
          margin-top: 14px;
        }
        cite a {
          border-bottom: 1px solid var(--app-primary-color);
        }

        .display3 {
          margin-bottom: 14px;
        }

        .rich-text,
        p,
        ol,
        li {
          font-size: 16px;
          line-height: 1.725;
          font-weight: 300;
        }
        .article-spacing {
          margin-top: 0px;
        }
        .content-wrapper {
          padding: 0;
          border-top: 1px solid var(--app-primary-border-color);
        }
        .item {
          display: flex;
        }
        .cover {
          position: relative;
        }

        .cover > article-image {
          display: block;
          margin: 0 auto;
        }

        .item-desc {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-left: 16px;
          font-size: 14px;
        }
        .flex {
          flex: 1;
        }
        .desc {
          padding: 0px 0 22px 0;
        }
        .desc > h2 {
          font-size: 34px;
          font-weight: 400;
          line-height: 1.188888;
          text-align: left;
        }
        .desc > ul {
          margin-bottom: 24px;
        }

        .desc > ol {
          padding-left: 20px;
        }
        .desc p {
          font-size: 16px;
        }

        .article-button {
          display: inline-block;
          margin-right: 8px;
          padding: 8px 44px;
          border: 2px solid var(--app-primary-text-color);
          box-sizing: border-box;
          background-color: transparent;
          color: var(--app-primary-text-color);
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          border-bottom: none;
        }
        .article-button:active {
          background-color: var(--app-primary-text-color);
          color: var(--app-reverse-text-color);
          border-bottom: none;
        }

        article-rating {
          margin-right: 6px;
        }
        .rating-container {
          display: flex;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #c5c5c5;
          font-size: 14px;
        }
        .fav-btn-container,
        .preview-btn-container {
          padding-top: 16px;
        }
        .fav-btn-container {
          height: 32px;
        }
        .fav-button {
          display: flex;
          align-items: center;
          width: 156px;
          margin: 0 8px 0 0;
          padding: 0;
          background: transparent;
          border: 0;
          -webkit-appearance: none;
          font-size: 12px;
          cursor: pointer;
        }
        .fav-button > svg {
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }

        .read-more {
          display: grid;
        }
        .article-footer {
          position: relative;
          top: 50%;
          transform: translate(0, -50%);
        }
        .meta-container {
          grid-column: 1;
          text-align: left;
        }
        .social-container {
          grid-column: 2;
          text-align: right;
        }
        .social-container h4 {
          margin-right: 8px;
        }
        .article-footer ul {
          margin: 0;
          padding: 0;
        }
        .article-footer .meta-list-item {
          padding-left: 0px;
          list-style: none;
          fill: #888;
        }
        .article-footer .meta-list-item span {
          vertical-align: text-bottom;
          padding-left: 5px;
        }
        [hidden] {
          display: none !important;
        }

        .article-meta__content {
          background-color: hsla(0, 0%, 100%, 0.6);
          font-size: 0.9em;
          padding-left: 0px;
          margin-top: 14px;
          font-weight: 300;
        }
        .article-meta__author {
          margin-bottom: 15px;
        }
        .article-meta__author-name {
          font-weight: 500;
        }
        .article-meta__author {
          margin-bottom: 16px;
        }
        .article-image__caption,
        .article-meta__published-at,
        .utility-copy {
          color: #757575;
          font-size: 0.88888889em;
          line-height: 22px;
        }
        .article-meta__published-at {
          margin-top: 44px;
          font-size: normal;
        }
        /* desktop screen */
        @media (min-width: 648px) {
          :host {
            padding: 38px 24px 24px;
          }
          p {
            font-weight: 300;
          }
          h1.display2 {
            font-size: 46px;
          }
          h2,
          h3 {
            margin: 20px 0px 25px 0px;
            padding: 0;
          }

          h2 {
            line-height: 1.18181818;
            font-size: 34px;
            font-weight: 400;
            letter-spacing: -0.5px;
          }
          blockquote {
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 80px;
            margin-inline-end: 80px;
          }
          blockquote p {
            margin-bottom: 0px;
          }
          cite {
            font-size: 12px;
            margin-top: 8px;
          }
          small {
            margin-bottom: -24px;
          }
          section {
            margin-top: 0px;
          }
          table {
            width: 100%;
          }
          .display2 {
            line-height: 1.17857143;
            font-size:48px;
            letter-spacing: -1.9px;
            padding-bottom: 26px;
          }
          .display3 {
            margin-bottom: 0px;
            letter-spacing: -1px;
          }
          .content-wrapper {
            padding: 0px;
            margin-left: -34px;
            max-width: 644px;
            border-top: 0px solid var(--app-primary-border-color);
          }
          .item-desc {
            margin-left: 24px;
          }

          .fav-btn-container,
          .preview-btn-container {
            display: flex;
            justify-content: flex-end;
          }
          .preview-btn-container {
            padding-bottom: 24px;
          }
          .rating-container {
            padding: 24px 0;
          }
          .desc {
            padding: 0;
          }
          .desc p {
            font-size: 16px;
          }
        }

        @media (min-width: 600px) {
          .rich-text,
          p,
          li {
            font-size: 16px;
            letter-spacing: 0.25px;
            line-height: 26px;
          }
          .article-meta__published-at {
            margin-top: 24px;
            font-size: normal;
          }
          h1.display2 {
            font-size: 46px;
          }
        }

        @media (min-width: 1024px) {
          .main-content {
            padding: 0 80px 0 110px;
          }
          .rich-text,
          p {
            font-size: 16px;
            letter-spacing: 0;
            line-height: 28px;
          }
          .article-image__caption,
          .article-meta__published-at,
          .utility-copy {
            line-height: 24px;
          }
          .article-meta__content {
            margin-top: 18px;
            padding-left: 0px;
            max-width: 220px;
          }
          .article-meta__published-at {
            margin-top: 24px;
            font-size: normal;
          }
          .article-meta__author-title {
            margin-top: 10px;
          }
        }
      `,
    ];
  }

  render() {
    const { _data, _showOffline } = this;

    // Don't render if there is no item.
    if (!_data) {
      return html`
        <p class="loader">Loading. . .</p>
      `;
    }

    function stripHtml(html)
    {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    const item = _data;
    const title = item.title && item.title.rendered;
    const author = 'John Teague';
    const date = formatDistance(new Date(item.date), new Date());
    const slug = item.slug;
    const categories = item.categories_names || [];
    const excerpt = stripHtml(item.excerpt && item.excerpt.rendered);
    const thumbnail = item.tsapi_featured_image && item.tsapi_featured_image.source_url;
    const alt = item.tsapi_featured_image && item.tsapi_featured_image.alt_text;

    updateMetadata({
      title: `${title}`,
      description: `${excerpt}`,
      image: `${thumbnail}`,
    });

    setMetaTag('name', 'twitter:title', 'summary');
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:url', 'https://hyperpress.com/article/' );
    setMetaTag('name', 'twitter:image', 'https://storage.googleapis.com/logicalphase.com/assets/9a6ed0c3-bg-homepage-container.jpg');

    return html`
      <div class="main-content clearfix">
        <article id="site">
          <section ?hidden="${_showOffline}">
            <div class="item">
              <div class="cover">
                ${repeat(
                  categories,
                  item => html`
                    <p class="eyebrow">${item}</p>
                  `,
                )}
                <h1 class="display2 fade-in title">${title}</h1>
                <article-image class="article-image--full-aspect article-module" .src="${thumbnail}" .alt="${alt}"></article-image>
              </div>
            </div>
            <div class="grid grid__no-gap article-spacing">
              <div class="quote__resources is-12 is-3__large">
                <div class="article-meta__content">
                  <div class="article-meta__author ">
                    <div class="article-meta__author-name">
                      <div class="item-item" ?hidden="${!author}">${author}</div>
                    </div>
                    <div class="article-meta__author-title">Google Cloud Architect</div>
                    <span class="article-meta__published-at">Updated: ${date} ago.</span>
                  </div>
                </div>
              </div>
              <div class="is-12 is-9__large">
                <div class="content-wrapper">
                  <div class="delayed-fade-in desc">
                    ${unsafeHTML(
                      (item.content && item.content.rendered) || item.subtitle || 'None',
                    )}
                  </div>
                  <div class="read-more" ?hidden="${categories.length === 0}">
                    <div class="meta-container">
                      <div class="article-footer">
                        <h4>Posted in:</h4>
                        <ul>
                          ${repeat(
                            categories,
                            item => html`
                              <li class="meta-list-item">${SubTitleIcon}<span>${item}</span></li>
                            `,
                          )}
                        </ul>
                      </div>
                    </div>
                    <div class="social-container">
                      <div class="article-footer">
                        <h4>Share me!</h4>
                        <div class="social_share">
                          <lp-social .item="${item}"></lp-social>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
      <lp-offline
        ?hidden="${!_showOffline}"
        @refresh="${() => store.dispatch(refreshPage())}"
      ></lp-offline>
    `;
  }

  static get properties() {
    return {
      _isFetching: { type: Boolean },
      _data: { type: Object },
      _lastVisitedListPage: { type: Boolean },
      _showOffline: { type: Boolean },
    };
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._data = articleSelector(state);
    this._lastVisitedListPage = state.app.lastVisitedListPage;
    this._showOffline = state.app.offline && state.article.failure;
  }

  _getDataHref(e) {
    let link = e.currentTarget.link;
    // Pop a new window for specific social media platform
    window.open(
      link,
      '_blank',
      'scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500',
    );
  }
}

window.customElements.define('lp-article', Detail);

export { fetchArticle };
