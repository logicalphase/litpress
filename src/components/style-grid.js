import { css } from 'lit-element';
export const GridStyle = css`
  .grid,
  .grid--alternate {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 4fr;
  }
  .grid--alternate.grid__no-gap,
  .grid.grid__no-gap {
    grid-column-gap: 0;
  }
  .grid--alternate.grid--horizontal-center,
  .grid.grid--horizontal-center {
    justify-items: center;
  }
  .grid--alternate.grid--horizontal-stretch,
  .grid.grid--horizontal-stretch {
    justify-items: stretch;
  }
  .grid--alternate.grid--vertical-center,
  .grid.grid--vertical-center {
    align-items: center;
  }
  .grid--alternate.grid--vertical-stretch,
  .grid.grid--vertical-stretch {
    align-items: stretch;
  }
  .grid--alternate__col--horizontal-center,
  .grid__col--horizontal-center {
    justify-self: center;
  }
  .grid--alternate__col--horizontal-stretch,
  .grid__col--horizontal-stretch {
    justify-self: stretch;
  }
  .grid--alternate__col--vertical-center,
  .grid__col--vertical-center {
    align-self: center;
  }
  .grid--alternate__col--vertical-stretch,
  .grid__col--vertical-stretch {
    align-self: center;
  }
  @media all and (min-width: 600px) {
    .grid {
      grid-column-gap: 15px;
      grid-template-columns: repeat(12, 1fr);
    }
    .grid .is-1 {
      grid-column: span 1 / span 1;
    }
    .grid .is-2 {
      grid-column: span 2 / span 2;
    }
    .grid .is-3 {
      grid-column: span 3 / span 3;
    }
    .grid .is-4 {
      grid-column: span 4 / span 4;
    }
    .grid .is-5 {
      grid-column: span 5 / span 5;
    }
    .grid .is-6 {
      grid-column: span 6 / span 6;
    }
    .grid .is-7 {
      grid-column: span 7 / span 7;
    }
    .grid .is-8 {
      grid-column: span 8 / span 8;
    }
    .grid .is-9 {
      grid-column: span 9 / span 9;
    }
    .grid .is-10 {
      grid-column: span 10 / span 10;
    }
    .grid .is-11 {
      grid-column: span 11 / span 11;
    }
    .grid .is-12 {
      grid-column: span 12 / span 12;
    }
    .grid .is-1--offset {
      grid-column-start: 2;
    }
    .grid .is-2--offset {
      grid-column-start: 3;
    }
    .grid .is-3--offset {
      grid-column-start: 4;
    }
    .grid .is-4--offset {
      grid-column-start: 5;
    }
    .grid .is-5--offset {
      grid-column-start: 6;
    }
    .grid .is-6--offset {
      grid-column-start: 7;
    }
    .grid .is-7--offset {
      grid-column-start: 8;
    }
    .grid .is-8--offset {
      grid-column-start: 9;
    }
    .grid .is-9--offset {
      grid-column-start: 10;
    }
    .grid .is-10--offset {
      grid-column-start: 11;
    }
    .grid .is-11--offset {
      grid-column-start: 12;
    }
    .grid .is-12--offset {
      grid-column-start: 13;
    }
  }
  @media all and (min-width: 768px) {
    .grid--alternate {
      grid-column-gap: 15px;
      grid-template-columns: repeat(12, 1fr);
    }
    .grid--alternate .is-1 {
      grid-column: span 1 / span 1;
    }
    .grid--alternate .is-2 {
      grid-column: span 2 / span 2;
    }
    .grid--alternate .is-3 {
      grid-column: span 3 / span 3;
    }
    .grid--alternate .is-4 {
      grid-column: span 4 / span 4;
    }
    .grid--alternate .is-5 {
      grid-column: span 5 / span 5;
    }
    .grid--alternate .is-6 {
      grid-column: span 6 / span 6;
    }
    .grid--alternate .is-7 {
      grid-column: span 7 / span 7;
    }
    .grid--alternate .is-8 {
      grid-column: span 8 / span 8;
    }
    .grid--alternate .is-9 {
      grid-column: span 9 / span 9;
    }
    .grid--alternate .is-10 {
      grid-column: span 10 / span 10;
    }
    .grid--alternate .is-11 {
      grid-column: span 11 / span 11;
    }
    .grid--alternate .is-12 {
      grid-column: span 12 / span 12;
    }
    .grid--alternate .is-1--offset {
      grid-column-start: 2;
    }
    .grid--alternate .is-2--offset {
      grid-column-start: 3;
    }
    .grid--alternate .is-3--offset {
      grid-column-start: 4;
    }
    .grid--alternate .is-4--offset {
      grid-column-start: 5;
    }
    .grid--alternate .is-5--offset {
      grid-column-start: 6;
    }
    .grid--alternate .is-6--offset {
      grid-column-start: 7;
    }
    .grid--alternate .is-7--offset {
      grid-column-start: 8;
    }
    .grid--alternate .is-8--offset {
      grid-column-start: 9;
    }
    .grid--alternate .is-9--offset {
      grid-column-start: 10;
    }
    .grid--alternate .is-10--offset {
      grid-column-start: 11;
    }
    .grid--alternate .is-11--offset {
      grid-column-start: 12;
    }
    .grid--alternate .is-12--offset {
      grid-column-start: 13;
    }
  }
  @media all and (min-width: 1024px) {
    .grid,
    .grid--alternate {
      grid-column-gap: 28px;
      grid-template-columns: repeat(12, 1fr);
    }
    .grid .is-1__large,
    .grid--alternate .is-1__large {
      grid-column: span 1 / span 1;
    }
    .grid .is-2__large,
    .grid--alternate .is-2__large {
      grid-column: span 2 / span 2;
    }
    .grid .is-3__large,
    .grid--alternate .is-3__large {
      grid-column: span 3 / span 3;
    }
    .grid .is-4__large,
    .grid--alternate .is-4__large {
      grid-column: span 4 / span 4;
    }
    .grid .is-5__large,
    .grid--alternate .is-5__large {
      grid-column: span 5 / span 5;
    }
    .grid .is-6__large,
    .grid--alternate .is-6__large {
      grid-column: span 6 / span 6;
    }
    .grid .is-7__large,
    .grid--alternate .is-7__large {
      grid-column: span 7 / span 7;
    }
    .grid .is-8__large,
    .grid--alternate .is-8__large {
      grid-column: span 8 / span 8;
    }
    .grid .is-9__large,
    .grid--alternate .is-9__large {
      grid-column: span 9 / span 9;
    }
    .grid .is-10__large,
    .grid--alternate .is-10__large {
      grid-column: span 10 / span 10;
    }
    .grid .is-11__large,
    .grid--alternate .is-11__large {
      grid-column: span 11 / span 11;
    }
    .grid .is-12__large,
    .grid--alternate .is-12__large {
      grid-column: span 12 / span 12;
    }
    .grid .is-1__large--offset,
    .grid--alternate .is-1__large--offset {
      grid-column-start: 2;
    }
    .grid .is-2__large--offset,
    .grid--alternate .is-2__large--offset {
      grid-column-start: 3;
    }
    .grid .is-3__large--offset,
    .grid--alternate .is-3__large--offset {
      grid-column-start: 4;
    }
    .grid .is-4__large--offset,
    .grid--alternate .is-4__large--offset {
      grid-column-start: 5;
    }
    .grid .is-5__large--offset,
    .grid--alternate .is-5__large--offset {
      grid-column-start: 6;
    }
    .grid .is-6__large--offset,
    .grid--alternate .is-6__large--offset {
      grid-column-start: 7;
    }
    .grid .is-7__large--offset,
    .grid--alternate .is-7__large--offset {
      grid-column-start: 8;
    }
    .grid .is-8__large--offset,
    .grid--alternate .is-8__large--offset {
      grid-column-start: 9;
    }
    .grid .is-9__large--offset,
    .grid--alternate .is-9__large--offset {
      grid-column-start: 10;
    }
    .grid .is-10__large--offset,
    .grid--alternate .is-10__large--offset {
      grid-column-start: 11;
    }
    .grid .is-11__large--offset,
    .grid--alternate .is-11__large--offset {
      grid-column-start: 12;
    }
    .grid .is-12__large--offset,
    .grid--alternate .is-12__large--offset {
      grid-column-start: 13;
    }
    .grid--alternate__small-gap,
    .grid__small-gap {
      grid-column-gap: 15px;
    }
  }
  @media all and (min-width: 1280px) {
    .grid,
    .grid--alternate {
      grid-column-gap: 28px;
      grid-template-columns: repeat(12, 1fr);
    }
    .grid .is-1__xl,
    .grid--alternate .is-1__xl {
      grid-column: span 1 / span 1;
    }
    .grid .is-2__xl,
    .grid--alternate .is-2__xl {
      grid-column: span 2 / span 2;
    }
    .grid .is-3__xl,
    .grid--alternate .is-3__xl {
      grid-column: span 3 / span 3;
    }
    .grid .is-4__xl,
    .grid--alternate .is-4__xl {
      grid-column: span 4 / span 4;
    }
    .grid .is-5__xl,
    .grid--alternate .is-5__xl {
      grid-column: span 5 / span 5;
    }
    .grid .is-6__xl,
    .grid--alternate .is-6__xl {
      grid-column: span 6 / span 6;
    }
    .grid .is-7__xl,
    .grid--alternate .is-7__xl {
      grid-column: span 7 / span 7;
    }
    .grid .is-8__xl,
    .grid--alternate .is-8__xl {
      grid-column: span 8 / span 8;
    }
    .grid .is-9__xl,
    .grid--alternate .is-9__xl {
      grid-column: span 9 / span 9;
    }
    .grid .is-10__xl,
    .grid--alternate .is-10__xl {
      grid-column: span 10 / span 10;
    }
    .grid .is-11__xl,
    .grid--alternate .is-11__xl {
      grid-column: span 11 / span 11;
    }
    .grid .is-12__xl,
    .grid--alternate .is-12__xl {
      grid-column: span 12 / span 12;
    }
    .grid .is-1__xl--offset,
    .grid--alternate .is-1__xl--offset {
      grid-column-start: 2;
    }
    .grid .is-2__xl--offset,
    .grid--alternate .is-2__xl--offset {
      grid-column-start: 3;
    }
    .grid .is-3__xl--offset,
    .grid--alternate .is-3__xl--offset {
      grid-column-start: 4;
    }
    .grid .is-4__xl--offset,
    .grid--alternate .is-4__xl--offset {
      grid-column-start: 5;
    }
    .grid .is-5__xl--offset,
    .grid--alternate .is-5__xl--offset {
      grid-column-start: 6;
    }
    .grid .is-6__xl--offset,
    .grid--alternate .is-6__xl--offset {
      grid-column-start: 7;
    }
    .grid .is-7__xl--offset,
    .grid--alternate .is-7__xl--offset {
      grid-column-start: 8;
    }
    .grid .is-8__xl--offset,
    .grid--alternate .is-8__xl--offset {
      grid-column-start: 9;
    }
    .grid .is-9__xl--offset,
    .grid--alternate .is-9__xl--offset {
      grid-column-start: 10;
    }
    .grid .is-10__xl--offset,
    .grid--alternate .is-10__xl--offset {
      grid-column-start: 11;
    }
    .grid .is-11__xl--offset,
    .grid--alternate .is-11__xl--offset {
      grid-column-start: 12;
    }
    .grid .is-12__xl--offset,
    .grid--alternate .is-12__xl--offset {
      grid-column-start: 13;
    }
    .grid--alternate__small-gap,
    .grid__small-gap {
      grid-column-gap: 15px;
    }
  }
`;
