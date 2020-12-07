import React, { useContext } from 'react';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layouts/Header/Header';
import Article from '../layouts/Article/Article';
import Footer from '../layouts/Footer/Footer';
import SideBar from '../layouts/SideBar/SideBar';

import { ThemeSwitchContext } from '../elements/ThemeSwitchContext/ThemeSwitchContext';

/* об'єднує всі компоненти */
const App = () => {
  const value = useContext(ThemeSwitchContext);

  const classTheme = (value.theme === 'night') ? 'night' : 'light';

  return (
    <Router>
      <div className={classTheme}>
        <div className="container">
          <Header />

          <Article />

          <SideBar />

          <Footer />

        </div>
      </div>
    </Router>
  );
};

export default App;
