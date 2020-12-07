import React from 'react';
import './ArticleLinks.scss';

import Articles from '../../../services/Articles';
import ArticleLinksItem from './ArticleLinksItem';

/* створює посилання на статті в сайтбарі */
const ArticleLinks = () => {
  const articles = new Articles(); /* клас з інформацією про статті */

  return (
    <div className="article-links">
      <ul>
        { articles.getLinkArticles().map((link) => <ArticleLinksItem key={link.id} {...link} />) }
      </ul>
    </div>

  );
};

export default ArticleLinks;
