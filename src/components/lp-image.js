import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';


class ArticleImage extends PageViewElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
        }
        #placeholder {
          background-size: cover;
          background-position: center;
        }
        :host([blur-up]) #placeholder {
          background-position: center 10%;
          background-size: 80%;
          background-repeat: no-repeat;
          filter: blur(3px);
          will-change: filter;
        }
        :host([blur-up]) #placeholder[loaded] {
          filter: blur(0);
          transition: 0.2s filter ease-in-out;
        }
        img {
          margin: 0 auto;
          opacity: 0;
          width: 100%;
        }

        #placeholder[loaded] img {
          opacity: 1;
          transition: 0.5s opacity;
        }
      `,
    ];
  }

  render() {
    const { alt, placeholder, src, _loaded } = this;
    return html`
      <div
        id="placeholder"
        style="${placeholder ? `background-image: url('${placeholder}');` : ''}"
        ?loaded="${_loaded}"
      >
        <picture id="featured_image">
          <img
            src="${src}"
            alt="${alt}"
            @load="${() => (this._loaded = true)}"
            @error="${() => this._onImgError()}"
          />
        </picture>
      </div>
    `;
  }

  static get properties() {
    return {
      picture: { type: Object },
      alt: { type: String },
      src: { type: String },
      placeholder: { type: Object },
      _loaded: { type: Boolean },
    };
  }

  update(changedProps) {
    if (changedProps.has('src')) {
      this._loaded = false;
    }
    super.update(changedProps);
  }

  _onImgError() {
    if (this.placeholder) {
      this.src =
        'data:image/svg+xml,' +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ccc" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>',
        );
    }
  }
}
customElements.define('article-image', ArticleImage);
