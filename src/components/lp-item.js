import { LitElement, html, css } from 'lit-element';
import { formatDistance } from 'date-fns/esm';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { Calendar } from './lp-icons.js';

import './lp-social.js';

class Item extends LitElement {
  static get styles() {
    return [
      css`
        h3.paper-font-headline {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 10px 0;
          color: var(--app-primary-text-color);
        }

        p {
          word-spacing: 0.1px;
        }

        .lp-read-more {
          padding: 13px 24px;
          background-color: var(--app-reverse-text-color);
        }
        .lp-read-more a {
          color: var(--app-primary-color);
          text-decoration: none;
        }
        .lp-read-more .social_container {
          float: right;
          padding: 0px;
        }
        .lp-blog-meta-calendar svg {
          vertical-align: bottom;
        }

        .text-uppercase {
          border-top: 1px solid var(--app-reverse-text-color);
          display: block;
          padding: 16px 28px;
        }

        a {
          color: black;
          text-decoration: none;
        }

        .inner {
          padding: 20px 45px 10px 24px;
          background-color: #ffffff;
          border-bottom: 1px solid #e4e4e4;
        }

        .inner .category {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 40px;
          text-align: center;
          writing-mode: tb-rl;
          margin: 12px;
          font-size: 16px;
          color: var(--app-primary-color);
          font-weight: 500;
          letter-spacing: 0.25px;
          text-transform: uppercase;
        }

        .small-print {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 14px;
          padding-left: 0px;
          line-height: 14px;
        }

        .category-vertical-lr a {
          color: var(--app-reverse-text-color);
        }

        @media (min-width: 460px) {
          p {
            word-spacing: 0.1px;
          }
          .inner {
            margin-right: 0px;
          }

          h3.paper-font-headline {
            font-size: 1.5rem;
            margin: 10px 0;
            color: var(--app-primary-text-color);
          }

          .inner p {
            padding: 4px 0px 0px 0px;
            max-width: 570px;
          }

          .flex-hover-card .inner > p {
            padding-top: 10px;
          }

          .flex-hover-card .inner > h3 {
            margin: 0 0 14px;
          }

          .small-print {
            margin-top: 14px;
            margin-bottom: 4px;
            font-size: 14px !important;
            padding-left: 0px;
            line-height: 14px;
          }
        }
      `,
    ];
  }
  render() {
    const { item } = this;
    const id = item.id;
    const title = item.title && item.title.rendered;
    const date = formatDistance(new Date(item.date), new Date());
    const slug = item.slug;
    const category = item.categories_names;
    const excerpt = unsafeHTML(item.excerpt && item.excerpt.rendered);

    const date_prefix = 'Updated ';
    const date_postfix = ' ago.';

    return html`
      <a
        id="${id}"
        aria-label="Read ${title}"
        href="/article/${slug}/"
        track-type="navigateTo"
        track-name="/solutions/headlessWordPress"
      >
        <div class="inner">
          <h3 class="paper-font-headline">${title}</h3>
          ${excerpt}
          <p class="small-print">
            <i class="lp-blog-meta-calendar social-icon">${Calendar}</i> ${date_prefix +
              date +
              date_postfix}
          </p>
          <span class="category">${category}</span>
        </div>
      </a>
      <div class="lp-read-more">
        <a
          aria-label="Read ${title}"
          href="/article/${slug}/"
          track-type="navigateTo"
          track-name="/solutions/headlessWordPress"
          >Read Article</a
        >
        <div class="social_container">
          <div class="social_share">
            <lp-social .item="${item}"></lp-social>
          </div>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      item: { type: Object },
    };
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
window.customElements.define('lp-item', Item);
