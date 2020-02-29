import { CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './style-shared';
import { TypographyStyle } from './style-typography';
import { LayoutStyle } from './style-layout';
import { GridStyle } from './style-grid';
import { Card } from './style-card';
import { ButtonStyle } from './style-button';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Design extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      ButtonStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */

        .hero {
          background: var(--app-reverse-text-color) url('/images/header/placeholder-opt.svg')
            no-repeat;
          background-size: 380px;
          background-position: 93% 80px;
        }
        .section {
          padding-top: 0px;
        }
        img.content-grid-image,
        img.content-grid-image-lower {
          height: auto;
          max-width: 80%;
          width: 100%;
          margin: 0 auto;
        }
        .grid__col--horizontal-center {
          justify-self: normal;
        }
        @media (min-width: 460px) {
          .hero {
            padding-bottom: 24px;
          }

          h3 {
            padding-top: 20px;
          }

          .content-set p {
            max-width: 600px;
          }

          .content-button {
            margin-bottom: 0;
          }

          section.copy {
            margin: 0;
          }

          .section {
            padding-top: 44px;
          }

          .grid-row-start {
            grid-row-start: 1;
          }
        }

        @media (max-width: 800px) {
          .hero {
            background: none;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'Progressive Web App Design - Logical Phase',
      description:
        'We create high-quality Progressive Web Applications using the same tools Google uses',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="design">
          <header class="hero hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      Pellentesque habitant morbi tristique
                    </h1>
                    <h2 class="display3">LitPress: Pellentesque habitant morbi tristique</h2>
                    <p class="headline4 why-hyperpress__intro-text">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="home"
                        track-metadata-position="banner"
                        >Let's talk</a
                      >
                    </div>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <div class="section section--border">
            <div class="section__spacer">
              <section class="copy">
                <div class="grid--alternate copy__inner copy--60-40 grid--vertical-center">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image"
                      src="/images/content/placeholder-opt.svg"
                      alt="Containerize On Prem Applications"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3" id="engaging-experiences-regardless-screen-size">
                      Pellentesque habitant morbi
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                      sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
                      mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="design"
                        track-metadata-position="banner"
                        >Let's talk</a
                      >
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="section section--border"></div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-design', Design);
