import React from 'react'
import './Article.scss'

import CourseRate from '../CourseRate/CourseRate.js'
import AboutMe from '../AboutMe/AboutMe.js'
import ArticlePage from '../ArticlePage/ArticlePage.js'
import StartPage from '../StartPage/StartPage.js'
import { Switch, Route } from 'react-router-dom'

/* відповідає за відображення контенту сторінки (головне меню та сайтбар)*/
const Article = () => {
	return(
		<article id="article">
			<Switch>
				<Route path='/test-onix-react-junior/' exact render={StartPage}/>
				<Route path='/about-me' component={AboutMe} />
				<Route path='/course-rate' component={CourseRate} />

				<Route path='/article/' exact render={()=> <h2>Статті</h2>} />
				<Route path='/article/:name' 
						 render={( stats ) => {
						 	const { name } = stats.match.params;
							return <ArticlePage nameUrl={name}/>
						 }}/>

				<Route render={()=> <h2>Такої сторінки не знайдено!</h2>}/>
			</Switch>
		</article>
	)
}

export default Article;