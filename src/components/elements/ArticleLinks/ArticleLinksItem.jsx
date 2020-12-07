import React from 'react';

import { Link } from 'react-router-dom';

/* eslint camelcase: 0 */
const ArticleLinksItem = ({ id, url_name, name }) => (
  <li key={id}>
    <Link to={`/article/${url_name}`}>{name}</Link>
  </li>
);

export default ArticleLinksItem;
