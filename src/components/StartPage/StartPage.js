import React from 'react';
import logo from '../../images/logo.svg';
import '../StartPage/StartPage.scss';

const StartPage = () => {
  return (
    <div className="start-page">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    </div>
  );
}

export default StartPage;