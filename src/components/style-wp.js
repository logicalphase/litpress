import { css } from 'lit-element';

export const WordPressStyles = css`
  /*--------------------------------------------------------------
  # Image Captions
  --------------------------------------------------------------*/

  img {
    padding: 1px;
    border-top: 4px solid #efefef;
    border-left: 4px solid #efefef;
    border-right: 4px solid #efefef;
  }

  /*--------------------------------------------------------------
  # Image Captions
  --------------------------------------------------------------*/
  figcaption {
    border: 4px solid #efefef;
    font-size: 0.9rem;
    padding: 8px 9px;
    margin: 5px 14px 10px 14px;
    line-height: normal;
    text-align: center;
    margin: 0 auto;
  }

  /*--------------------------------------------------------------
  # Alignments
  --------------------------------------------------------------*/
  figure {
    margin: 1em 0;
    /* Extra wide images within figure tags don't overflow the content area. */
  }

  .alignleft img,
  .alignright img,
  .alignleft figcaption,
  .alignright figcaption {
    max-width: 100%;
    width: 100%;
  }

  .alignleft figcaption {
    clear: left;
  }

  .alignright figcaption {
    clear: right;
  }

  .alignleft img,
  .alignleft figcaption {
    float: none;
    margin-right: 0;
  }

  .alignright img,
  .alignright figcaption {
    float: none;
    margin-left: 0;
  }

  .aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /* desktop screen */
  @media (min-width: 648px) {
    .alignleft img,
    .alignright img,
    .alignleft figcaption,
    .alignright figcaption {
      max-width: 50%;
      width: 50%;
    }

    .alignleft figcaption {
      clear: left;
    }

    .alignright figcaption {
      clear: right;
    }

    .alignleft img,
    .alignleft figcaption {
      float: left;
      margin-right: 1.5em;
    }

    .alignright img,
    .alignright figcaption {
      float: right;
      margin-left: 1.5em;
    }

    .aligncenter {
      clear: both;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
