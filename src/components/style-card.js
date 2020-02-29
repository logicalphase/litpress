import { css } from 'lit-element';

export const Card = css`
  .section--reversed,
  .card--reversed,
  .section--reversed .section-header__eyebrow,
  .section--reversed .section-header__heading,
  .card--reversed .card__eyebrow,
  .card--reversed .card__heading {
    color: #fff;
  }

  .card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: -24px;
  }

  .card__container .card {
    flex: 0 1 100%;
    margin: 0 0 24px;
    max-width: 320px;
    min-height: 272px;
  }

  .card--four-columns .card__container {
    flex-wrap: initial;
  }

  .card--four-columns .headline1 {
    font-size: 22px;
    line-height: 30px;
  }

  .card--four-columns .headline3 {
    font-size: 28px;
    line-height: 34px;
  }

  .card--four-columns .headline4 {
    font-size: 22px;
    text-transform: uppercase;
  }

  .card--four-columns .highlight-price {
    color: #202124;
    font-size: 30px;
    font-weight: 500;
  }

  .card__container--left-aligned {
    justify-content: left;
  }

  .card__container--3up {
    margin-left: auto;
    margin-right: auto;
    max-width: 1038px;
  }

  .card {
    background-color: #fff;
    background-position: center center;
    background-size: auto 100%;
    border: 1px solid #dadce0;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 236px;
    overflow: hidden;
    padding-bottom: 24px;
    position: relative;
    transition: box-shadow 0.3s ease-out, background-size 0.3s ease-out;
  }

  .card__arrow {
    margin-top: 0;
  }

  .card:hover {
    background-size: auto 103%;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .card__icon {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    height: 32px;
    padding-top: 32px;
    width: 32px;
  }

  .card__icon svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  .card__icon svg path {
    fill: currentColor;
  }

  .card--solution {
    border: 1px solid #eee;
    border-radius: 0;
    height: 100%;
    padding: 36px 22px;
    margin: 0 -1px -1px 0;
  }

  .card__logo {
    display: flex;
    justify-content: center;
    padding: 32px 8px 0;
  }

  .card__logo.card__logo--bg {
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 160px;
    padding: 0;
  }

  .card__media {
    display: flex;
    height: 170px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .card__media--image {
    height: auto;
    object-fit: cover;
  }

  .card__media--logo {
    align-self: center;
    position: absolute;
    width: 140px;
  }

  .card__top {
    padding: 32px 24px 0;
  }

  .card__content {
    padding: 32px 24px;
  }

  .card__content .headline4 {
    color: var(--app-primary-color);
    padding-bottom: 16px;
  }

  .card__content p {
    margin: 0;
  }

  .card__content--featured {
    color: var(--app-primary-color);
    margin-bottom: 24px;
    margin-top: 24px;
  }

  .card__content__quote-text {
    padding-left: 25px;
  }

  .card__footer {
    align-self: end;
    margin-right: auto;
    margin-top: auto;
    padding: 0 24px;
  }

  .card .button {
    display: flex;
    justify-content: flex-start;
  }

  .card .button + .button {
    margin: 25px 0 0;
  }

  .card--extra-large .card__content,
  .card--extra-large .card__footer,
  .card--extra-large .card__top,
  .card--large .card__content,
  .card--large .card__footer,
  .card--large .card__top {
    padding-left: 32px;
    padding-right: 32px;
  }

  .card--extra-large .card__media,
  .card--large .card__media {
    height: 200px;
  }

  .card--no-hover {
    transition: none;
  }

  .card--no-hover:hover {
    background-size: auto;
    box-shadow: none;
  }

  .card__fab {
    position: absolute;
    right: 25px;
    top: 132px;
  }

  .card--four-columns {
    padding: 0;
  }

  @media all and (min-width: 600px) {
    .card__container .card {
      flex: 0 1 calc(50% - 24px);
      margin-left: 12px;
      margin-right: 12px;
    }
    .card__container .card--large {
      max-width: 408px;
    }
    .card__container .card--extra-large {
      max-width: 496px;
    }
    .card__container--left-aligned {
      margin-left: -12px;
      margin-right: -12px;
    }
    .card__container--left-aligned.card__container--3up {
      margin-left: -12px;
      margin-right: -12px;
    }
    .section-body,
    .card__body {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media all and (min-width: 1024px) {
    .card__container .card {
      flex-basis: calc(25% - 24px);
    }
    .card__container .card--large {
      flex-basis: calc(33.3% - 24px);
    }
    .card__container .card--extra-large {
      flex-basis: calc(50% - 24px);
    }
    .card__container--3up .card {
      flex-basis: calc(33.3% - 24px);
    }
    .card__logo.card__logo--bg {
      height: 170px;
    }
    .card__fab {
      top: 142px;
    }

    .card--four-columns {
      flex-basis: calc(50% - 36px);
      margin: 0 18px 36px;
    }

    .card--contact {
      background-color: #34a853; /* $green-500 */
      background-image: url('/images/home/contact-bg.svg');
      background-position: 50% 50%;
      background-size: cover;
    }

    .card--industry {
      background-color: #fbbc04;
      background-image: url('/images/home/industry-bg.svg');
      background-position: 50% 50%;
      background-size: cover;
    }

    .card--solution {
      border: 1px solid #eee;
      border-radius: 0;
      height: 100%;
      padding: 26px;
      margin: 0 -1px -1px 0;
    }

    .card--solution .card__icon {
      height: 72px;
      width: 72px;
      margin-bottom: 21px;
      margin-left: -4px;
      padding-top: 21px;     
    }

    .card--solution .card__link {
      text-decoration: none;
    }

    .card--solution .card__link:hover {
      text-decoration: none;
    }

    .card--solution .card__link:hover .card__heading {
      color: #202124;
    }

    .card--solution .card__body {
      flex-grow: 1;
    }

    .card--solution .card__link {
      margin-top: 24px;
    }

    .hero::before,
    .hero::after {
      height: 650px;
    }

    .hero__card {
      padding: 40px 48px;
    }

    .hero__card .button__set .button {
      margin-right: 24px;
    }

    .card--tall {
      min-height: 560px;
    }

    .card--product .card__icon {
      padding-top: 24px;
    }

    .hero__card--gcp {
      background-size: 60%;
    }

    .card--product,
    .card--product.card--solution {
      padding: 32px 56px 72px;
    }

    .card--product .card__heading,
    .card__arrow {
      padding-top: 24px;
    }
  }

  @media all and (min-width: 1440px) {
    .card--four-columns {
      flex-basis: calc(25% - 24px);
      margin: 0 12px 24px;
    }
  }
`;
