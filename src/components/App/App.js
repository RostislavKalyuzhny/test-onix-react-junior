import React, { useContext } from 'react'
import './App.scss'

import Header from '../Header/Header.js'
import Article from '../Article/Article.js'
import Footer from '../Footer/Footer.js'
import SideBar from '../SideBar/SideBar.js'

import { ThemeSwitchContext } from '../ThemeSwitchContext/ThemeSwitchContext.js'
import { BrowserRouter as Router } from 'react-router-dom'

/* об'єднує всі компоненти */
const App = () => {	

	const value = useContext(ThemeSwitchContext);

	let classTheme = (value.theme === 'night') ? 'night' : 'light'; 

	return (
			<Router>
				<div className={ classTheme }>
					<div className="container">
						<Header />

						<Article />
						
						<SideBar />
						
						<Footer />
						
					</div>
				</div>
			</Router>
		)

}

export default App;

