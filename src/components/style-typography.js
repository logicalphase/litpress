import { css } from 'lit-element';

export const TypographyStyle = css`
  /* Material Design Typography */

  /* All screens smaller than 460px */
  strong {
    font-weight: 400;
  }

  .paper-font-light {
    font-weight: 300;
  }

  .paper-font-medium {
    font-weight: 400;
  }

  .paper-font-semibold {
    font-weight: 500;
  }

  .display1 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0;
  }

  .display1 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .display2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0;
  }

  .display2 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .display3 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 44px;
    margin: 24px 0;
  }

  .display3 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .headline1 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 44px;
    margin: 0;
  }

  .headline1 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .headline2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
    margin: 0;
  }

  .headline2 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .headline3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 38px;
    margin: 0;
  }

  .headline3 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .headline4 {
    color: var(--app-primary-text-color);
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
    margin: 28px 0 0 0;
    padding-right: 0px;
  }

  .headline4 strong {
    color: var(--app-primary-color);
    font-weight: 500;
  }

  .headline4 .superscript {
    font-size: 10px;
    line-height: 1;
  }

  .quote-text {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
  }

  .quote-text strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .eyebrow {
    color: var(--app-primary-text-color);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.5px;
    line-height: 22px;
    overflow: visible;
    text-transform: uppercase;
  }

  .eyebrow strong {
    color: var(--app-primary-text-color);
    font-weight: inherit;
  }

  .eyebrow--large {
    font-family: Roboto Mono, monospace;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
    line-height: 1;
    margin: 0;
    overflow: visible;
    text-transform: uppercase;
  }

  .eyebrow--large strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  .subhead {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 26px;
  }

  .subhead strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }
  .superscript {
    color: var(--app-primary-text-thin-color);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0;
    overflow: visible;
    text-transform: uppercase;
    left: 2px;
    top: 0;
    vertical-align: text-top;
  }
  .body-text__large {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
  .body-text__large .superscript {
    font-size: 10px;
    line-height: 1;
  }
  .body-text__title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .body-text__title .superscript {
    font-size: 10px;
    line-height: 1;
  }
  .body-text,
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 185%;
  }
  .superscript,
  p .superscript {
    font-size: 10px;
    line-height: 1;
  }
  .body-text__small {
    font-size: 14px;
    font-weight: 400;
    line-height: 185%;
  }
  .body-text__small .superscript {
    font-size: 10px;
    line-height: 1;
  }
  .footnotes {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: 18px;
  }
  .link {
    color: var(--app-primary-color);
    text-decoration: none;
  }
  .link:visited {
    color: var(--app-primary-color);
  }
  .link:focus,
  .link:hover {
    text-decoration: underline;
  }
  .link:hover {
    color: var(--app-primary-hover-color);
  }
  .link:focus {
    background-color: var(--app-primary-text-color);
    color: var(--app-primary-hover-color);
    outline: 4px solid var(--app-primary-text-color);
  }
  .link--reversed {
    color: var(--app-reverse-text-color);
    text-decoration: underline;
  }
  .link--reversed:visited {
    color: var(--app-reverse-text-color);
  }
  .link--reversed:focus,
  .link--reversed:hover {
    background-color: var(--app-primary-text-color);
    color: var(--app-reverse-text-color);
    outline: 4px solid var(--app-primary-text-color);
  }

  /* Custom Font Weights */

  .paper-font-light {
    font-weight: 300;
  }

  .paper-font-medium {
    font-weight: 400;
  }

  .paper-font-semibold {
    font-weight: 500;
  }

  /* All screens larger than 460px */

  @media (min-width: 460px) {
    .display1 {
      font-size: 72px;
      letter-spacing: -0.5px;
      line-height: 84px;
    }
    .display2 {
      font-size: 64px;
      letter-spacing: -0.5px;
      line-height: 72px;
    }
    .display3 {
      font-size: 56px;
      letter-spacing: -0.5px;
      line-height: 66px;
    }
    .headline1 {
      font-size: 48px;
      font-weight: 500;
      letter-spacing: -0.5px;
      line-height: 58px;
    }
    .headline2 {
      font-size: 40px;
      letter-spacing: -0.5px;
      line-height: 52px;
    }
    .headline3 {
      font-size: 32px;
      line-height: 40px;
      margin: 24px 16px 0 0;
    }
    .headline4 {
      font-size: 20px;
    }
    .quote-text {
      color: #202124;
      font-size: 30px;
      line-height: 40px;
    }
    .subhead {
      font-size: 18px;
      line-height: 30px;
    }
    h2.headline4 {
      font-size: 24px;
      padding-right: 0px;
    }
  }
`;
