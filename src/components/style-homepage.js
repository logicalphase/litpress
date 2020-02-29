import { css } from 'lit-element';

export const HomePageStyle = css`
  /* Material Design Typography */

  .home-sections {
    margin-bottom: 100px;
  }

  .section--reversed {
    padding: 72px 0 60px;
  }

  .section--centered {
    text-align: center;
  }

  #site .section--centered .section-header__heading {
    margin: 0 auto;
    max-width: 524px;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card:hover {
    z-index: 1;
  }

  .card--center {
    text-align: center;
  }

  .card--tall {
    min-height: 480px;
  }

  .card--center .card__body {
    margin-left: auto;
    margin-right: auto;
  }

  .card--center .card__footer {
    align-self: center;
    margin-top: 0;
  }

  #site .card--center .card__heading {
    margin: 0 auto;
  }

  .card__heading {
    max-width: 360px;
    padding: 0;
  }

  .card__arrow {
    margin-top: 8px;
  }

  .card__link {
    position: static;
  }

  .card__link::after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    overflow: visible;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .card__link--text {
    color: unset;
  }

  .home-sections .section-events {
    margin-top: 40px;
  }

  .section-events {
    position: relative;
  }

  .section-events.next::before,
  .section-events.next::after {
    background-repeat: no-repeat;
    background-size: 36%;
    content: '';
    display: block;
    position: absolute;
    top: -40px;
    z-index: -1;
  }

  .home-sections .section-customers__container {
    background-color: var(--app-secondary-background-color);
  }

  #site .section-customers__container .section-header {
    margin-bottom: 20px;
    padding-bottom: 0;
  }

  .section-customers__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 24px auto 36px;
    padding: 0;
  }

  .section-customers__logos li {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 8px 18px;
  }

  .section-customers__logos .section-customers__logos__logo--no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .section-customers__logos img {
    max-width: none;
  }

  .card--contact {
    background-color: #34a853; /* $green-500 */
    background-image: url('/images/home/contact-bg.svg');
    background-position: 50% 50%;
    background-size: cover;
  }

  .section-header.section-header--solutions {
    padding: 0 36px 36px 0;
  }

  .card--solution {
    border: 1px solid #eee;
    border-radius: 0;
    height: 100%;
    padding: 36px;
    margin: 0 -1px -1px 0;
  }

  .card--solution.card--product {
    padding: 24px 36px 40px;
  }

  .card--industry {
    background-color: #fbbc04;
    background-image: url('/images/home/industry-bg.svg');
    background-position: 50% 50%;
    background-size: cover;
  }

  .card--solution .card__eyebrow {
    padding-bottom: 20px;
  }

  .card--solution .card__icon {
    height: 72px;
    margin-bottom: 16px;
    margin-left: 0px;
    padding-top: 0;
    width: 72px;
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
`;
