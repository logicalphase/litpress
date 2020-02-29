import { HP_HOST } from './config';

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { LayoutStyle } from './style-layout';
import { ButtonStyle } from './style-button';
import { GridStyle } from './style-grid';
import { TypographyStyle } from './style-typography';
import { Card } from './style-card';
import { ElevationStyle } from './style-elevation';
import { SharedStyles } from './style-shared';
import { HomePageStyle } from './style-homepage';

const displayType = css`block`;

class Home extends PageViewElement {
  static get styles() {
    return [
      ButtonStyle,
      GridStyle,
      TypographyStyle,
      LayoutStyle,
      Card,
      ElevationStyle,
      SharedStyles,
      HomePageStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }
        /* Smaller than 460 */

        .wordpress-animated-bg {
          display: none;
        }

        .industry {
          background-color: var(--app-primary-color);
          color: var(--app-reverse-text-color);
        }
        .industry header .eyebrow,
        .industry .headline4,
        .industry .card__body {
          color: var(--app-reverse-text-color) !important;
        }

        .grid--alternate {
          grid-column-gap: 15px;
          grid-template-columns: repeat(1, 1fr);
        }

        svg.section-right-image {
          width: 100%;
        }

        .clients, .partners{
          display:none;
        }

        .card .section-right-image {
          width: 100%;
          height: auto;
        }

        .headline3 {
          margin-top: 24px;
        }

        .link .headline4 {
          margin-right: 14px;
        }

        .section-elevated-padding {
          padding: 34px 24px 24px 24px;
        }

        .grid__col--horizontal-center {
          justify-self: inherit;
        }

        path {
          stroke-width: 2;
        }

        .wp-line {
          animation: wp-draw 4s ease-in infinite;
        }

        .purple-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 3.7s linear infinite;
          animation-direction: alternate;
        }

