import { css } from 'lit-element';

export const TableStyles = css`
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 2rem;
    background-color: var(--app-reverse-text-color);
  }
  td,
  th {
    text-align: left;
    padding: 0.5rem;
    vertical-align: top;
    border-top: 0;
  }
  thead tr th {
    font-weight: 400;
    color: #222;
    vertical-align: bottom;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  caption + thead,
  colgroup + thead,
  thead:first-child > tr:first-child th,
  td {
    border-top: 0;
  }
  tbody + tbody {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .table {
    background-color: var(--app-reverse-text-color);
  }

  .table-responsive-vertical {
    max-width: 100%;
  }

  .no-border {
    border: 0;
  }

  .table-condensed thead,
  tbody,
  tfoot tr th,
  td {
    padding: 0.5rem;
  }

  .table-bordered {
    border: 0;
  }
  thead,
  tbody,
  tfoot tr th,
  td {
    border: 0;
    border-bottom: 1px solid var(--app-primary-border-color);
  }

  thead > tr > th,
  > td {
    border-bottom-width: 2px;
  }
  .table-hover tbody > tr:hover {
    background-color: var(--app-secondary-background-color);
  }
`;
