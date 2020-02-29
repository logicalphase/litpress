import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from './style-shared';

import { connect } from 'pwa-helpers/connect-mixin';
import { installRouter } from 'pwa-helpers/router';

import { store } from '../store.js';

import { navigate } from '../actions/app.js';

class TSSideBarNav extends connect(store)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        .nav a {
          border-bottom: 0px;
          font-weight: normal;
        }

        .nav a[selected] {
          color: var(--app-primary-color);
          text-decoration: none;
        }

        @media (min-width: 460px) {
        }

        @media (max-width: 800px) {
        }
      `,
    ];
  }

  render() {
    const { _page } = this;

    return html`
      <nav class="sidebar-nav nav">
        <div class="sticky">
          <ul class="right-side-nav l-space-bottom-5">
            <li>
              <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">
                Solutions Menu
              </h3>
            </li>
            <li>
              <a
                ?selected="${_page === 'pagespeed'}"
                class="pagespeed"
                track-type="pagespeedOptimization"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/pagespeed"
                >Pagespeed Optimization</a
              >
            </li>
            <li>
              <a
                ?selected="${_page === 'design'}"
                class="design"
                track-type="detailResponse"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/design"
                >Mobile First Design</a
              >
            </li>
            <li>
              <a
                ?selected="${_page === 'emergency'}"
                class="emergency"
                track-type="emergencyResponse"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/emergency"
                >Emergency Response</a
              >
            </li>
            <li>
              <a
                ?selected="${_page === 'security'}"
                class="security"
                track-type="security"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/security"
                >WordPress Security</a
              >
            </li>
            <li>
              <a
                ?selected="${_page === 'migrations'}"
                class="migration"
                track-type="migrations"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/migrations"
                >WordPress Migrations</a
              >
            </li>
            <li>
              <a
                ?selected="${_page === 'care'}"
                lass="care"
                track-type="preventiveCare"
                track-name="web-page"
                track-metadata-position="sidebar"
                href="/care"
                >Preventive Care</a
              >
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
  static get properties() {
    return {
      _page: {
        type: String,
      },
    };
  }
  firstUpdated() {
    installRouter(location => store.dispatch(navigate(location)));
  }
  stateChanged(state) {
    this._page = state.app.page;
  }
}
window.customElements.define('ts-sidebar-nav', TSSideBarNav);
