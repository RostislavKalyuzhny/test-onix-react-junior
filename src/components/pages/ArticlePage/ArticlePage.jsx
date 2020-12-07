import React from 'react';
import './ArticlePage.scss';

import Articles from '../../../services/Articles.js';

/* генерує статтю відповідно до її - url_name */
const ArticlePage = ({ nameUrl }) => {
  const articles = new Articles();
  // const { id, url_name, name, text, date } = articles.getArticlesByURL(nameUrl);

  const page = articles.getArticlesByURL(nameUrl);

  if (page === undefined) {
    return (<h2>Такої статті не знайдено!</h2>);
  }

  const { name, text, date } = page;

  return (
    <div className="article-page">
      <h2>{ name }</h2>
      <p>{ text }</p>
      <div className="date">{ date }</div>
    </div>
  );
};

export default ArticlePage;
