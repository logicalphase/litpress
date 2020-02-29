import { LitElement, html, css } from 'lit-element';

class SpeechMic extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        position: relative;
        width: 40px;
        height: 40px;
      }
      button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 8px;
        box-sizing: border-box;
        background: transparent;
        border-radius: 50%;
        outline: none;
      }
      button:focus {
        background-color: #dedede;
      }
      :host([recognizing]) > button {
        background-color: #d23f31;
        fill: #fff;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      .ring1 {
        display: none;
        position: absolute;
        width: 200%;
        height: 200%;
        border-radius: 100%;
        background-color: rgba(0, 0, 0 , 0.1);
      }
      :host([recognizing]) > .ring1 {
        display: block;
        animation: ring1-pulse 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }
      @keyframes ring1-pulse {
        0% {
          transform: scale(0.5);
        }
        40% {
          transform: scale(0.8);
        }
        100% {
          transform: scale(1);
        }
      }
      .ring2 {
        display: none;
        position: absolute;
        width: 300%;
        height: 300%;
        border-radius: 100%;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.08);
      }
      :host([recognizing]) > .ring2 {
        display: block;
        animation: ring2-pulse 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }
      @keyframes ring2-pulse {
        0% {
          transform: scale(0.3);
        }
        40% {
          transform: scale(0.5);
        }
        100% {
          transform: scale(1);
        }
      }
      `
    ];
  }

  render() {
    return html`
      <div class="ring1"></div>
      <div class="ring2"></div>
      <button title="Search by voice" @click="${() => this.toggle()}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/></svg>
     </button>
    `;
  }

  static get properties() { return {
    transcript: { type: String },
    completeTranscript: { type: String },
    language: { type: String },
    continuous: { type: Boolean },
    interimResults: { type: Boolean },
    _recognizing: { type: Boolean, attribute: 'recognizing', reflect: true }
  }}

  constructor() {
    super();
    this.language = window.navigator.language;
  }

  firstUpdated() {
    if (window.webkitSpeechRecognition) {
      this._recognition = new webkitSpeechRecognition();
      this._recognition.continuous = this.continuous;
      this._recognition.interimResults = this.interimResults;
      this._recognition.lang = this.language;
      this._recognition.onstart = this._onStart.bind(this);
      this._recognition.onend = this._onEnd.bind(this);
      this._recognition.onresult = this._onResult.bind(this);
      this._recognition.onerror = this._onError.bind(this);
    } else {
      this.style.display = 'none';
    }
  }

  toggle() {
    if (!this._recognition) {
      return;
    }
    if (this._recognizing) {
      this._recognition.stop();
    } else {
      this._recognition.start();
    }
  }

  stop() {
    this._recognition && this._recognition.stop();
  }

  _onStart() {
    this._recognizing = true;
  }

  _onEnd() {
    this._recognizing = false;
  }

  _onResult(e) {
    let t, ct = '', isFinal;
    for (let i = 0, r; r = e.results[i]; i++) {
      t = r[0] && r[0].transcript || '';
      ct += t;
      isFinal = r.isFinal;
    }
    this.transcript = t;
    this.completeTranscript = ct;
    this.dispatchEvent(new CustomEvent('result', {detail: {
      results: e.results,
      transcript: t,
      completeTranscript: ct,
      isFinal: isFinal
    }}));
    if (isFinal) {
      this.stop();
    }
  }

  _onError(e) {
    console.log(e);
  }
}

window.customElements.define('speech-mic', SpeechMic);