        .green-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 4s linear infinite;
          animation-direction: alternate;
        }

        .yellow-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 3s linear infinite;
          animation-direction: alternate;
        }

        .orange-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 3.4s linear infinite;
          animation-direction: alternate;
        }

        @keyframes draw {
          from {
            stroke-dashoffset: 0;
          }
        }
        @keyframes wp-draw {
          0% {
            stroke: #600066;
            opacity: 1;
          }
          25% {
            stroke: #f4b400;
          }
          50% {
            stroke: #008c3a;
          }
          75% {
            stroke: #ff3102;
          }
          100% {
            stroke: #600066;
          }
          0% {
            stroke: #600066;
            opacity: 0.9;
          }
        }
        @keyframes FadeIn {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }

          85% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (min-width: 460px) {
          .hero {
            padding-bottom: 60px;
          }

          .display3 {
            font-size: 48px;
            letter-spacing: -0.5px;
            line-height: 66px;
          }

          .wordpress-animated-bg {
            display: inline-block;
            position: relative;
            top: -79px;
            right: 103px;
            min-width: 500px;
            min-height: 500px;
            z-index: 50;
          }

          .content-set {
            padding: 16px;
          }

          .header-image {
            padding: 0px;
            top: 95px;
            max-height: 340px;
            max-width: 340px;
            position: relative;
            left: 60px;
            margin-bottom: 30px;
          }

          section.copy {
            margin: 0;
          }

          .section__spacer {
            margin-bottom: 26px;
            margin-top: 30px;
          }
          .grid-row-start {
            grid-row-start: 1;
          }

          .clients, .partners{
            display:block;
          }

          .content-grid-image {
            padding: 44px 0 24px 0;
          }

          .copy {
            margin: 0 auto;
            text-align: center;
          }

          .copy img {
            display:inline-block;
            height: 120px;
            max-height: 115px;
            width: inherit;
            padding: 14px;
          }

          .card .link .headline4 {
            margin-right: 14px;
          }
        }

        @media only screen and (min-width: 800px) {
          .grid--alternate.grid--vertical-center,
          .grid.grid--vertical-center {
            align-items: center;
          }

          .grid--alternate {
            grid-column-gap: 15px;
            grid-template-columns: repeat(12, 1fr);
          }
        }

        @media only screen and (min-width: 1024px) {
          .display3 {
            font-size: 54px;
            letter-spacing: -0.5px;
            line-height: 70px;
          }
          .wordpress-animated-bg {
            display: inline-block;
            position: relative;
            top: -79px;
            right: 103px;
            min-width: 500px;
            min-height: 500px;
            z-index: 50;
          }

          .section-right-image {
            width: 370px;
            height: auto;
            margin-left: 34px;
            object-fit: var(--lazy-image-fit);
            position: relative;
          }

          .copy {
            margin: 0 auto;
            text-align: center;
          }

          .copy img {
            display:inline-block;
            height: 120px;
            max-height: 115px;
            width: inherit;
            padding: 14px;
          }

          .section-header.section-header--solutions {
            padding: 0 24px 0 4px;
          }

          .promo-box-light p {
            padding-right: 34px;
          }

          .section-elevated-padding {
            padding: 24px 0 24px 0;
          }

          .hero::before {
            height: 454px;
            width: 680px;
            content: ' ';
            background: url('/images/header/homepage-bg-left.svg') no-repeat;
            position: absolute;
            left: -112px;
            top: -30px;
            z-index: 0;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'Digital Experience Platform and Services for WordPress',
      description: 'Home page',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="home">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="content-set">
                    <h1 class="section-header__eyebrow eyebrow">LitPress</h1>
                    <h2 class="display3">
                      Headless Frontend Made with LitElement, WP-REST API, and Web Components.
                    </h2>
                    <p class="headline4 why-google__intro-text">
                      Fast. Functional. Compliant.
                    </p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5 header-image">
              <svg width="400" height="400" version="1.1" viewBox="0 0 740 740" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="ap6iufGz4" d="m400.34 1.23 14.93 1.51 14.74 2.1 14.55 2.68 14.35 3.23 14.13 3.79 13.9 4.33 13.66 4.85 13.41 5.36 13.14 5.87 12.87 6.35 12.59 6.84 12.28 7.3 11.97 7.76 11.65 8.2 11.31 8.63 10.96 9.05 10.61 9.45 10.23 9.85 9.85 10.24 9.46 10.6 9.04 10.96 8.63 11.32 8.2 11.64 7.76 11.97 7.3 12.29 6.84 12.58 6.35 12.87 5.87 13.14 5.36 13.41 4.85 13.66 4.33 13.9 3.79 14.13 3.23 14.35 2.68 14.55 2.1 14.74 1.51 14.93 0.92 15.09 0.31 15.25-0.31 15.25-0.92 15.1-1.51 14.93-2.1 14.74-2.68 14.55-3.23 14.35-3.79 14.13-4.32 13.91-4.86 13.66-5.36 13.41-5.87 13.15-6.35 12.87-6.84 12.58-7.3 12.28-7.76 11.97-8.2 11.65-8.63 11.31-9.04 10.96-9.46 10.61-9.85 10.23-10.23 9.85-10.61 9.45-10.96 9.05-11.31 8.63-11.65 8.2-11.97 7.75-12.28 7.3-12.58 6.84-12.87 6.35-13.15 5.87-13.41 5.36-13.66 4.85-13.9 4.32-14.13 3.79-14.35 3.23-14.55 2.68-14.74 2.1-14.93 1.51-15.09 0.92-15.25 0.31-15.25-0.31-15.1-0.92-14.92-1.51-14.75-2.1-14.55-2.68-14.35-3.23-14.13-3.79-13.91-4.32-13.66-4.85-13.41-5.36-13.14-5.87-12.87-6.35-12.59-6.84-12.28-7.3-11.97-7.75-11.65-8.2-11.31-8.63-10.96-9.05-10.6-9.45-10.24-9.85-9.85-10.24-9.45-10.6-9.05-10.96-8.63-11.31-8.19-11.65-7.76-11.97-7.3-12.28-6.83-12.58-6.36-12.87-5.87-13.15-5.36-13.41-4.85-13.66-4.32-13.91-3.79-14.13-3.23-14.35-2.68-14.55-2.1-14.74-1.51-14.93-0.92-15.1-0.31-15.25 0.31-15.25 0.92-15.09 1.51-14.93 2.1-14.74 2.68-14.55 3.23-14.35 3.79-14.13 4.32-13.9 4.85-13.66 5.36-13.41 5.87-13.14 6.36-12.87 6.83-12.58 7.3-12.29 7.76-11.97 8.19-11.64 8.63-11.32 9.05-10.96 9.45-10.6 9.85-10.24 10.24-9.85 10.6-9.45 10.96-9.05 11.31-8.63 11.65-8.2 11.97-7.76 12.28-7.3 12.59-6.84 12.87-6.35 13.14-5.87 13.41-5.36 13.66-4.85 13.91-4.33 14.13-3.79 14.35-3.23 14.55-2.68 14.75-2.1 14.92-1.51 15.1-0.92 15.25-0.31 15.25 0.31 15.09 0.92zm-124.52 697.05 2.3 0.65 2.31 0.63 2.32 0.62 2.32 0.61 2.33 0.59 2.34 0.57 2.34 0.56 2.35 0.54 2.36 0.52 2.36 0.51 2.37 0.49 2.37 0.48 2.38 0.46 2.38 0.44 2.39 0.43 2.4 0.41 2.4 0.39 2.41 0.38 2.41 0.36 2.42 0.34 2.43 0.32 2.43 0.31 2.43 0.3 2.44 0.27 2.45 0.26 2.45 0.24 2.45 0.22 2.46 0.21 2.47 0.19 2.47 0.17 2.47 0.15 2.48 0.14 2.49 0.11 2.49 0.1 2.49 0.08 2.5 0.07 2.5 0.04 2.51 0.03 2.51 0.01 2.98-0.01 2.97-0.04 2.96-0.07 2.96-0.08 2.96-0.12 2.94-0.14 2.94-0.16 2.94-0.19 2.92-0.22 2.92-0.23 2.92-0.27 2.9-0.29 2.9-0.31 2.89-0.34 2.89-0.36 2.87-0.38 2.87-0.41 2.86-0.43 2.86-0.46 2.84-0.48 2.84-0.5 2.83-0.53 2.82-0.55 2.81-0.57 2.81-0.6 2.8-0.62 2.78-0.64 2.78-0.66 2.77-0.69 2.76-0.71 2.75-0.73 2.74-0.76 2.74-0.77 2.72-0.8 2.71-0.82 2.71-0.85 2.69-0.86 2.69-0.89 2.67-0.91 2.67-0.93-0.07-0.1-0.07-0.11-0.06-0.11-0.07-0.11-0.06-0.11-0.07-0.11-0.06-0.11-0.07-0.11-0.06-0.11-0.07-0.11-0.06-0.11-0.06-0.12-0.07-0.11-0.12-0.22-0.07-0.12-0.12-0.22-0.06-0.12-0.06-0.11-0.12-0.24-0.06-0.11-0.18-0.36-0.06-0.11-0.12-0.24-0.05-0.12-0.06-0.12-0.05-0.13-0.06-0.12-0.05-0.12-0.06-0.13-0.05-0.12-0.06-0.12-0.1-0.26-0.05-0.12-104.96-287.54-102.49 297.69 2.3 0.67zm-220.51-460.85-1.34 3.23-1.31 3.24-1.27 3.26-1.25 3.28-1.21 3.29-1.18 3.31-1.15 3.32-1.11 3.34-1.08 3.35-1.05 3.37-1.02 3.39-0.98 3.39-0.94 3.41-0.91 3.43-0.88 3.44-0.84 3.45-0.81 3.47-0.77 3.48-0.74 3.49-0.7 3.51-0.67 3.52-0.63 3.53-0.59 3.54-0.55 3.56-0.52 3.57-0.48 3.58-0.45 3.59-0.41 3.6-0.37 3.62-0.33 3.63-0.29 3.63-0.26 3.65-0.21 3.66-0.18 3.67-0.14 3.67-0.1 3.69-0.06 3.7-0.02 3.71 0.15 10.1 0.44 10.03 0.72 9.95 1.01 9.87 1.28 9.79 1.56 9.7 1.83 9.6 2.09 9.51 2.36 9.41 2.62 9.3 2.87 9.19 3.12 9.08 3.37 8.96 3.6 8.84 3.85 8.72 4.08 8.58 4.31 8.46 4.53 8.31 4.76 8.17 4.98 8.03 5.18 7.88 5.4 7.72 5.6 7.57 5.81 7.4 6 7.24 6.2 7.07 6.38 6.89 6.57 6.72 6.75 6.53 6.93 6.35 7.1 6.16 7.27 5.96 7.43 5.76 7.6 5.56 7.75 5.36 7.9 5.14 8.06 4.93 8.2 4.72 8.33 4.48 8.48 4.26-162.89-446.28-1.4 3.2-1.38 3.21zm614.53-29.62 0.1 0.82 0.11 0.83 0.2 1.66 0.1 0.84 0.27 2.52 0.09 0.85 0.08 0.85 0.08 0.86 0.08 0.85 0.08 0.86 0.07 0.87 0.07 0.86 0.07 0.87 0.06 0.88 0.06 0.87 0.12 1.76 0.15 2.67 0.04 0.89 0.08 1.8 0.04 0.91 0.06 1.82 0.02 0.91 0.03 0.92 0.02 0.92 0.01 0.93 0.02 0.92 0.01 0.94 0.01 0.93v0.94 0.94l-0.01 1.76-0.05 1.84-0.08 1.89-0.12 1.97-0.14 2.03-0.18 2.09-0.21 2.16-0.25 2.23-0.27 2.3-0.31 2.36-0.34 2.43-0.38 2.49-0.4 2.56-0.44 2.63-0.47 2.69-0.51 2.76-0.53 2.83-0.57 2.89-0.6 2.95-0.64 3.03-0.66 3.09-0.7 3.16-0.73 3.22-0.77 3.29-0.79 3.36-0.83 3.42-0.86 3.49-0.9 3.55-0.92 3.62-0.96 3.69-0.99 3.75-1.03 3.82-1.05 3.89-1.09 3.95-1.12 4.02-1.16 4.08-1.18 4.15-1.22 4.22-1.25 4.29-1.29 4.35-104.28 301.53 7.55-4.53 7.42-4.72 7.29-4.9 7.15-5.09 7.02-5.26 6.88-5.43 6.73-5.61 6.58-5.77 6.44-5.94 6.28-6.1 6.12-6.26 5.96-6.41 5.8-6.56 5.63-6.72 5.46-6.85 5.28-7 5.11-7.14 4.93-7.27 4.74-7.4 4.56-7.54 4.37-7.65 4.17-7.78 3.98-7.9 3.77-8.02 3.57-8.12 3.37-8.24 3.16-8.34 2.94-8.44 2.73-8.54 2.5-8.64 2.29-8.73 2.05-8.82 1.83-8.91 1.59-8.99 1.36-9.07 1.12-9.15 0.88-9.22 0.62-9.29 0.38-9.35 0.13-9.42-0.03-4.45-0.08-4.43-0.14-4.42-0.2-4.41-0.25-4.39-0.31-4.37-0.36-4.36-0.42-4.35-0.47-4.32-0.52-4.31-0.58-4.3-0.63-4.28-0.69-4.25-0.73-4.25-0.79-4.22-0.84-4.21-0.89-4.18-0.94-4.17-1-4.15-1.04-4.12-1.09-4.11-1.15-4.09-1.19-4.07-1.24-4.04-1.29-4.03-1.34-4-1.38-3.98-1.44-3.96-1.48-3.93-1.53-3.91-1.57-3.89-1.62-3.87-1.67-3.84-1.71-3.82-1.76-3.79-1.8-3.76-1.84-3.75-1.89-3.71-1.94-3.69-1.98-3.66 0.12 0.81 0.11 0.83zm-317.62-178.83-8.8 0.56-8.74 0.79-8.68 1-8.6 1.22-8.54 1.44-8.47 1.64-8.39 1.85-8.31 2.06-8.22 2.25-8.15 2.46-8.06 2.65-7.96 2.85-7.88 3.03-7.78 3.23-7.68 3.41-7.58 3.59-7.48 3.77-7.37 3.94-7.27 4.13-7.15 4.29-7.03 4.46-6.92 4.62-6.8 4.79-6.67 4.95-6.55 5.1-6.42 5.26-6.29 5.42-6.16 5.56-6.02 5.7-5.88 5.85-5.73 5.99-5.6 6.13-5.44 6.26-5.29 6.39-5.14 6.52-4.99 6.65-4.82 6.77-4.66 6.9 0.6 0.02 0.6 0.01 0.59 0.02 0.6 0.01 1.18 0.04 0.59 0.01 0.59 0.02 0.58 0.01 0.58 0.02 1.16 0.02 0.57 0.02 1.14 0.02 0.57 0.02 1.68 0.03 1.65 0.03 0.54 0.01 0.55 0.01 0.53 0.01 0.54 0.01 0.53 0.01h0.53l1.04 0.02h0.52l0.51 0.01h0.51 0.51l0.5 0.01h0.5 0.5 0.49l0.48 0.01h0.48l2.72-0.01 2.78-0.03 2.85-0.03 2.89-0.06 2.94-0.06 2.98-0.08 3.01-0.09 3.03-0.1 3.05-0.11 6.12-0.24 3.06-0.14 3.05-0.14 3.03-0.15 3.01-0.15 2.97-0.15 2.94-0.16 2.89-0.16 2.83-0.16 2.78-0.17 2.71-0.16 2.63-0.17 2.55-0.16 2.47-0.16 2.37-0.15 2.27-0.15 2.16-0.15 2.04-0.14 1.92-0.13 1.79-0.13 1.66-0.12 1.5-0.11 1.36-0.1 1.2-0.09 1.03-0.08 0.87-0.06 0.68-0.05 0.49-0.04 0.31-0.02 0.1-0.01 1.35-0.03 1.28 0.08 1.23 0.17 1.16 0.26 1.1 0.35 1.04 0.42 0.97 0.51 0.91 0.57 0.85 0.64 0.78 0.69 0.72 0.76 0.66 0.8 0.58 0.85 0.53 0.89 0.45 0.93 0.39 0.96 0.32 0.98 0.26 1 0.18 1.02 0.12 1.03 0.05 1.04-0.02 1.04-0.09 1.03-0.16 1.02-0.23 1.02-0.31 0.99-0.37 0.97-0.44 0.94-0.52 0.9-0.59 0.87-0.67 0.82-0.74 0.78-0.81 0.72-0.88 0.66-0.97 0.61-1.03 0.53-1.12 0.46-1.18 0.38-1.27 0.29-1.34 0.21-0.04 0.01-0.1 0.01-0.17 0.02-0.23 0.03-0.3 0.03-0.36 0.04-0.42 0.04-0.47 0.06-0.54 0.05-0.59 0.07-0.64 0.06-0.7 0.08-0.75 0.07-0.79 0.09-0.85 0.08-0.89 0.09-0.93 0.09-0.98 0.1-1.02 0.09-1.07 0.1-1.09 0.11-1.14 0.1-1.17 0.11-1.21 0.1-1.24 0.11-1.27 0.11-1.3 0.11-1.32 0.11-1.36 0.11-1.38 0.1-1.4 0.11-1.42 0.11-1.44 0.1-1.46 0.1-1.48 0.1-1.5 0.1-1.51 0.1-1.52 0.09-1.53 0.09-1.54 0.08 124.38 369.84 74.71-224.07-53.15-145.77-1.38-0.08-2.74-0.18-1.36-0.1-1.35-0.1-2.66-0.2-1.31-0.1-1.29-0.11-1.28-0.11-1.26-0.1-1.24-0.11-1.21-0.11-1.19-0.11-1.17-0.11-1.14-0.11-1.11-0.1-1.08-0.11-1.05-0.1-1.02-0.11-0.98-0.1-0.94-0.09-0.91-0.1-0.87-0.09-0.83-0.09-0.79-0.08-0.74-0.09-0.7-0.07-0.65-0.08-0.6-0.06-0.55-0.07-0.5-0.05-0.45-0.06-0.39-0.04-0.34-0.04-0.28-0.03-0.22-0.03-0.16-0.02-0.09-0.01-0.04-0.01-1.33-0.13-1.27-0.22-1.18-0.32-1.11-0.4-1.04-0.48-0.96-0.56-0.88-0.63-0.82-0.69-0.73-0.75-0.67-0.81-0.59-0.85-0.52-0.9-0.45-0.94-0.37-0.97-0.31-0.99-0.23-1.02-0.16-1.04-0.09-1.05-0.03-1.05 0.05-1.06 0.12-1.05 0.18-1.04 0.25-1.03 0.32-1.01 0.39-0.99 0.45-0.95 0.52-0.92 0.59-0.88 0.65-0.83 0.72-0.78 0.78-0.72 0.85-0.66 0.91-0.6 0.98-0.52 1.04-0.45 1.1-0.36 1.17-0.27 1.22-0.18 1.29-0.08 1.35 0.02 0.11 0.01 0.31 0.02 0.5 0.04 0.69 0.05 0.88 0.06 1.05 0.08 1.22 0.09 1.37 0.1 3.2 0.23 1.81 0.13 1.94 0.13 2.06 0.14 2.18 0.15 2.28 0.15 2.39 0.15 2.47 0.16 2.57 0.16 2.64 0.17 2.71 0.16 2.77 0.17 2.83 0.16 2.87 0.16 2.92 0.16 2.95 0.15 2.98 0.15 2.99 0.15 6.02 0.28 6 0.24 2.97 0.11 2.95 0.1 2.92 0.09 2.87 0.08 2.83 0.06 2.77 0.06 2.71 0.03 2.63 0.03 2.56 0.01 2.71-0.01 2.78-0.03 2.84-0.03 2.9-0.06 2.93-0.06 2.98-0.08 3.01-0.09 3.03-0.1 3.05-0.11 6.12-0.24 3.06-0.14 3.05-0.14 3.03-0.15 3-0.15 2.98-0.15 2.93-0.16 2.89-0.16 2.84-0.16 2.78-0.17 2.71-0.16 2.63-0.17 2.56-0.16 2.46-0.16 2.38-0.15 2.27-0.15 2.16-0.15 2.04-0.14 1.92-0.13 1.79-0.13 1.66-0.12 1.51-0.11 1.35-0.1 1.2-0.09 1.04-0.08 0.86-0.06 0.68-0.05 0.5-0.04 0.3-0.02 0.11-0.01 1.34-0.03 1.29 0.08 1.22 0.17 1.16 0.26 1.1 0.35 1.04 0.42 0.97 0.51 0.91 0.57 0.85 0.64 0.78 0.69 0.72 0.76 0.65 0.8 0.58 0.85 0.53 0.89 0.45 0.93 0.39 0.96 0.32 0.98 0.25 1 0.18 1.02 0.12 1.03 0.05 1.04-0.03 1.04-0.09 1.03-0.16 1.02-0.23 1.02-0.31 0.99-0.37 0.97-0.45 0.94-0.52 0.9-0.59 0.87-0.67 0.82-0.74 0.78-0.81 0.72-0.88 0.66-0.97 0.61-1.03 0.53-1.12 0.46-1.18 0.38-1.27 0.29-1.34 0.21-0.03 0.01-0.11 0.01-0.17 0.02-0.23 0.03-0.29 0.03-0.36 0.04-0.42 0.04-0.48 0.06-0.53 0.05-0.59 0.07-0.64 0.06-0.7 0.08-0.74 0.07-0.8 0.09-0.84 0.08-0.89 0.09-0.93 0.09-0.98 0.1-1.02 0.09-1.06 0.1-1.1 0.11-1.13 0.1-1.17 0.11-1.21 0.1-1.24 0.11-1.26 0.11-1.3 0.11-1.33 0.11-1.35 0.11-1.37 0.1-1.4 0.11-1.43 0.11-1.44 0.1-1.46 0.1-1.48 0.1-1.49 0.1-1.51 0.1-1.52 0.09-1.53 0.09-1.54 0.08 123.41 367.03 34.08-113.77 1.28-3.31 1.25-3.29 1.21-3.26 1.19-3.23 1.15-3.2 1.12-3.17 1.09-3.15 1.05-3.11 1.03-3.09 0.99-3.06 0.95-3.03 0.93-3 0.89-2.97 0.86-2.95 0.83-2.91 0.8-2.89 0.76-2.86 0.73-2.83 0.7-2.8 0.67-2.77 0.63-2.75 0.61-2.72 0.56-2.68 0.54-2.66 0.51-2.64 0.47-2.6 0.44-2.57 0.4-2.55 0.38-2.52 0.34-2.49 0.31-2.46 0.28-2.43 0.24-2.41 0.21-2.38 0.18-2.35 0.15-2.32 0.11-2.29 0.08-2.26 0.05-2.24 0.02-2.21-0.03-3.14-0.08-3.09-0.14-3.05-0.19-3-0.24-2.95-0.29-2.91-0.33-2.86-0.39-2.82-0.42-2.77-0.47-2.74-0.51-2.68-0.55-2.65-0.58-2.61-0.62-2.56-0.66-2.52-0.69-2.49-0.71-2.44-0.75-2.41-0.78-2.37-0.8-2.33-0.82-2.3-0.85-2.26-0.87-2.22-0.89-2.19-0.91-2.16-0.92-2.12-0.94-2.09-0.94-2.06-0.97-2.02-0.97-2-0.97-1.96-0.99-1.94-0.99-1.9-0.99-1.88-0.99-1.85-1-1.82-0.99-1.79-0.99-1.77-0.98-1.74-0.98-1.72-1.29-2.1-1.29-2.08-1.28-2.07-1.28-2.06-1.26-2.04-1.25-2.04-1.24-2.02-1.23-2.01-1.21-2-1.2-1.99-1.17-1.98-1.16-1.98-1.13-1.97-1.12-1.96-1.09-1.96-1.06-1.96-1.04-1.95-1.01-1.95-0.98-1.95-0.94-1.95-0.92-1.95-0.88-1.95-0.85-1.95-0.81-1.95-0.77-1.96-0.73-1.96-0.7-1.96-0.65-1.98-0.6-1.97-0.56-1.99-0.52-1.99-0.46-2.01-0.42-2.01-0.36-2.02-0.32-2.04-0.26-2.05-0.2-2.06-0.15-2.07-0.09-2.09-0.03-2.1 0.05-2.35 0.13-2.34 0.22-2.33 0.3-2.3 0.39-2.3 0.47-2.27 0.55-2.24 0.63-2.22 0.71-2.19 0.79-2.17 0.86-2.12 0.94-2.1 1.01-2.05 1.08-2.01 1.16-1.97 1.22-1.92 1.29-1.87 1.36-1.83 1.43-1.77 1.49-1.71 1.55-1.65 1.61-1.59 1.68-1.53 1.73-1.46 1.79-1.4 1.85-1.32 1.9-1.24 1.96-1.18 2.01-1.09 2.06-1.01 2.11-0.92 2.16-0.84 2.21-0.75 2.25-0.66 2.3-0.56 2.34-0.47 2.38-0.37 2.43-0.26 2.46-0.17 2.5-0.05h0.11 0.11 0.11l0.11 0.01h0.11 0.11 0.11l0.11 0.01h0.11l0.11 0.01h0.11l0.22 0.02h0.11l0.33 0.03h0.11l0.66 0.06 0.1 0.01 0.66 0.06h0.11l0.88 0.08-4.59-4.14-4.67-4.05-4.74-3.97-4.81-3.88-4.89-3.8-4.95-3.71-5.03-3.63-5.09-3.53-5.15-3.44-5.23-3.36-5.28-3.25-5.35-3.17-5.42-3.07-5.47-2.97-5.53-2.88-5.59-2.78-5.65-2.67-5.71-2.58-5.76-2.47-5.81-2.38-5.87-2.26-5.92-2.16-5.97-2.06-6.02-1.95-6.07-1.83-6.11-1.73-6.16-1.62-6.2-1.5-6.25-1.39-6.29-1.28-6.34-1.16-6.37-1.04-6.41-0.92-6.45-0.81-6.49-0.68-6.52-0.56-6.55-0.44-6.59-0.32-6.63-0.19-6.65-0.06-8.92 0.11-8.86 0.35z"/>
                </defs>
                <use fill="#600060" xlink:href="#ap6iufGz4"/>
              </svg>
              </div>
            </div>
          </header>
          <div class="section">
            <div class="section__spacer">
              <section class="copy">
                <div
                  class="grid--alternate copy__inner copy--60-40 grid--vertical-center mdc-elevation--z14 section-elevated-padding"
                >
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" version="1.1" viewBox="0 0 200 200"><defs><path id="aM5HJbV39" d="m0 0h200v200h-200v-200z"/></defs><use fill-opacity="0" stroke="#484848" xlink:href="#aM5HJbV39"/></svg>
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start promo-box-light"
                  >
                    <h3 class="headline3" id="engaging-experiences-regardless-screen-size">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="home-sections home-v">
            <section>
              <div class="grid grid__no-gap">
                <header
                  class="grid__col is-6 is-4__large section-header section-header--solutions"
                >
                  <h2 class="section-header__eyebrow eyebrow">
                    The LitPress difference
                  </h2>
                  <h3
                    class="section-header__heading headline3"
                    id="wordpress-you-need-solutions-you-deserve"
                  >
                    A smarter, faster, superior WordPress.
                  </h3>
                  <div class="section-header__link">
                    <a
                      href="/"
                      class="button button--primary"
                      track-type="navigateTo"
                      track-name="home"
                      track-metadata-position="banner"
                      >Need help? Let's talk!</a
                    >
                  </div>
                </header>
                <div class="grid__col is-6 is-4__large">
                  <section class="card card--solution">
                    <header>
                      <h2 class="card__eyebrow eyebrow">Lorem ipsum dolor</h2>
                      <img
                        class="card__icon"
                        src="/images/icons/icon-pagespeed-62x62.svg"
                        height="72"
                        width="72"
                        alt="WordPress PageSpeed Lighthouse Performance"
                        loading="lazy"
                      />
                      <a
                        class="link card__link card__link-text"
                        href="pagespeed/"
                        track-type="navigateTo"
                        track-name="solution"
                        track-metadata-eventdetail="pagespeed-performance"
                        track-metadata-position="body"
                      >
                        <h3 class="card__heading headline4" id="pwa">
                          HTML Ipsum Presents
                        </h3>
                      </a>
                    </header>
                    <p class="card__body">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div class="card__arrow">
                      <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <title>Arrow</title>
                        <polyline
                          points="1,9 17,9"
                          stroke="var(--app-primary-icon-color)"
                          stroke-width="2"
                          fill="none"
                        ></polyline>
                        <polyline
                          points="9,1 17,9 9,17"
                          stroke="var(--app-primary-icon-color)"
                          stroke-width="2"
                          fill="none"
                        ></polyline>
                      </svg>
                    </div>
                  </section>
                </div>
                <div class="grid__col is-6 is-4__large">
                  <section class="card card--solution">
                    <header>
                      <h2 class="card__eyebrow eyebrow">Lorem ipsum dolor</h2>
                      <img
                        class="card__icon"
                        src="/images/icons/icon-pagespeed-62x62.svg"
                        height="72"
                        width="72"
                        alt="WordPress PageSpeed Lighthouse Performance"
                        loading="lazy"
                      />
                      <a
                        class="link card__link card__link-text"
                        href="design/"
                        track-type="navigateTo"
                        track-name="solution"
                        track-metadata-eventdetail="design"
                        track-metadata-position="body"
                      >
                        <h3 class="card__heading headline4" id="pwa">
                          HTML Ipsum Presents
                        </h3>
                      </a>
                    </header>
                    <p class="card__body">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div class="card__arrow">
                      <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <title>Arrow</title>
                        <polyline
                          points="1,9 17,9"
                          stroke="var(--app-primary-icon-color)"
                          stroke-width="2"
                          fill="none"
                        ></polyline>
                        <polyline
                          points="9,1 17,9 9,17"
                          stroke="var(--app-primary-icon-color)"
                          stroke-width="2"
                          fill="none"
                        ></polyline>
                      </svg>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-home', Home);
