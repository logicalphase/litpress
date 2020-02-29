import { css } from 'lit-element';

export const MenuStyles = css`
  /* Navigation horizontal container */
  ul.main-navigation {
    list-style: none;
    margin: 0px;
    padding-left: 5px;
  }

  ul.main-navigation li {
    display: inline-block;
  }

  /* Login menu button */
  .login-nav-item {
    float: right;
    margin-right: 20px !important;
  }

  .menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    width: 44px;
    padding-top: 6px;
    margin-left: auto;
  }

  .desktop-menu {
    height: 46px;
    background-color: var(--app-secondary-background-color);
    border-bottom: 1px solid var(--app-primary-border-color);
  }

  .main-navigation a {
    margin: 0 10px 0 20px;
    padding-top: 14px;
    padding-bottom: 12px;
    font-weight: 400;
  }


  .main-navigation a,
  .main-navigation a:visited {
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
  }

  .main-navigation a:hover {
    color: var(--app-primary-color);
  }

  .main-navigation a[selected] {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    border-bottom: 2px solid var(--app-primary-color);
  }

 /* Dropdown menu button */
 .toolbar-platform-chooser__button {
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    display: -ms-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin: 0 5px 0 10px;
    padding-bottom: 12px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .toolbar-platform-chooser__button:hover {
    color: var(--app-primary-color);
    cursor: pointer;
  }

  .toolbar-platform-chooser__button:focus {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    outline: none;
    cursor: pointer;
  }

  .toolbar-platform-chooser__button .triangle {
    transition: transform .2s linear;
    fill: rgba(0, 0, 0, 0.54);
  }

  .open {
    transform: rotate(-180deg);
  }

  /* Dropdown menu elements */

  [data-target="slide-content"] {
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .dropdown-menu.show {
    border: none;
    position: absolute;
    top: 3.2rem;
    display: block;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0;
    min-width: 190px;
    width: 190px;
    top: 99%;
    left: 102px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(33,55,112,.16), 0 2px 10px 0 rgba(33,55,112,.12);
    box-shadow: 0 2px 5px 0 rgba(33,55,112,.16), 0 2px 10px 0 rgba(33,55,112,.12);
    animation: slide-down 0.3s linear both;
  }

  [data-target="slide-content"] {
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .dropdown-menu.hide {
    animation: slide-up 0.3s linear both;
  }

  @keyframes slide-down {
    0% {
      visibility: hidden;
      height: 0;
    }

    95% {
      visibility: visible;
      height: 210px;
    }

    /* Set height to 'auto' after animation for spacing showing form-invalid feedback message */
    100% {
      visibility: visible;
      height: auto;
    }
  }

  @keyframes slide-up {
    from {
      visibility: visible;
      height: 210px;
    }

    to {
      visibility: hidden;
      height: 0;
    }
  }


  .dropdown-menu {
    padding: .5rem;
  }

  .dropdown-menu {
    float: none;
    position: absolute;
  }

  .dropdown-menu {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .1rem;
    color: #495057;
    display: none;
    float: left;
    font-size: 1rem;
    left: 0;
    list-style: none;
    margin: .125rem 0 0;
    min-width: 10rem;
    padding: .5rem 0;
    position: absolute;
    text-align: left;
    top: 100%;
    z-index: 1000;
  }

  .dropdown-menu.show.show a {
    border-radius: 0;
    font-size: .88rem;
    margin-bottom: 1px;
    text-decoration: none;
  }

  .dropdown-menu a  {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-bottom: 2px;
  }

  .dropdown-item {
    font-size: .9rem;
    margin-left: 0;
    padding: .5rem;
  }

  .dropdown-menu > a[selected] {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    border-bottom: 0px solid var(--app-primary-color);
  }

  .dropdown-menu > a {
    display: block;
    margin: 0;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    clear: both;
    padding: .55rem 1rem;
    text-align: inherit;
    white-space: nowrap;
    transition: all 0.5s;
  }

  .dropdown-menu {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .1rem;
    color: #495057;
    display: none;
    float: left;
    font-size: 1rem;
    left: 0;
    list-style: none;
    margin: .125rem 0 0;
    min-width: 10rem;
    padding: .5rem 0;
    position: absolute;
    text-align: left;
    top: 100%;
    z-index: 1000;
  }
`;