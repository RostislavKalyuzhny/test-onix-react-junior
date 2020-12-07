import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

import ArticleLinks from '../../elements/ArticleLinks/ArticleLinks';
import ThemeSwitch from '../../elements/ThemeSwitch/ThemeSwitch';

const Header = () => (
  <header id="header">

    <div className="logo">
      <Link to="/test-onix-react-junior/">
        <img src={logo} alt="Щось не так :(" />
      </Link>
    </div>

    <nav className="nav">
      <ul className="nav-main">
        <li>
          <Link to="/about-me">Про мене</Link>
        </li>
        <li>
          <Link to="/course-rate">Курс валют</Link>
        </li>
      </ul>

      <ArticleLinks />
      {' '}
      {/* виводиться тільки в мобільній версії (App.scss - медіа запроси) */}

    </nav>

    <div className="switch-theme">
      <ThemeSwitch />
    </div>

  </header>
);

export default Header;
