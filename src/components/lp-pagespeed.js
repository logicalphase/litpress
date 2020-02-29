import { CDN_HOST_URL, CDN_BUCKET_NAME } from './config';

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

class Pagespeed extends PageViewElement {
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
          background: none;
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
            background: var(--app-reverse-text-color)
              url('/images/header/placeholder-opt.svg') no-repeat;
            background-size: 354px;
            background-position: 95% 90px;
            padding-bottom: 40px;
          }

          h3 {
            padding-top: 20px;
          }
          img.content-grid-image,
          img.content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 82%;
          }

          .content-set p {
            max-width: 580px;
          }

          section.copy {
            margin: 0;
          }

          .grid-row-start {
            grid-row-start: 1;
          }
          .section {
            padding-top: 40px;
          }
        }

        @media (min-width: 800px) {
        }
        @media (min-width: 1401px) {
          .hero {
            background: var(--app-reverse-text-color)
              url('/images/header/placeholder-opt.svg') no-repeat;
            background-size: 354px;
            background-position: 95% 40px;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'Pellentesque habitant morbi.',
      description: 'Pellentesque habitant morbi.',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="design">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      Fames ac turpis egestas.
                    </h1>
                    <h2 class="display3">Pellentesque habitant WordPress</h2>
                    <p class="headline4 why-google__intro-text">
                      Pellentesque habitant morbi tristique senectus et netus et.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="pageSpeed"
                        track-metadata-position="banner"
                        >Let's Get Started</a
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
                <div class="grid--alternate copy__inner copy--60-40 grid-row-start">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image"
                      src="/images/content/placeholder-opt.svg"
                      alt="WordPress PageSpeed Optimizations"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      Pellentesque habitant morbi.
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div class="content-header__link element-align">
                      <a
                        href="/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="Pagespeed"
                        track-metadata-position="banner"
                        >Let's talk</a
                      >
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-pagespeed', Pagespeed);
