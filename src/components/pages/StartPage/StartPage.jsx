import React from 'react';
import logo from '../../../images/logo.svg';
import './StartPage.scss';

const StartPage = () => (
  <div className="start-page">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  </div>
);

export default StartPage;
