import { LitElement, html, css} from 'lit-element';
import { magnifyIcon } from './lp-icons';
import { Theme } from './style-theme';

class InputDecorator extends LitElement {
  static get styles() {
    return [
      Theme,
      css`
      :host {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0;
      }

      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 4px;
        box-sizing: border-box;
      }

      .decorator {
        flex: 1;
        position: relative;
        margin: 0 2px;
        border-bottom: 0px solid #bbb;
      }

      .decorator > ::slotted(input) {
        font-size: 1em;
        font-weight: 400;
        border: none;
        width: 100%;
        padding: 0 0 1px 0;
        background: transparent;
        font-family: inherit;
        outline: none;
        -webkit-appearance: none;
      }

      .underline {
        display: block;
        height: 1px;
        width:100%;
        background-color: var(--app-form-border-color);
        position: absolute;
        bottom: -2px;
        left: 0;
        will-change: transform;
        transform: scale3d(0, 1, 1);
        transition: transform 0.2s ease-in;
      }
      [focused] > .underline {
        transform: scale3d(1, 1, 1);
        transition: transform 0.2s ease-out;
      }

      .search-icon {
        margin-top: 7px;
      }

      `,
    ];
  }

  render() {
    const { _focused } = this;
    return html`
      <div class="search-icon">${magnifyIcon}</div>
      <div class="decorator" ?focused="${_focused}">
        <slot id="inputSlot" name="input"></slot>
        <div class="underline"></div>
      </div>
      <slot name="button"></slot>
    `;
  }

  static get properties() {
    return {
      _focused: { type: Boolean }
    };
  }

  firstUpdated() {
    // Do all setup work after the first render.
    // Assume the input is in the slot
    this._input = this.shadowRoot.querySelector('#inputSlot').assignedNodes({flatten: true})[0];
    this._input.addEventListener('focus', () => this._focused = true);
    this._input.addEventListener('blur', () => this._focused = false);
  }
}

window.customElements.define('lp-input-decorator', InputDecorator);