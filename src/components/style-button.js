import { css } from 'lit-element';

export const ButtonStyle = css`
  .button {
    align-items: center;
    border: 0;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: 500 1em 'Roboto', Arial, sans-serif;
    height: 44px;
    justify-content: center;
    letter-spacing: 0.5px;
    min-width: auto;
    outline: none;
    padding: 1.7em 24px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: none;
    vertical-align: inherit;
  }
  .button:disabled,
  .button:disabled:focus,
  .button:disabled:hover {
    background-color: var(--app-button-disabled-background-color);
    border-color: var(--app-button-disabled-background-color);
    color: var(--app-reverse-text-color);
    cursor: default;
  }
  .button:active {
    box-shadow: none;
  }
  .button:focus {
    text-decoration: none;
  }
  .button--primary {
    background-color: var(--app-primary-color);
    color: var(--app-reverse-text-color);
  }
  .button--primary:hover {
    background-color: var(--app-primary-hover-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .button--primary:active,
  .button--primary:focus {
    background-color: var(--app-primary-color);
  }
  .button--primary:active::before,
  .button--primary:focus::before {
    background-color: var(--app-reverse-text-color);
    content: '';
    height: 100%;
    opacity: 0.24;
    position: absolute;
    width: 100%;
  }
  .button--primary.button--reversed {
    background-color: var(--app-reverse-text-color);
    color: var(--app-secondary-color);
  }
  .button--primary.button--reversed:focus,
  .button--primary.button--reversed:hover {
    background-color: var(--app-button-primary-reversed);
  }
  .button--secondary {
    background-color: var(--app-reverse-text-color);
    border: 1px solid var(--app-button-disabled-background-color);
    color: var(--app-primary-color);
    padding: 0 23px;
  }
  .button--secondary:active,
  .button--secondary:focus,
  .button--secondary:hover {
    border-color: var(--app-button-secondary-border);
  }
  .button--secondary:hover {
    background-color: var(--app-primary-section-background-color);
  }
  .button--secondary:active,
  .button--secondary:focus {
    background-color: var(--app-button-disabled-background-color);
  }
  .button--secondary.button--dark,
  .button--secondary.button--reversed {
    background-clip: padding-box;
    background-color: transparent;
    padding-left: 22px;
    padding-right: 22px;
  }
  .button--secondary.button--reversed {
    border-color: var(--app-reverse-text-color);
    border-width: 2px;
    color: var(--app-reverse-text-color);
  }
  .button--secondary.button--reversed:active,
  .button--secondary.button--reversed:focus,
  .button--secondary.button--reversed:hover {
    background-color: var(--app-button-primary-reversed);
    border-color: var(--app-button-primary-reversed);
    color: var(--app-secondary-color);
  }
  .button--flat {
    border-radius: 0;
    color: var(--app-primary-color);
    height: auto;
    padding: 0;
  }
  .button--flat:visited {
    color: var(--app-primary-color);
  }
  .button--flat:focus,
  .button--flat:hover {
    color: var(--app-primary-color);
  }
  .button--flat:focus {
    background-color: var(--app-button-flat-background-color);
    outline: 10px solid var(--app-button-flat-background-color);
  }
  .button--flat .button__icon {
    display: inherit;
    font-size: 16px;
    padding-left: 4px;
  }
  .button--flat .button__icon--external {
    transform: rotate(-45deg);
  }
  .button--flat .button__icon--jump {
    padding-bottom: 4px;
    padding-left: 0;
    transform: rotate(90deg);
  }
  .button--flat .button__icon--jump-back {
    padding-left: 0;
    padding-top: 4px;
    transform: rotate(270deg);
  }
  .button--flat__heading {
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 30px;
    margin: 0;
    color: var(--app-primary-text-color);
    text-transform: none;
  }

  @media all and (min-width: 600px) {
    .button--flat__heading {
      font-size: 22px;
    }
  }
  .button--flat__heading .button__icon {
    color: var(--app-primary-color);
    font-size: 20px;
  }
  .button--flat__heading:focus,
  .button--flat__heading:hover {
    color: var(--app-primary-text-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .button--flat__heading:focus .button__icon,
  .button--flat__heading:hover .button__icon {
    color: var(--app-primary-hover-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .button--flat svg {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
  .button--flat.button--reversed {
    color: var(--app-reverse-text-color);
  }
  .button--flat.button--reversed:hover {
    color: var(--app-button-primary-reversed);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .button--flat.button--reversed:focus {
    background-color: var(--app-button-flat-background-color);
    color: var(--app-primary-text-color);
    outline: 10px solid var(--app-button-flat-background-color);
  }
  .button--flat.button--reversed .button__icon {
    color: inherit;
  }
  .button--flat.button--dark:focus {
    outline: 10px solid rgba(32, 33, 36, 0.2);
  }
  .button--flat.button--dark .button__icon {
    color: inherit;
  }
  .button.button--dark {
    border-color: rgba(32, 33, 36, 0.4);
    color: var(--app-primary-text-color);
  }
  .button.button--dark:hover {
    color: rgba(32, 33, 36, 0.7);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .button.button--dark:focus {
    background-color: rgba(32, 33, 36, 0.2);
  }
  .button__icon--no-wrap {
    align-items: inherit;
    display: inherit;
    justify-content: inherit;
    white-space: nowrap;
  }
  .button-fab {
    align-items: center;
    background-color: var(--app-primary-color);
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    display: inline-flex;
    height: 56px;
    justify-content: center;
    outline: none;
    text-decoration: none;
    transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1),
      280ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 56px;
    will-change: box-shadow, background;
  }
  .button-fab:focus,
  .button-fab:hover {
    background-color: var(--app-primary-hover-color);
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
    text-decoration: none;
  }
  .button-fab--red {
    background-color: var(--app-button-fab-red);
  }
  .button-fab--red:focus,
  .button-fab--red:hover {
    background-color: var(--app-button-fab-red-hover);
  }
  .button-fab .material-icons {
    background: transparent;
    color: var(--app-reverse-text-color);
  }
  .button__set .button {
    margin-right: 16px;
    margin-top: 16px;
  }
  .button__set .button:first-child {
    margin-top: 24px;
  }
  .button__set .button:last-child {
    margin-right: 0;
  }
  span.button,
  span.button--flat,
  span.button--flat.button--reversed {
    cursor: inherit;
  }
  span.button,
  span.button--flat,
  span.button--flat.button--reversed,
  span.button--flat.button--reversed:focus,
  span.button--flat.button--reversed:hover,
  span.button--flat:focus,
  span.button--flat:hover,
  span.button:focus,
  span.button:hover {
    background-color: transparent;
    color: inherit;
    outline: none;
  }

  .content-button {
    margin-bottom: 34px;
  }
`;
