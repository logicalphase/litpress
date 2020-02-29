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
import { ElevationStyle } from './style-elevation';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class About extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      ElevationStyle,
      ButtonStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */
        .hero {
          background: var(--app-reverse-text-color)
            url('/images/header/placeholder-opt.svg') no-repeat;
          background-size: 300px;
          background-position: 90% 80px;
        }
        .section {
          padding-top: 0px;
        }
        .section--border {
          margin-top: 0px;
        }
        .copy {
          margin-top: 64px;
        }
        img.content-grid-image,
        img.content-grid-image-lower {
          height: auto;
          width: 53%;
          margin-top: 123px;
          margin-left: 30px;
          padding: 0;
          margin: 0 auto;

        }
        .grid__col--horizontal-center {
          justify-self: normal;
        }
        .element-align {
          margin-top: 40px;
        }
        @media (min-width: 460px) {
          h3 {
            padding-top: 20px;
          }

          img.content-grid-image,
          img.content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 53%;
            margin-top: 123px;
            margin-left: 30px;
            padding: 0;
            transform: rotate(10deg);
          }

          .content-set p {
            max-width: 600px;
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
          .headline4 {
            margin-right: 56px;
          }
          .section--border {
            margin-top: 62px;
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
      title: 'Pellentesque habitant morbi',
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
                      Pellentesque habitant morbi
                    </h1>
                    <h2 class="display3">About LitPress</h2>
                    <p class="headline4 why-google__intro-text">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >How can I help?</a
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
                      class="content-grid-image mdc-elevation--z14"
                      src="/images/content/placeholder-opt.svg"
                      height="344"
                      width="276"
                      alt="About John and Logical Phase"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      Pellentesque habitant.
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.                   
                    </p>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
                    </p>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p>Very best,<br>Ellie</p>
                    <p>Ellie Otter<br>Founder and CTO</p>
                    <div class="content-header__link element-align">
                      <a
                        href="/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >Let's talk about your needs</a
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
window.customElements.define('lp-about', About);
