import { css } from 'lit-element';

export const SelectStyle = css`
  lp-select {
    display: inline-block;
    margin: 10px 0px 20px 0px;
    position: relative;
    /* create a layer to avoid invalidation from other controls*/
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  lp-select > lp-md-decorator {
    display: block;
    border-top: 1px solid var(--app-primary-border-color);
    height: 1px;
    speak: none;
  }
  lp-select > md-decorator::after {
    content: '\\25BC';
    display: block;
    position: absolute;
    bottom: calc(50% - 0.75em);
    right: 8px;
    speak: none;
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    color: var(--app-secondary-color);
    pointer-events: none;
  }
  lp-select > select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0px 24px 10px 0;
    border: none;
    background-color: transparent;
    border-radius: 0;
    font-size: 1em;
    font-weight: 300;
    color: var(--app-form-text-color);
    opacity: 1;
    overflow: hidden;
    margin: 0;
    outline: none;
  }
  lp-select > select::-ms-expand {
    display: none;
  }
  lp-select > lp-md-decorator > lp-underline {
    display: block;
    background-color: var(--app-accent-color);
    height: 2px;
    position: relative;
    top: -1px;
    width: 100%;
    margin: auto;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  lp-select > select:focus + lp-md-decorator > lp-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  lp-select > select:focus + md-decorator::before,
  lp-select > select:focus + md-decorator::after,
  lp-select > select:focus {
    color: black;
  }
  /* hide the focus ring in firefox */
  lp-select > select:focus:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 var(--app-secondary-color);
  }
  lp-select > [prefix] {
    position: absolute;
    left: 0px;
    top: calc(50% - 8px);
    line-height: 16px;
    color: var(--app-secondary-color);
    opacity: 1;
    pointer-events: none;
  }
`;
