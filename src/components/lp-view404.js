import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { SharedStyles } from './style-shared';
import { TypographyStyle } from './style-typography';

class View404 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      css`
        :host {
          display: block;
          padding: 30px;
        }
        h2 {
          font-weight: 300;
          margin-bottom: 20px;
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: '404 Page Not Found - Logical Phase',
      description: "The page you're looking for doesn't seem to exist",
    });

    return html`
      <section>
        <h2 class="title">Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try
          again?
        </p>
      </section>
    `;
  }
}

window.customElements.define('lp-view404', View404);
