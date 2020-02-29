import { css } from 'lit-element';

export const LayoutStyle = css`
  .main-content {
    margin: 40px auto;
    max-width: 1400px;
    padding: 0 24px;
    position: relative;
  }

  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .visually-show {
    position: static;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto;
  }

  .text-left {
    text-align: left;
  }

  .text-right,
  [dir='rtl'] .text-left {
    text-align: right;
  }

  [dir='rtl'] .text-right {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-justify {
    text-align: justify;
  }

  .valign-bottom {
    vertical-align: bottom;
  }

  .valign-middle {
    vertical-align: middle;
  }

  .valign-top {
    vertical-align: top;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .section {
    padding: 42px 0px;
  }

  .full-width-page .main-content,
  .landing-page .main-content,
  .producpage .main-content {
    max-width: 1592px;
    padding: 0 120px;
  }

  .article-inner,
  .main-content {
    min-height: calc(100vh - 582px);
  }

  .header-no-upper-tabs .article-inner,
  .header-no-upper-tabs .main-content {
    min-height: calc(100vh - 526px);
  }

  .header-no-lower-tabs .article-inner,
  .header-no-lower-tabs .main-content {
    min-height: calc(100vh - 562px);
  }

  .header-no-upper-tabs.header-no-lower-tabs .article-inner,
  .header-no-upper-tabs.header-no-lower-tabs .main-content {
    min-height: calc(100vh - 478px);
  }

  .home-page.header-no-upper-tabs.header-no-lower-tabs .main-content {
    min-height: calc(100vh - 710px);
  }

  .404.header-no-upper-tabs .article-inner,
  .404.header-no-upper-tabs .main-content,
  .404.header-no-lower-tabs .article-inner,
  .404.header-no-lower-tabs .main-content,
  .404.header-no-upper-tabs.header-no-lower-tabs .article-inner,
  .404.header-no-upper-tabs.header-no-lower-tabs .main-content {
    min-height: calc(100vh - 356px);
  }

  .site-mask,
  .ui-widget-overlay {
    background: #212121;
    cursor: pointer;
    display: none;
    height: 100vh;
    opacity: 0.5;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10011;
  }

  .ui-widget-overlay {
    display: block;
  }

  .article {
    margin-left: 320px;
    position: relative;
    width: calc(100% - 496px);
  }

  .article-inner {
    float: left;
    width: 100%;
  }
  .main-content {
    padding: 0 24px;
  }

  .full-width-page .main-content {
    margin-bottom: 0;
  }

  .full-width-page .main-content {
    margin: 0 auto;
  }

  .full-width-page .banner {
    margin-top: 0;
  }

  .hero .content-set {
    margin: 40px 0;
  }

  .hero .content-set p {
    margin: 16px 0 0;
  }

  .hero .content-set hr {
    border-top-color: #fbbc04;
    border-top-style: solid;
    border-top-width: 2px;
    margin: 32px auto;
    width: 160px;
  }

  .section-header__link {
    padding-top: 40px;
  }
  .content-header__link {
    padding-top: 30px;
  }

  .hero .content-set hr.blue {
    border-top-color: #4285f4;
  }

  .hero .content-set hr.green {
    border-top-color: #34a853;
  }

  .hero .content-set hr.red {
    border-top-color: #ea4335;
  }

  .hero .content-set hr.yellow {
    border-top-color: #fbbc04;
  }

  .hero__content--background .content-set {
    margin-left: 16px;
    margin-right: 16px;
  }

  .hero__content--background p {
    color: inherit;
  }

  .full-bleed,
  .full-bleed--bg,
  .full-bleed--constrained {
    margin-left: calc(50% - 49.4vw);
    margin-right: calc(50% - 49.4vw);
  }

  .full-bleed--bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: calc(50vw - 49.4%);
    padding-right: calc(50vw - 49.4%);
  }

  .full-bleed p {
    color: inherit;
  }

  .full-width-page .main-content,
  .landing-page .main-content,
  .producpage .main-content {
    padding: 0 24px;
  }

  @media screen and (min-width: 600px) {
    .full-width-page .main-content,
    .landing-page .main-content,
    .producpage .main-content,
    .main-content {
      padding: 0 16px;
    }
    .section-nav + .article,
    .section-nav + .page-nav + .article {
      margin: 0;
      width: 100%;
    }
    .main-content {
      padding: 0 40px;
    }
    .hero .content-set hr {
      margin-top: 48px;
      width: 280px;
    }
    .hero .content-set {
      margin: 80px 0 0 0;
    }
    .hero__content--background .content-set {
      margin-left: 32px;
      margin-right: 32px;
    }
    .full-width-page .main-content,
    .landing-page .main-content,
    .producpage .main-content {
      padding: 0 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    .full-width-page .main-content,
    .landing-page .main-content,
    .producpage .main-content {
      padding: 0 80px;
    }
    .section-nav + .article,
    .section-nav + .page-nav + .article {
      margin-left: 320px;
    }
    .article {
      margin: 0;
      width: 100%;
    }
    .main-content {
      padding: 0 80px;
    }
    .hero img.hero__image--scaled {
      max-width: unset;
    }
    .full-bleed--constrained {
      margin-left: auto;
      margin-right: auto;
    }
    .full-width-page .main-content,
    .landing-page .main-content,
    .producpage .main-content {
      padding: 0 80px;
    }
  }

  @media screen and (min-width: 1201px) {
    .has-apix .main-content {
      margin-right: 400px;
      max-width: 1000px;
      padding-right: 0;
    }
    .has-apix .article {
      width: calc(100% - 272px);
      margin-left: 256px;
    }
    .section-nav + .article,
    .section-nav + .page-nav + .article {
      width: calc(100% - 296px);
    }
    .article {
      width: calc(100% - 496px);
    }
  }

  @media screen and (min-width: 1401px) {
    .has-apix .main-content {
      margin-right: calc((100% - 1400px) / 2 + 400px);
      max-width: 1000px;
    }
  }
`;
