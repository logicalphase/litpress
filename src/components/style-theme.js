import { css } from 'lit-element';

export const Theme = css`
  :host {
    display: block;

    /* Theme Colors */
    --app-primary-color: #600060;
    --app-primary-hover-color: #8d008d;
    --app-secondary-color: #000000;

    --app-primary-text-color: #212121;
    --app-reverse-text-color: #ffffff;
    --app-primary-border-color: #e0e0e0;

    --app-primary-background-color: #ffffff;
    --app-secondary-background-color: #f7f7f7;
    --app-primary-navigation-background: #edf0f2;
    --app-primary-text-thin-color: rgb(95, 99, 104);

    /* Link and Accent */
    --app-primary-icon-color: #3c4043;
    --app-accent-color: var(--app-primary-color);
    --app-primary-link-color: var(--app-primary-color);
    --app-primary-icon-color: var(--app-primary-color);

    /* Drawer */
    --app-drawer-width: 326px;
    --app-drawer-background-color: var(--app-reverse-text-color);
    --app-drawer-text-color: var(--app-secondary-color);
    --app-drawer-selected-color: var(--app-primary-color);

    /* App Header */
    --app-header-background-color: var(--app-reverse-text-color);
    --app-header-text-color: var(--app-primary-text-color);
    --app-header-selected-color: var(--app-primary-color);

    /* App Footer */
    --app-footer-primary-background-color: #313131;
    --app-footer-secondary-background-color: #5f6368;
    --app-footer-text-color: var(--app-reverse-text-color);

    /* App Section Background Colors */
    --app-primary-section-background-color: #f5f5f5;
    --app-secondary-section-background-color: var(--app-reverse-text-color);

    /* Form Colors */
    --app-form-border-color: #cccccc;
    --app-form-text-color: #999999;
    --app-form-field-background-color: #ededed;

    /* Buttons */
    --app-button-disabled-background-color: #dadce0;
    --app-button-primary-reversed: rgba(255, 255, 255, 0.7);
    --app-button-secondary-border: var(--app-button-secondary-border);
    --app-button-secondary-background-color: #d8e7fb;
    --app-button-flat-background-color: #f1f3f4;
    --app-button-fab-red: #d93025;
    --app-button-fab-red-hover: #a50e0e;
  }
`;
