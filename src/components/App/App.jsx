import React, { useContext } from 'react';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

import { ThemeSwitchContext } from '../ThemeSwitchContext/ThemeSwitchContext';

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
