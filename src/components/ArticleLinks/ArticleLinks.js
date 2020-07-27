		import React from 'react'
import './ArticleLinks.scss'

import Articles from '../../services/Articles.js'
import { Link } from 'react-router-dom'

/* створює посилання на статті в сайтбарі */
const ArticleLinks = () => {
	const articles = new Articles();  /* клас з інформацією про статті */

	const links = articles.getLinkArticles().map(link => {
		return (
			<li key={link.id}>
				<Link to={`/article/${link.url_name}`}>{link.name}</Link>
			</li>
		)
	});

	return (
			<div className="article-links">
				<ul>
					{ links }
				</ul>	
			</div>
						
		)
}

export default ArticleLinks;   