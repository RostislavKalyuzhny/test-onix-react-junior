import React from 'react';
import './Article.scss';

import { Switch, Route } from 'react-router-dom';
import CourseRate from '../CourseRate/CourseRate';
import AboutMe from '../AboutMe/AboutMe';
import ArticlePage from '../ArticlePage/ArticlePage';
import StartPage from '../StartPage/StartPage';

/* відповідає за відображення контенту сторінки (головне меню та сайтбар) */
const Article = () => (
  <article id="article">
    <Switch>
      <Route path="/test-onix-react-junior/" exact render={StartPage} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/course-rate" component={CourseRate} />

      <Route path="/article/" exact render={() => <h2>Статті</h2>} />
      <Route
        path="/article/:name"
        render={(stats) => {
          const { name } = stats.match.params;
          return <ArticlePage nameUrl={name} />;
        }}
      />

      <Route render={() => <h2>Такої сторінки не знайдено!</h2>} />
    </Switch>
  </article>
);

export default Article;
